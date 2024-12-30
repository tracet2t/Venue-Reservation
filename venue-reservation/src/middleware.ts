import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { jwtVerify } from 'jose'

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
    let isMagicLinkValid = false;

    if (authToken) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(authToken.value, secret);
        
        // Check if magic link token has expired
        if (verified.payload.exp && Date.now() >= verified.payload.exp * 1000) {
          const response = NextResponse.redirect(new URL('/login', request.url));
          response.cookies.delete('auth_token');
          return response;
        }
        
        isMagicLinkValid = true;
      } catch (error) {
        console.error('Magic link verification failed:', error);
      }
    }

    const isAuthenticated = !!token || isMagicLinkValid;

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