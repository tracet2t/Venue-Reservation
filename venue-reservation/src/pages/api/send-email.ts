import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../dbclient"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Invalid email address" });
    }

    try {
      // Verify the user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Generate the token
      const token = jwt.sign({ email, userId: user.userId }, process.env.JWT_SECRET as string, { expiresIn: "12h" });
      const magicLink = `${process.env.NEXTAUTH_URL}/auth/callback?token=${token}`;

      // Email HTML template
      const emailHTML = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #584822;">Welcome to Reservation System!</h2>
          <p style="font-size: 16px; color: #555;">
            We're excited to have you join us. Click the button below to log in with your Magic Link:
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${magicLink}" style="text-decoration: none; display: inline-block; padding: 12px 20px; color: #fff; background-color:#584822; border-radius: 5px; font-size: 16px; font-weight: bold;">
              Log in with Magic Link
            </a>
          </div>
          <p style="font-size: 14px; color: #999;">
            If the button above doesn't work, copy and paste this link into your browser:
            <a href="${magicLink}" style="color: #8B4513;">${magicLink}</a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            If you did not request this email, please ignore it.
          </p>
        </div>
      `;

      // Nodemailer transport
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Your Magic Link",
        html: emailHTML, // Use the HTML content here
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
