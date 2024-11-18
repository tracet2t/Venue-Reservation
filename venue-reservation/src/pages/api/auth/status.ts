import { saveUser, getUser, removeUser, isAuthenticated } from '@/utils/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const response = await fetch('/api/auth/status');
      const { loggedIn } = await response.json();

      if (!loggedIn) {
        // If not logged in, clear local user data and redirect
        removeUser();
        router.push('/login');
      } else if (!isAuthenticated()) {
        // Sync client-side storage with server response
        const user = await fetch('/api/auth/user'); // Optional endpoint to fetch user details
        const userData = await user.json();
        saveUser(userData);
      }
    };

    verifyUser();
  }, [router]);

  return null;
};
