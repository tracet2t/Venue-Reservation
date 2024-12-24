import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query'],
  connectionLimit: 20, // Adjust this number based on your needs
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 