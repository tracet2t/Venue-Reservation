// src/lib/user.ts
import prisma from '@/dbclient';

export const getUserProfile = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!user) return null;

    // Convert BigInt to string for JSON serialization
    return {
      ...user,
      contactNumber: user.contactNumber ? user.contactNumber.toString() : null,
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};