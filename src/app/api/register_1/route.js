import connectDB from '@/lib/middelware/connectdb';
import Register from '@/lib/models/Register';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  console.log("loaded mongo")
  try {
    const { email, phone} = await req.json();
    console.log(email)
    // Validate input
    if (!email || !phone) {
      return NextResponse.json({success:false , error: 'All fields are required' }, { status: 201});
    }
    console.log(email)
    // Check if user already exists
    const existingUser = await Register.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      let errorMessage = existingUser.email === email
        ? 'Email is already in use'
        : 'Phone number is already in use';

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 201 })
      }
      else{

        return NextResponse.json({success:true , message: 'Step 1 registration complete' }, { status: 201 });
      }
  } catch (error) {

    return NextResponse.json({ error: error }, { status: 500 });
  }
}
