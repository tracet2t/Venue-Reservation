// src/pages/api/auth/auth.config.ts
import EmailProvider from "next-auth/providers/email";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login-link",                // Sign-in page
    error: "/auth/error",            // Error handling page
    verifyRequest: "/auth/callback.tsx", // Magic link sent page
    newUser: undefined,              // Explicitly set to undefined
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id as string,
        };
      }
      return token; // Ensure the token is returned if no user exists
    },
  },
};

export default authOptions;
