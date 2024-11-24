import { NextResponse } from 'next/server';

<<<<<<< HEAD
=======
import jwt from 'jsonwebtoken';
>>>>>>> 25ee8bd (0000)
// Assuming you're using MongoDB to update user data
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';

export async function PUT(request) {
  await connectDB();

  // Get token from request headers
<<<<<<< HEAD
  const token = request.headers.get('Authorization')?.split(' ')[1];  // Extract token from 'Bearer token'

=======
  const token = request.headers.get('Authorization');  // Extract token from 'Bearer token'
>>>>>>> 25ee8bd (0000)
  // Check if the token matches the one stored in the environment variables
  if (token !== process.env.AUTH_TOKEN) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
<<<<<<< HEAD

  try {
    const { userData } = await request.json();
=======
  
  try {
    const { userData } = await request.json();
    console.log(userData)
>>>>>>> 25ee8bd (0000)

    // Assuming you're updating user data based on the ID or another identifier
    const updatedUser = await Register.findOneAndUpdate(
      { chessId: userData.chessId }, // Modify this to match your search criteria
      { $set: userData },
      { new: true }
    );
<<<<<<< HEAD

    if (!updatedUser) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedUser }, { status: 200 });
=======
    
    if (!updatedUser) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    const token = jwt.sign(userData, process.env.JWT_SECRET); // Optionally, you can set an expiry for the token
    
    return NextResponse.json({ success: true, token: token }, { status: 200 });
>>>>>>> 25ee8bd (0000)
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
