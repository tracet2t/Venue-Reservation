import { cookies as serverCookies } from "next/headers";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { Role } from "@/type";
import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";
import { jwtVerify } from 'jose';

// Define the interface for JWT payload
interface JwtPayload {
    email: string;
    role: Role;
    id: string;
    // Add other fields that might be in your JWT payload
    iat?: number;
    exp?: number;
}

class JwtPayloadSession {
    private payload: JwtPayload | null;

    constructor(payload: JwtPayload | null) {
        this.payload = payload;
    }

    isAuthenticated() {
        return !!this.payload && !!this.payload.email && !!this.payload.role;
    }
    getUsername() {
        return this.isAuthenticated() ? this.payload!.email : null;
    }

    getRole(): Role | null {
        return this.isAuthenticated() ? this.payload!.role : null;
    }
    getUserId(): string | null {
        return this.isAuthenticated() ? this.payload!.id : null;
    }
}

export async function getSession(reqCookies: RequestCookies | null = null): Promise<JwtPayloadSession> {
    const cookieObj: { [key: string]: string } = {};
    if (reqCookies) {
        reqCookies.getAll().forEach(cookie => {
            cookieObj[cookie.name] = cookie.value;
        });
    } else {
        serverCookies().getAll().forEach(cookie => {
            cookieObj[cookie.name] = cookie.value;
        });
    }

    // Check NextAuth session first
    const session = await getToken({ 
        req: {
            cookies: cookieObj,
            headers: {},
            method: 'GET',
            query: {}
        } as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET 
    });

    // Check magic link token if NextAuth session doesn't exist
    if (!session && cookieObj['auth_token']) {
        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            const verified = await jwtVerify(cookieObj['auth_token'], secret);
            
            const payload: JwtPayload = {
                email: verified.payload.email as string,
                role: (verified.payload.role as Role) || 'regular',
                id: verified.payload.sub as string
            };
            return new JwtPayloadSession(payload);
        } catch (error) {
            console.error('Magic link verification failed:', error);
        }
    }

    if (session) {
        const payload: JwtPayload = {
            email: session.email as string,
            role: (session.role as Role) || 'regular',
            id: session.sub as string
        };
        return new JwtPayloadSession(payload);
    }
    
    return new JwtPayloadSession(null);
}
