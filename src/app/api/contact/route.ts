import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import connectMongo from "../../../../backend/db/connectMongo";
import Inquiry from "../../../../backend/models/Inquiry";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      destination,
      travelMonth,
      message,
      selectedPackage,
      selectedPackagePrice,
    } = body ?? {};

    if (!fullName || !email || !destination || !travelMonth || !message) {
      return NextResponse.json(
        { error: "Please complete all fields before sending your inquiry." },
        { status: 400 },
      );
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Configure Gmail SMTP
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP environment variables");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const client = await connectMongo();

    if (!client) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Your inquiry was received in demo mode. Add MONGODB_URI to save it in MongoDB.",
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
      selectedPackagePrice: selectedPackagePrice || "",
    });
    // Send inquiry email
    await transporter.sendMail({
      from: `"Travel Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email.trim(),
      subject: `New Travel Inquiry - ${destination.trim()}`,
      text: `
New Travel Inquiry

Full Name: ${fullName}
Email: ${email}
Destination: ${destination}
Travel Month: ${travelMonth}

Selected Package: ${selectedPackage || destination}
Package Price: ${selectedPackagePrice || "Not specified"}

Message:
${message}
      `,
    });

    // 2. Send thank-you email to customer
    await transporter.sendMail({
      from: `"Travel Team" <${process.env.SMTP_USER}>`,
      to: email.trim(),
      subject: "Thank You for Your Travel Inquiry!",
      text: `
Hi ${fullName},

Thank you for contacting us!

We have received your travel inquiry and appreciate your interest in exploring ${destination} with us.

Here are your inquiry details:

Destination: ${destination}
Travel Month: ${travelMonth}
Selected Package: ${selectedPackage || destination}
Package Price: ${selectedPackagePrice || "To be confirmed"}

Our travel team will review your requirements and get in touch with you soon to help plan your trip.

If you have any additional questions, simply reply to this email.

Thank you for choosing us. We look forward to helping you plan a wonderful journey!

Best regards,
The Travel Team
      `,
    });
    return NextResponse.json(
      { success: true, message: "Your inquiry has been saved successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your inquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}
