import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);

  const { token } = req.query || {};  // Added defensive check

  if (!token || typeof token !== "string") {
    return res.status(400).json({ success: false, message: "Token is required" });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ success: false, message: "JWT_SECRET is not defined in environment" });
    }

    const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;

    return res.status(200).json({
      success: true,
      message: "Token is valid",
      decoded,
    });
  } catch (error) {
    console.error(error); // Log error details
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
    if (error instanceof jwt.NotBeforeError) {
      return res.status(401).json({ success: false, message: "Token is not valid yet" });
    }
    return res.status(500).json({ success: false, message: "An error occurred during token verification" });
  }
}
