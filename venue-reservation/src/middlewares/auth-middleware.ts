import { NextRequest, NextResponse } from "next/server";
import { verify, JwtPayload } from "jsonwebtoken";

export function withAuthMiddleware() {
  return async (req: NextRequest) => {
    const token = req.cookies.get("token");
    const publicRoutes = ["/card_view", "/reservations", "/"];
    const { pathname } = req.nextUrl;

    // Allow access to public routes
    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(`${process.env.BASE_URL}/login`);
    }

    try {
      const payload = verify(token.value, process.env.JWT_SECRET!) as JwtPayload;
      console.log("Token Verified:", payload);
      return NextResponse.next();
    } catch (error: unknown) {
      const err = error as Error;
      const errorMessage =
        err.name === "TokenExpiredError"
          ? "Session expired. Please log in again."
          : "Authentication error. Please log in.";

      const headers = new Headers(req.headers);

      headers.set(
        "Set-Cookie",
        `redirect_error=${errorMessage}; Path=/login; HttpOnly`
      );
      headers.append(
        "Set-Cookie",
        `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; HttpOnly`
      );

      console.error("Authentication Error:", err.message);
      return NextResponse.redirect(`${process.env.BASE_URL}/login`, {
        status: 303,
        headers,
      });
    }
  };
}
