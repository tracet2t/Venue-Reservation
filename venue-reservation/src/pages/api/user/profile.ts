import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../../dbclient";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };

    if (req.method === "GET") {
      const user = await prisma.user.findUnique({
        where: { userId: decoded.userId },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          email: true,
          address: true,
          contactNumber: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const sanitizedUser = {
        ...user,
        userId: user.userId.toString(),
        contactNumber: user.contactNumber?.toString()
      };

      return res.status(200).json(sanitizedUser);
    }

    if (req.method === "PUT") {
      const { firstName, lastName, address, contactNumber } = req.body;

      const updatedUser = await prisma.user.update({
        where: { userId: decoded.userId },
        data: {
          firstName,
          lastName,
          address,
          contactNumber,
        },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          email: true,
          address: true,
          contactNumber: true,
        },
      });

      const sanitizedUpdatedUser = {
        ...updatedUser,
        userId: updatedUser.userId.toString(),
        contactNumber: updatedUser.contactNumber?.toString()
      };

      return res.status(200).json(sanitizedUpdatedUser);
    }
  } catch (error) {
    console.error("Profile API error:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
} 