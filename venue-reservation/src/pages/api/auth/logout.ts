// /src/pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "auth.config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Clear all authentication cookies with secure settings
    res.setHeader("Set-Cookie", [
      "auth_token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "next-auth.session-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "next-auth.callback-url=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "next-auth.csrf-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    ]);

    // Invalidate the session
    await getServerSession(req, res, authOptions);
    
    return res.status(200).json({ message: "Logged out successfully" });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: "Method Not Allowed" });
}
