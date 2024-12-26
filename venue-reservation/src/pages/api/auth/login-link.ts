import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../dbclient";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

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

    // Generate tokens
    const magicToken = uuidv4();
    const authToken = jwt.sign(
      { 
        userId: user.userId,
        email: user.email,
        userType: user.userType 
      },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    // Set both tokens as cookies with proper settings
    res.setHeader('Set-Cookie', [
      `auth_token=${authToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`,
      `magic_token=${magicToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=900`
    ]);
/* eslint-disable @typescript-eslint/no-unused-vars */
    // Create NextAuth session
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      // Create a new session
      const newSession = {
        user: {
          id: user.userId,
          name: user.firstName,
          email: user.email,
          userType: user.userType,
          provider: "magic-link"
        },
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      };
/* eslint-disable @typescript-eslint/no-unused-vars */
      // Store session in your database
      await prisma.session.create({
        data: {
          sessionToken: authToken,
          userId: user.userId,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
      });

      // Set the session cookie
      const existingCookies = res.getHeader('Set-Cookie') || [];
      res.setHeader('Set-Cookie', [
        ...(Array.isArray(existingCookies) ? existingCookies : [existingCookies.toString()]),
        `next-auth.session-token=${authToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`
      ]);
    }

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
      message: "Magic link sent to your email address",
      session
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
