import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";
import prisma from "../../dbclient";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

const sendVerificationEmail = async (email: string, token: string) => {
  const magicLink = `${process.env.NEXTAUTH_URL}/auth/callback?token=${token}`;
  const emailHTML = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="text-align: center; color: #584822;">Welcome to Reservation System!</h2>
      <p style="font-size: 16px; color: #555;">
        Click the link below to verify your email and complete your registration:
      </p>
      <p style="text-align: center;">
        <a href="${magicLink}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #584822; border-radius: 5px; text-decoration: none;">Verify Email</a>
      </p>
      <p style="font-size: 14px; color: #999;">
        If you did not sign up, please ignore this email.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Verify your email address",
    html: emailHTML,
  });
};

const sendSubscriptionConfirmationEmail = async (email: string) => {
  const emailHTML = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="text-align: center; color: #584822;">Subscription Confirmation</h2>
      <p style="font-size: 16px; color: #555;">
        Thank you for subscribing! You will now receive updates from us.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Subscription Confirmation",
    html: emailHTML,
  });
};

/*const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  console.log("Received request body:", req.body); // Debugging log

  const { email, type ,magicToken} = req.body;

  // Trim and validate email
  const trimmedEmail = email?.trim();
  if (!type || typeof type !== "string") {
    console.error("Missing or invalid email type:", type);
    return res.status(400).json({ message: "Invalid email type. Must be 'verification' or 'subscription'." });
  }

  
  const emailType = type?.toLowerCase();
  console.log("Normalized email type:", emailType);
  if (!emailType || (emailType !== "verification" && emailType !== "subscription")) {
    console.error("Invalid email type:", emailType); // Debugging log
    return res.status(400).json({ message: "Invalid email type" });
  }

  try {
    if (emailType === "verification") {
      
      const user = await prisma.user.findUnique({
        where: { email: trimmedEmail },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Generate token
      const token =
        magicToken ||
        jwt.sign(
          { email: trimmedEmail, userId: user.userId },
          process.env.JWT_SECRET as string,
          { expiresIn: "12h" }
        );

      // Send verification email
      await sendVerificationEmail(trimmedEmail, token);
    } else if (emailType === "subscription") {
      // Send subscription confirmation email
      await sendSubscriptionConfirmationEmail(trimmedEmail);
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
