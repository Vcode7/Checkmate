import { NextResponse } from 'next/server';
import connectDB from '../../../../middelware/connectdb';
import Register from '../../../../models/Register';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  await connectDB();

  try {
    const { emailOrPhone, password } = await request.json();

    // Validate input
    console.log(!emailOrPhone || !password)
    if (!emailOrPhone || !password) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 200 });
    }

    // Find user by email or phone
    const user = await Register.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 201 });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 201 });
    }

    // Generate JWT token
    const token = jwt.sign(user, process.env.JWT_SECRET);

    // Send token to the client
    return NextResponse.json({ success: true, token }, { status: 200 });

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
