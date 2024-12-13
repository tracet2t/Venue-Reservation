import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../dbclient";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  // Validate input
  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: "Email is required" 
    });
  }

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found. Please sign up first." 
      });
    }

    // Generate magic link token
    const magicToken = uuidv4();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // Token expires in 15 minutes

    // Save token to database
    await prisma.verificationToken.create({
      data: {
        identifier: user.userId,
        email: user.email,
        token: magicToken,
        expires,
      },
    });

    // Generate JWT token for authentication
    const authToken = jwt.sign(
      { 
        userId: user.userId,
        email: user.email,
        userType: user.userType 
      },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    // Set both tokens as cookies
    res.setHeader('Set-Cookie', [
      `auth_token=${authToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`,
      `magic_token=${magicToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=900` // 15 minutes
    ]);

    // Send email using the send-email endpoint
    const emailResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: user.email,
        magicToken: magicToken // Include the token in the email
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }

    // Update the provider field
    await prisma.user.update({
      where: { email },
      data: {
        provider: "magic-link"
      }
    });

    return res.status(200).json({
      success: true,
      message: "Magic link sent to your email address. Please check your inbox.",
      user: {
        firstName: user.firstName,
        email: user.email,
        userType: user.userType
      }
    });

  } catch (error) {
    console.error("Detailed error:", error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : "Something went wrong" 
    });
  } finally {
    await prisma.$disconnect();
  }
}
