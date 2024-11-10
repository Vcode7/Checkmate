// src/app/api/getTournaments/route.js
import { NextResponse } from 'next/server';
import connectDB from "mid/connectdb.js";
import Tournament from 'mo/Tournament.js';

export async function GET() {
  await connectDB();

  try {
    const tournaments = await Tournament.find({});
    return NextResponse.json(
      { success: true, tournaments },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while fetching tournaments' },
      { status: 500 }
    );
  }
}
