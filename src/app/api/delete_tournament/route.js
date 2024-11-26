import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Tournament from '@/lib/models/Tournament.js';

export async function DELETE(request) {
  await connectDB();

  try {
    const { name } = await request.json(); // Extract the name of the tournament to be deleted

    if (!name) {
      return NextResponse.json(
        { success: false, error: 'Tournament name is required' },
        { status: 400 }
      );
    }

    const deletedTournament = await Tournament.findOneAndDelete({ name });

    if (!deletedTournament) {
      return NextResponse.json(
        { success: false, error: 'Tournament not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Tournament deleted successfully', tournament: deletedTournament },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting tournament:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while deleting the tournament' },
      { status: 500 }
    );
  }
}
