// src/app/api/addTournament/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../../middelware/connectdb';
import Tournament from '../../../../models/Tournament';

export async function POST(request) {
  await connectDB();

  try {
    const { maxMembers, name, timing } = await request.json();

    // Request to create tournament using the Chess.com API
    const chessResponse = await fetch(`https://api.chess.com/pub/tournament/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHESS_COM_API_KEY}` // Make sure you have an API key
      },
      body: JSON.stringify({
        name,
        maxMembers,
        timing,
      }),
    });

    if (!chessResponse.ok) {
      throw new Error('Error creating tournament on Chess.com');
    }

    const chessData = await chessResponse.json();
    const chessLink = chessData.url; // Adjust based on Chess.com API response structure

    // Save tournament details in MongoDB
    const newTournament = new Tournament({
      name,
      maxMembers,
      timing,
      chessLink,
    });

    await newTournament.save();

    return NextResponse.json(
      { success: true, message: 'Tournament created successfully', tournament: newTournament },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating tournament:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while creating the tournament' },
      { status: 500 }
    );
  }
}
