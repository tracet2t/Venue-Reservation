import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../../dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "auth.config";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    let userId: string | undefined;
    
    // Check for NextAuth session first
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { userId: true }
      });
      if (user) {
        userId = user.userId;
      }
    } else {
      // Fall back to JWT token
      const token = req.cookies.auth_token;
      if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
      userId = decoded.userId;
    }

    if (!userId) {
      return res.status(401).json({ message: "User ID not found" });
    }

    if (req.method === "GET") {
      const user = await prisma.user.findUnique({
        where: { userId },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          email: true,
          address: true,
          contactNumber: true,
          userType: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    }

    if (req.method === "PUT") {
      const { address, contactNumber } = req.body;

      const updatedUser = await prisma.user.update({
        where: { userId },
        data: { address, contactNumber },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          email: true,
          address: true,
          contactNumber: true,
          userType: true,
        },
      });

      return res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.error("Profile API error:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
} 