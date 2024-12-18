import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../../dbclient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const SECRET_KEY = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check NextAuth session first
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: {
          firstName: true,
          email: true,
          userType: true,
          provider: true
        }
      });
      if (user) return res.status(200).json({ user });
    }

    // Check for tokens in cookies
    const authToken = req.cookies.auth_token;
    const magicToken = req.cookies.magic_token;
    let decodedEmail: string | undefined;

    // Try magic token first (prioritize magic link login)
    if (magicToken) {
      try {
        const decoded = jwt.verify(magicToken, SECRET_KEY) as { email: string };
        decodedEmail = decoded.email;
        // If magic token is valid, set it as auth_token
        const newToken = jwt.sign(
          { email: decoded.email },
          SECRET_KEY,
          { expiresIn: '1h' }
        );

        res.setHeader(
          'Set-Cookie',
          `auth_token=${newToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60}`
        );
      } catch (error) {
        console.error('Magic token verification failed:', error);
      }
    }

    // Try auth_token if magic token failed
    if (!decodedEmail && authToken) {
      try {
        const decoded = jwt.verify(authToken, SECRET_KEY) as { email: string };
        decodedEmail = decoded.email;
      } catch (error) {
        console.error('Auth token verification failed:', error);
      }
    }

    if (!decodedEmail) {
      console.error('No valid token found, returning 401');
      return res.status(401).json({ message: "Not authenticated" });
    }

    // Get user data if token verification succeeded
    const user = await prisma.user.findUnique({
      where: { email: decodedEmail },
      select: {
        firstName: true,
        email: true,
        userType: true,
        provider: true
      }
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    return res.status(200).json({ user });

  } catch (error) {
    console.error("Auth check error:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
} 