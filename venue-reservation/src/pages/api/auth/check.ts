import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../../dbclient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth.config";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // First check for NextAuth session
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
      
      if (user) {
        return res.status(200).json({ user });
      }
    }

    // If no NextAuth session, check for JWT token
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
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
    return res.status(401).json({ message: "Not authenticated" });
  }
} 