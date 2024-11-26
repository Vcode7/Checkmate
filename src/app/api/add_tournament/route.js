// src/app/api/addTournament/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Tournament from '@/lib/models/Tournament.js';

export async function POST(request) {
  await connectDB();

  try {
    const {  name , maxMembers , start , end , time , link , date} = await request.json();

    const newTournament = new Tournament({
      name,
      maxMembers,
      start ,
      end ,
      time ,
      link , 
      date
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
