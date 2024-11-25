import { NextResponse } from 'next/server';
import Register from '@/lib/models/Register'; // Adjust path based on your project structure
import connectDB from '@/lib/middelware/connectdb'; // Ensure you have this utility for database connection

// POST handler for the API route
export async function POST(req) {
  // Connect to the database
  await connectDB();

  try {
    // Parse the request body (use req.json() to extract JSON data from the POST request)
    const { email } = await req.json();

    // Validate the email
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required.' },
        { status: 400 }
      );
    }

    // Find and delete the user
    const deletedUser = await Register.findOneAndDelete({ email });

    // If no user is found
    if (!deletedUser) {
      return NextResponse.json(
        { message: 'User not found.' },
        { status: 404 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: 'User deleted successfully.', user: deletedUser },
      { status: 200 }
    );
  } catch (error) {
    // Error handling
    return NextResponse.json(
      { message: 'Error deleting user.', error: error.message },
      { status: 500 }
    );
  }
}
