import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/dbclient";

export const authOptions: NextAuthOptions = {
  providers: [
    // Email Provider
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

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.AUTH_SECRET, // JWT Secret

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    // Handle sign-in events
    async signIn({ user, account, profile }) {
      if (!user.email) return false;

      // Handle Google sign-in specifically
      if (account?.provider === "google") {
        await prisma.user.upsert({
          where: { email: user.email },
          update: {
            provider: "google",
            firstName: user.name?.split(" ")[0] || "",
            lastName: user.name?.split(" ")[1] || "",
          },
          create: {
            email: user.email,
            firstName: user.name?.split(" ")[0] || "",
            lastName: user.name?.split(" ")[1] || "",
            userType: "Regular", // Default user type
            provider: "google",
            emailVerified: true,
          },
        });
        return true;
      }

      // General user creation/updating for other providers (e.g., Email)
      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          firstName: user.name?.split(" ")[0] || "",
          lastName: user.name?.split(" ")[1] || "",
        },
        create: {
          email: user.email,
          firstName: user.name?.split(" ")[0] || "",
          lastName: user.name?.split(" ")[1] || "",
          userType: "Regular", // Default user type
          provider: "google",
        },
      });

      return true;
    },

    // Add custom fields to the JWT token
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { userId: true },
        });
        if (dbUser) {
          token.id = dbUser.userId;
        }
      }
      return token;
    },

    // Enrich session object with database fields
    async session({ session, token }) {
      if (session.user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            email: true,
            userType: true,
            provider: true,
          },
        });

        if (dbUser) {
          session.user = {
            ...session.user,
            firstName: dbUser.firstName,
            userType: dbUser.userType,
            provider: dbUser.provider
          };
        }
      }
      return session;
    },
  },

  pages: {
    signIn: "/login-link", // Custom sign-in page
    error: "/auth/error", // Error page
    verifyRequest: "/auth/callback", // Magic link confirmation
  },
};

export default NextAuth(authOptions);
