"use client";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Create a custom event for session timeout
export const SESSION_TIMEOUT_EVENT = 'sessionTimeout';

const SESSION_TIMEOUT = 20 * 60 * 1000; // 20 minutes

export default function SessionTimeout() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) return;

    let timeoutId: NodeJS.Timeout;
    let activityTimeout: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      clearTimeout(activityTimeout);
      
      timeoutId = setTimeout(async () => {
        // Dispatch custom event before logout
        window.dispatchEvent(new Event(SESSION_TIMEOUT_EVENT));
        
        await signOut({ redirect: false });
        toast.error('Session expired. Please login again.');
        
        // Add a small delay before reloading
        setTimeout(() => {
          window.location.href = '/login'; // This will cause a full page reload
        }, 100);
      }, SESSION_TIMEOUT);
    };

    // Track user activity
    const handleUserActivity = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(resetTimeout, 1000);
    };

    // Initialize timeout
    resetTimeout();

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(activityTimeout);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
    };
  }, [session]);

  return null;
} 