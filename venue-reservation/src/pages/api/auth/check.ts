import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/dbclient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check NextAuth session first
    const session = await getServerSession(req, res, authOptions);
    
    if (!session) {
      // If no session, check JWT
      const authToken = req.cookies.auth_token;
      if (!authToken) {
        return res.status(401).json({
          isAuthenticated: false,
          message: "Session expired"
        });
      }

      try {
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET!) as { email: string };
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

        if (!user) {
          res.setHeader('Set-Cookie', 'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
          return res.status(401).json({
            isAuthenticated: false,
            message: "Session expired"
          });
        }

        const customSession = {
          user: {
            id: user.userId,
            email: user.email,
            name: user.firstName,
            userType: user.userType
          },
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        };
        
        return res.status(200).json({
          isAuthenticated: true,
          user,
          session: customSession
        });
      } catch {
        res.setHeader('Set-Cookie', 'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
        return res.status(401).json({
          isAuthenticated: false,
          message: "Session expired"
        });
      }
    }

    // If NextAuth session exists, verify user
    const userEmail = session.user?.email;
    if (!userEmail) {
      return res.status(401).json({
        isAuthenticated: false,
        message: "Invalid session"
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        userId: true,
        firstName: true,
        email: true,
        userType: true,
        provider: true
      }
    });
    
    if (!user) {
      return res.status(401).json({
        isAuthenticated: false,
        message: "Session expired"
      });
    }

    return res.status(200).json({
      isAuthenticated: true,
      user,
      session
    });

  } catch (error) {
    console.error("Auth check error:", error);
    return res.status(401).json({
      isAuthenticated: false,
      message: "Session expired"
    });
  } finally {
    await prisma.$disconnect();
  }
} 