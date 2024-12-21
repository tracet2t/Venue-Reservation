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
    
    // If we have a session, return it
    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: {
          userId: true,
          firstName: true,
          email: true,
          userType: true,
          provider: true
        }
      });
      if (user) return res.status(200).json({ user, session });
    }

    // Check database session
    const authToken = req.cookies.auth_token;
    if (authToken) {
      try {
        const decoded = jwt.verify(authToken, SECRET_KEY) as { email: string };
        const user = await prisma.user.findUnique({
          where: { email: decoded.email },
          select: {
            userId: true,
            firstName: true,
            email: true,
            userType: true,
            provider: true
          }
        });

        if (user) {
          const session = {
            user: {
              id: user.userId,
              email: user.email,
              name: user.firstName,
              userType: user.userType
            },
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
          };
          return res.status(200).json({ user, session });
        }
      } catch (error) {
        console.error('Token verification failed:', error);
      }
    }

    return res.status(401).json({ message: "Not authenticated" });

  } catch (error) {
    console.error("Auth check error:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
} 