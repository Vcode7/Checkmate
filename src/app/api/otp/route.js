import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Function to handle POST requests
export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Generate a random OTP (6-digit number as a string)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service provider
      auth: {
        user: process.env.EMAIL_ID, // Sender email (stored in environment variables)
        pass: process.env.EMAIL_PASSWORD, // Sender email password (stored securely)
      },
    });

    // Email message options
    const mailOptions = {
      from: `"Support Team" <${process.env.EMAIL_ID}>`, // Sender name and email
      to: email, // Recipient email
      subject: 'Your OTP for Email Verification',
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    };

    // Send the OTP email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: 'OTP sent successfully', otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json({ error: 'Failed to send OTP. Please try again.' }, { status: 500 });
  }
}
