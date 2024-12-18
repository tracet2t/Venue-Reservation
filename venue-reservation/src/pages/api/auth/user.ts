// /src/pages/api/auth/user.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY) as { name: string; email: string };
      return res.status(200).json({ 
        name: decoded.name,
        email: decoded.email
      });
    } catch {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  }

  res.setHeader("Allow", ["GET"]);
  return res.status(405).json({ error: "Method Not Allowed" });
}
