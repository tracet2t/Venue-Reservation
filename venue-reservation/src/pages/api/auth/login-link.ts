import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../dbclient";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

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

    // Generate login token
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({
      success: true,
      message: "Magic link sent to your email address. Please check your inbox.",
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
