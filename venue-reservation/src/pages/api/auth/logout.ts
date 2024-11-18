// /src/pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Clear the authentication cookie or session
    res.setHeader("Set-Cookie", "auth_token=; Path=/; HttpOnly; Max-Age=0");

    return res.status(200).json({ message: "Logged out successfully" });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: "Method Not Allowed" });
}
