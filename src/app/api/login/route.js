import { NextResponse } from 'next/server';
import connectDB from "mid/connectdb.js";
import Register from 'mo/Register.js';
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
