import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "../../../dbclient"; // Assuming you're using Prisma for DB management
import jwt from "jsonwebtoken"; // For token creation
import cookie from "cookie"; // For setting cookies

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password." });
    }

    try {
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user || !user.password) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.userId, email: user.email, userType: user.userType }, // Add user properties as needed
        SECRET_KEY,
        { expiresIn: "1h" } // Token expiration time
      );
      console.log("Token:", token);

      // Set token as a secure cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 3600, // 1 hour
        })
      );

      // Update user provider
      await prisma.user.update({
        where: { email },
        data: {
          provider: "credentials"
        }
      });

      return res.status(200).json({ 
        success: true,
        message: "Login successful!",
        user: {
          firstName: user.firstName,
          email: user.email,
          userType: user.userType
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
  