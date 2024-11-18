import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { verify } from 'jsonwebtoken'; // Import from jsonwebtoken

export function withAuthMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request: NextRequest, event: NextFetchEvent) => {
        let token = request.cookies.get("token");

        // Allow access to public routes without token
        const publicRoutes = ['/card_view', '/reservations', '/'];
        if (publicRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
            return middleware(request, event);
        }

        // Require authentication for protected routes
        if (!token) {
            return NextResponse.redirect(`${process.env.BASE_URL}/login`);
        }

        try {
            const secret = process.env.JWT_SECRET!;
            const payload = verify(token.value, secret);
            return middleware(request, event);
        } catch (error) {
            console.error(error);

            const headers = new Headers(request.headers);

            // Check for expired token 
            if ((error as any).name === "TokenExpiredError") {
                headers.set("Set-Cookie", "redirect_error=Session expired. Please login again.; Path=/login;");
            } else {
                headers.set("Set-Cookie", "redirect_error=An error occurred while logging you in.; Path=/login;");
            }

            // Clear the invalid token cookie
            headers.append("Set-Cookie", `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; HttpOnly`);

            return NextResponse.redirect(`${process.env.BASE_URL}/login`, { status: 303, headers: headers });
        }
    };
}
