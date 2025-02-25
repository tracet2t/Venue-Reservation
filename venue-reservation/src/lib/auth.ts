// src/lib/auth.ts
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/dbclient"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.userId,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          userType: user.userType
        };
      }
    }),
    {
      id: "magic-link",
      name: "Magic Link",
      type: "credentials",
      credentials: {
        token: { label: "Token", type: "text" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.token) return null;

          // Verify the JWT token
          const decoded = jwt.verify(credentials.token, process.env.JWT_SECRET!) as {
            userId: string;
            email: string;
            userType: string;
          };

          const user = await prisma.user.findUnique({
            where: { userId: decoded.userId }
          });

          if (!user) return null;

          return {
            id: user.userId,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            userType: user.userType
          };
        } catch (error) {
          console.error("Magic link auth error:", error);
          return null;
        }
      }
    }
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      // Create or update user in your database
      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          firstName: user.name?.split(' ')[0],
          lastName: user.name?.split(' ')[1],
        },
        create: {
          email: user.email,
          firstName: user.name?.split(' ')[0] ?? '',
          lastName: user.name?.split(' ')[1] ?? '',
          userType: 'Regular',
        },
      });

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.provider = token.provider as string;
        session.user.userType = token.userType as string;
        session.user.id = token.userId as string;

        // Fetch additional user data if needed
        const dbUser = await prisma.user.findUnique({
          where: { userId: token.userId as string },
          select: {
            firstName: true,
            lastName: true,
            userType: true,
          },
        });

        if (dbUser) {
          session.user = {
            ...session.user,
            firstName: dbUser.firstName ?? undefined,
            lastName: dbUser.lastName ?? undefined,
            userType: dbUser.userType
          };
        }
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.provider = account?.provider || "magic-link";
        token.userType = (user as { userType: string }).userType;
        token.userId = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signup-landing',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
}

