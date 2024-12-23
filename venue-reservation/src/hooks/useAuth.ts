import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface User {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  userType?: string;
  provider?: string;
  profilePicture?: string;
  contactNumber?: string;
  address?: string;
}

export const useAuth = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Check localStorage first
      const cachedUser = localStorage.getItem('user');
      if (cachedUser) {
        setUser(JSON.parse(cachedUser));
        setLoading(false);
        return;
      }

      // If session exists, use it
      if (session?.user) {
        setUser(session.user as User);
        localStorage.setItem('user', JSON.stringify(session.user));
        setLoading(false);
        return;
      }

      // Only make API call if necessary
      try {
        const response = await fetch('/api/auth/check', {
          credentials: 'include'
        });
        const data = await response.json();
        
        if (data.user) {
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
      setLoading(false);
    };

    checkAuth();
  }, [session]);

  return { user, loading, status };
}; 