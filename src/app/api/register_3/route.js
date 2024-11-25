import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  await connectDB();

  try {
    const { name,email, phone, password, college, course, semester, chessId } = await request.json();

    // Verify the chessId with Chess.com API
    const response = await fetch(`https://api.chess.com/pub/player/${chessId}`);
    if (response.status !== 200) {
      return NextResponse.json({ success: false, error: 'Invalid chess.com id' }, { status: 201 });
    }

    // Check if the chessId is already in use
    const existingChessIdUser = await Register.findOne({ chessId });
    if (existingChessIdUser) {
      return NextResponse.json(
        { success: false, error: 'Chess.com ID is already in use' },
        { status: 201 }
      );
    }

    // Hash the password before saving the user
    const saltRounds = parseInt(process.env.CODE, 10); // parse CODE as a number
    const hashpassword = await bcrypt.hash(password, saltRounds);

    // Create new user with the provided data
    const user = new Register({
      name,
      email,
      phone,
      college,
      course,
      semester,
      chessId,
      password: hashpassword,
      avatar:"/profile/12.png"
    });

    // Save the user to the database
    await user.save();

    // Convert the user object to a plain JavaScript object
    const userObject = user.toObject();

    // Remove the password from the object before signing the token
    delete userObject.password;
    console.log(userObject)
    // Sign a JWT token with the user's data (excluding the password)
    const token = jwt.sign(userObject, process.env.JWT_SECRET); // Optionally, you can set an expiry for the token
    console.log(token)
    return NextResponse.json(
      { success: true, message: 'User registered successfully', token },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}
