// src/lib/auth.ts
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/dbclient"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
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
    async session({ session }) {
      if (session.user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
          select: {
            firstName: true,
            lastName: true,
            userType: true,
          },
        });

        session.user = {
          ...session.user,
          ...dbUser,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/signup-landing',
  },
}

