import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

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

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  // If the path is public and user is not authenticated, allow access
  if (isPublicPath && !token) {
    return NextResponse.next()
  }

  // Redirect authenticated users away from auth pages
  if (path === '/login' || path === '/signup' || path === '/signup-landing') {
    if (token) {
      return NextResponse.redirect(new URL('/card_view', request.url))
    }
  }

  // Protect strictly protected paths
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
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