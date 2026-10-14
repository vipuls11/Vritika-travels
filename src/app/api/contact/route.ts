import { NextResponse } from 'next/server';
import connectMongo from '../../../../backend/db/connectMongo';
import Inquiry from '../../../../backend/models/Inquiry';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, destination, travelMonth, message, selectedPackage, selectedPackagePrice } = body ?? {};

    if (!fullName || !email || !destination || !travelMonth || !message) {
      return NextResponse.json(
        { error: 'Please complete all fields before sending your inquiry.' },
        { status: 400 },
      );
    }

    const client = await connectMongo();

    if (!client) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your inquiry was received in demo mode. Add MONGODB_URI to save it in MongoDB.',
        },
        { status: 200 },
      );
    }

    await Inquiry.create({
      fullName,
      email,
      destination,
      travelMonth,
      message,
      selectedPackage: selectedPackage || destination,
      selectedPackagePrice: selectedPackagePrice || '',
    });

    return NextResponse.json(
      { success: true, message: 'Your inquiry has been saved successfully.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong while sending your inquiry. Please try again.' },
      { status: 500 },
    );
  }
}
