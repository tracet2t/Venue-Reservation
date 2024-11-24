import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      provider: any
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      firstName?: string | null
      lastName?: string | null
      userType?: string
    }
  }
} 