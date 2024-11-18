import { PrismaClient } from "database/prisma/generated/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;