import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {

  // Extracting my variables from the req;
  const { name, email, subject, message } = await req.json();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MY_PASS,
    },  
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: email,
    to: process.env.MY_MAIL,
    subject: `${name} - ${subject}`,
    text: message,
  })

  if (info.rejected) {
    return NextResponse.json({ success: false, message: "Failed to send" })
  }

  return NextResponse.json({ success: true, message: "Congrats email has been sent" })

}