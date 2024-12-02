import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      provider: string | null
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      firstName?: string | null
      lastName?: string | null
      userType?: string
    } & DefaultSession["user"]
  }
} 