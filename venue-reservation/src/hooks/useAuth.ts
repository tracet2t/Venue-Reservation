import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface AuthUser {
  userId: string;
  email: string;
  userType: string;
  firstName: string;
}

export function useAuth(requiredRole?: string) {
  const { data: status } = useSession();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();

        if (data.isAuthenticated) {
          setUser(data.user);
          
          if (requiredRole && data.user.userType !== requiredRole) {
            router.push('/unauthorized');
          }
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    if (status !== null) {
      checkAuth();
    }
  }, [status, router, requiredRole]);

  return { user, loading, isAuthenticated: !!user };
} 