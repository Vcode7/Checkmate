import { NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';
// Assuming you're using MongoDB to update user data
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';

export async function PUT(request) {
  await connectDB();

  // Get token from request headers
  const token = request.headers.get('Authorization');  // Extract token from 'Bearer token'
  // Check if the token matches the one stored in the environment variables
  if (token !== process.env.AUTH_TOKEN) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const { userData } = await request.json();
    console.log(userData)

    // Assuming you're updating user data based on the ID or another identifier
    const updatedUser = await Register.findOneAndUpdate(
      { chessId: userData.chessId }, // Modify this to match your search criteria
      { $set: userData },
      { new: true }
    );
    
    if (!updatedUser) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    const token = jwt.sign(userData, process.env.JWT_SECRET); // Optionally, you can set an expiry for the token
    
    return NextResponse.json({ success: true, token: token }, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
