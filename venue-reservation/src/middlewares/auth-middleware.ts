import { NextRequest, NextResponse } from "next/server";
import { verify, JwtPayload } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

export function withAuthMiddleware() {
  return async (req: NextRequest) => {
    const publicRoutes = ["/card_view", "/reservations", "/", "/login", "/api/auth"];
    const { pathname } = req.nextUrl;

    // Allow access to public routes
    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    try {
      // Check NextAuth session
      const session = await getToken({
        req: req as any,
        secret: process.env.NEXTAUTH_SECRET
      });

      if (session) {
        return NextResponse.next();
      }

      // Check JWT token
      const token = req.cookies.get("auth_token");
      if (token) {
        const payload = verify(token.value, process.env.JWT_SECRET!) as JwtPayload;
        if (payload) {
          return NextResponse.next();
        }
      }

      // No valid authentication found
      throw new Error("Not authenticated");

    } catch (error: unknown) {
      const err = error as Error;
      const errorMessage = err.name === "TokenExpiredError" 
        ? "Session expired. Please log in again."
        : "Authentication error. Please log in.";

      // Clear all auth cookies
      const headers = new Headers(req.headers);
      headers.set("Set-Cookie", [
        `auth_token=; Path=/; HttpOnly; Max-Age=0`,
        `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0`,
        `token=; Path=/; HttpOnly; Max-Age=0`
      ].join(", "));

      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`, {
        headers
      });
    }
  };
}
