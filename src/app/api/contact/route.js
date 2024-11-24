import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter with your email service details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ID, // Replace with your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Replace with your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'vikassirvi656@gmail.com',
      subject: `New Message from ${name}`,
      text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
