import { NextResponse } from 'next/server';
import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';

export async function GET() {
  await connectDB();

  try {
    // Fetch all registrations
    const registrations = await Register.find({}, { password: 0 }); // Exclude the password field

    // Get the total count of registrations
    const totalCount = registrations.length;

    return NextResponse.json(
      {
        success: true,
        totalCount,
        registrations,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while fetching registrations.' },
      { status: 500 }
    );
  }
}
