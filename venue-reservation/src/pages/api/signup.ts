import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "../../dbclient"; // Adjust the path if needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // Validation logic
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }


    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        contactNumber: phoneNumber, // Ensure valid phone_number
        password: hashedPassword,
        address: null, // Optional field
        emailVerified: false, // Optional field
        userType: "Regular",
        provider: "Email",
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // Send success response
    return res.status(201).json({
      message: "Signup successful",
      userId: newUser.userId,
    });
  } catch (error) {
    console.error("Signup error:", error);

    // Send error response
    return res.status(500).json({
      error: "An error occurred while processing the request",
    });
  }
}
