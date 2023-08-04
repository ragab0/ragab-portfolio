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

  // defining the transport object
  const options = {
    to: process.env.MY_MAIL,
    subject: `Ragab - ${subject}`,
    text: `name: ${name}\nEmail: ${email}\n\n${message}`,
  }

  // send mail with 
  transporter.sendMail(options, function(err, info) {
    console.log(info.response());
    if (err) {
      return NextResponse.json({ success: false, message: "Failed to send" })

    }
    return NextResponse.json({ success: info.response(), message: "Congrats email has been sent" })
  })
}