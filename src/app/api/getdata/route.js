import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';
import jwt from 'jsonwebtoken';

export async function POST(request){
  await connectDB();
  
  const token = request.headers.get('Authorization');  // Extract token from 'Bearer token'
  // Check if the token matches the one stored in the environment variables
  if (token !== process.env.AUTH_TOKEN) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { email } = await request.json();

    // Validate input
    console.log(!email)
    if (!email) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 200 });
    }

    // Find user by email or phone
    const user = await Register.findOne({
      $or: [{ email: email}]
    });

    if (!user) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 201 });
    }
    // Generate JWT token
    const userObject = user.toObject();

    // Remove the password from the object before signing the token
    delete userObject.password;

    // Sign a JWT token with the user's data (excluding the password)
    const token = jwt.sign(userObject, process.env.JWT_SECRET); // Optionally, you can set an expiry for the token
    // Send token to the client
    return NextResponse.json({ success: true, token }, { status: 200 });

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}