import { NextResponse } from 'next/server';

// Assuming you're using MongoDB to update user data
import connectDB from "mid/connectdb.js";
import Register from 'mo/Register.js';

export async function PUT(request) {
  await connectDB();

  // Get token from request headers
  const token = request.headers.get('Authorization')?.split(' ')[1];  // Extract token from 'Bearer token'

  // Check if the token matches the one stored in the environment variables
  if (token !== process.env.AUTH_TOKEN) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { userData } = await request.json();

    // Assuming you're updating user data based on the ID or another identifier
    const updatedUser = await Register.findOneAndUpdate(
      { chessId: userData.chessId }, // Modify this to match your search criteria
      { $set: userData },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
