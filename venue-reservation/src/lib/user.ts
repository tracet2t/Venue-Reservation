// src/lib/user.ts
import prisma from '@/dbclient';


export const getUserProfile = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};