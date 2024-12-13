import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "../../../dbclient";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Validate input
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    if (password) {
      // Email/password login
      if (!user.password) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.userId, email: user.email, userType: user.userType },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      // Set token as a secure cookie
      res.setHeader(
        "Set-Cookie",
        `auth_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
      );

      // Update user provider
      await prisma.user.update({
        where: { email },
        data: { provider: "credentials" },
      });

      return res.status(200).json({
        success: true,
        message: "Login successful!",
        user: {
          firstName: user.firstName,
          email: user.email,
          userType: user.userType,
        },
      });
    } else {
      // Magic link login
      const token = uuidv4();
      const expires = new Date(Date.now() + 15 * 60 * 1000); // Token expires in 15 minutes

      // Save token to database
      await prisma.verificationToken.create({
        data: {
          identifier: user.userId,
          email: user.email,
          token,
          expires,
        },
      });

      // Send email using the send-email endpoint
      const emailResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }

      return res.status(200).json({
        success: true,
        message: "Magic link sent to your email address. Please check your inbox.",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}
  