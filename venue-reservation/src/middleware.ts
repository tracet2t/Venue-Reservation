import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { jwtVerify } from 'jose'

interface JWTPayload {
  email: string;
  role: string;
  exp?: number;
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || 
                      path === '/signup' || 
                      path === '/signup-landing' || 
                      path.startsWith('/api/auth') ||
                      path === '/card_view' ||
                      path.startsWith('/reservation/') // Allow access to reservation pages

  // Define strictly protected paths
  const isProtectedPath = path === '/user-profile' ||
                         path === '/my-reservations' ||
                         path.startsWith('/admin/')

  try {
    // Check NextAuth session first
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Check if session has expired
    if (token?.exp && Date.now() >= (token.exp as number) * 1000) {
      // Session expired, redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      
      // Clear auth cookies
      response.cookies.delete('next-auth.session-token');
      response.cookies.delete('auth_token');
      
      return response;
    }

    // Check magic link token
    const authToken = request.cookies.get("auth_token");
    let magicLinkData = null;

    if (authToken) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(authToken.value, secret);
        
        // Fetch user role from database using email
        const userEmail = verified.payload.email as string;
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user/role?email=${userEmail}`);
        const userData = await response.json();
        
        magicLinkData = {
          ...verified.payload,
          role: userData.role // Use the role from database
        };
      } catch (error) {
        console.error('Magic link verification failed:', error);
      }
    }

    const userEmail = token?.email || (magicLinkData as JWTPayload)?.email;
    const userRole = token?.role || (magicLinkData as JWTPayload)?.role;
    const isAuthenticated = !!userEmail;

    // Check if session has expired
    if (token?.exp && Date.now() >= (token.exp as number) * 1000) {
      // Session expired, redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      
      // Clear auth cookies
      response.cookies.delete('next-auth.session-token');
      response.cookies.delete('auth_token');
      
      return response;
    }

    if (isProtectedPath && !isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Update matcher configuration
export const config = {
  matcher: [
    '/card_view',
    '/user-profile',
    '/my-reservations',
    '/admin/:path*',
    '/login',
    '/signup',
    '/signup-landing',
    '/reservation/:path*'
  ]
}