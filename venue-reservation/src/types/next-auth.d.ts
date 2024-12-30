import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      provider: string;
      userType: string;
      firstName?: string;
      lastName?: string;
    }
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    userType: string;
    provider?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string;
    userType?: string;
    userId?: string;
  }
} 