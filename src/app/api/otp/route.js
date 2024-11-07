import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Generate a random OTP (for simplicity, you can just use a 6-digit number)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      // Setup Nodemailer transport
      const transporter = nodemailer.createTransport({
        service: 'gmail', // or use any other email provider
        auth: {
          user: process.env.EMAIL_USER, // Email address for sending emails
          pass: process.env.EMAIL_PASS, // Password for the email account
        },
      });

      // Email message options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for Email Verification',
        text: `Your OTP is ${otp}`,
      };

      // Send OTP email
      await transporter.sendMail(mailOptions);

      // Store OTP in your database or session for later verification (You should do this for security)
      // For now, just send it back in the response
      res.status(200).json({ message: 'OTP sent successfully', otp });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

