import { NextRequest, NextResponse } from "next/server";
import { verify, JwtPayload } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

export function withAuthMiddleware() {
  return async (req: NextRequest) => {
    // Public routes that don't require authentication
    const publicRoutes = [
      "/login",
      "/signup",
      "/api/auth",
      "/card_view",
      "/",
      "/_next",
      "/images",
      "/favicon.ico"
    ];

    if (publicRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
      return NextResponse.next();
    }

    try {
      // Check NextAuth session
      const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
      });

      if (session) {
        return NextResponse.next();
      }

      // Check JWT token
      const authToken = req.cookies.get("auth_token");
      if (authToken) {
        try {
          const verified = verify(authToken.value, process.env.JWT_SECRET!) as JwtPayload;
          if (verified) {
            return NextResponse.next();
          }
        } catch (error) {
          console.error('JWT verification failed:', error);
        }
      }

      // No valid authentication found
      const url = new URL('/login', req.url);
      url.searchParams.set('from', req.nextUrl.pathname);
      return NextResponse.redirect(url);

    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  };
}
