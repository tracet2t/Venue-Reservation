import { NextRequest, NextResponse } from "next/server";
import { verify, JwtPayload } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

// Define a type for the request
type ExtendedRequest = NextRequest & {
  cookies: {
    get: (name: string) => { value: string } | undefined;
  };
};

export function withAuthMiddleware() {
  return async (req: ExtendedRequest) => {
    const publicRoutes = ["/card_view", "/reservations", "/", "/login", "/api/auth"];
    const { pathname } = req.nextUrl;

    // Allow access to public routes
    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    try {
      // Check NextAuth session
      const session = await getToken({
        req: req as unknown as NextRequest & { cookies: { [key: string]: string } },
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
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=${
        err.name === "TokenExpiredError" 
          ? "Session expired. Please log in again."
          : "Authentication error. Please log in."
      }`, {
        headers: new Headers({
          "Set-Cookie": [
            `auth_token=; Path=/; HttpOnly; Max-Age=0`,
            `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0`,
            `token=; Path=/; HttpOnly; Max-Age=0`
          ].join(", ")
        })
      });
    }
  };
}
