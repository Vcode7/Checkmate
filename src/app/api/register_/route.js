// pages/api/register.js
import { NextResponse } from 'next/server';
import connectDB from '@/../middelware/connectdb';
import Register from '@/../models/register';

export async function POST(req) {
  await connectDB();

  try {
    // Parse the request body
    const { email, phone, password, confirmPassword, college, otherCollege, course, semester, chessId } = await req.json();

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    // Create a new user document
    const user = new Register({
      email,
      phone,
      password,
      confirmPassword,
      college,
      otherCollege,
      course,
      semester,
      chessId,
    });

    // Save user to the database
    await user.save();

    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);

    // Handle duplicate entries for unique fields
    if (error.code === 11000) {
      return NextResponse.json({ message: 'Email or Chess.com ID already exists' }, { status: 409 });
    }

    return NextResponse.json({ message: 'Server error. Please try again later.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
