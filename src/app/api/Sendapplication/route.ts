import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, cnicNumber, mobileNumber, loanType, loanAmount, photo } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "Sardarjagmohansinghnanda@gmail.com", // Loan officer's email
      subject: `New Loan Application for ${loanType}`,
      text: `
        Full Name: ${fullName}
        CNIC Number: ${cnicNumber}
        Mobile Number: ${mobileNumber}
        Loan Type: ${loanType}
        Loan Amount: ${loanAmount}
      `,
      attachments: photo
        ? [
            {
              filename: "applicant_photo.jpg",
              content: photo.split("base64,")[1],
              encoding: "base64",
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Loan application sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send loan application" }, { status: 500 });
  }
}