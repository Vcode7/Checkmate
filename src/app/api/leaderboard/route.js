import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';// Your user model

export async function GET() {
  try {
    // Connect to the database
    await connectDB();

    const users = await Register.find({}).select('name chessId'); 
  
    const leaderboardData = await Promise.all(
      users.map(async (user) => {
        const { chessId, name } = user;

        try {
          // Fetch user stats from Chess.com API using fetch
          const response = await fetch(`https://api.chess.com/pub/player/${chessId}/stats`);

          // If the response is not OK (status is not 200), handle the error
          if (!response.ok) {
            throw new Error(`Failed to fetch data for chessId: ${chessId}`);
          }

          // Parse the JSON response from Chess.com
          const data = await response.json();

          // Extract ratings from the response
          const { chess_blitz, chess_rapid, chess_bullet } = data;

          // Return user data along with ratings
          return {
            name,
            chessId,
            blitzRating: chess_blitz?.last?.rating || 'N/A',
            rapidRating: chess_rapid?.last?.rating || 'N/A',
            bulletRating: chess_bullet?.last?.rating || 'N/A',
          };
        } catch (error) {
          console.error(`Failed to fetch Chess.com data for ${name}:`, error);
          return {
            name,
            chessId,
            blitzRating: 'Error',
            rapidRating: 'Error',
            bulletRating: 'Error',
          };
        }
      })
    );

    return NextResponse.json(leaderboardData);
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return NextResponse.json({ error: 'Failed to load leaderboard data' }, { status: 500 });
  }
}
