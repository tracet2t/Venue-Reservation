"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AuthProvider  from "@/components/providers/AuthProvider";
import { SESSION_TIMEOUT_EVENT } from '@/components/SessionProvider';
import { toast } from "react-hot-toast";

declare module "next-auth" {
  interface User {
    profilePicture?: string;
    userType: string;
    provider?: string;
    image?: string;
  }
}

interface User {
  firstName: string;
  email: string;
  userType: string;
  provider?: string;
  profilePicture?: string;
  image?: string;
}

const HeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();
  const currentPath = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          credentials: "include",
          headers: {
            'Cache-Control': 'no-cache'
          }
        });

        if (response.ok) {
          const { user: userData } = await response.json();
          setUser({
            firstName: userData.firstName,
            email: userData.email,
            userType: userData.userType,
            provider: userData.provider,
            profilePicture: userData.profilePicture || '/default-avatar.png'
          });
        } else if (status === "authenticated" && session?.user) {
          setUser({
            firstName: session.user.name || '',
            email: session.user.email || '',
            userType: session.user.userType || 'User',
            provider: session.user.provider || 'google',
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      }
    };

    checkAuth();
  }, [session, status]);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isProfileOpen && !(e.target as Element).closest('.profile-dropdown')) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [isProfileOpen]);

  useEffect(() => {
    const handleSessionTimeout = () => {
      setUser(null);
      setIsProfileOpen(false);
      router.refresh();
    };

    // Add event listener for session timeout
    window.addEventListener(SESSION_TIMEOUT_EVENT, handleSessionTimeout);

    // Cleanup
    return () => {
      window.removeEventListener(SESSION_TIMEOUT_EVENT, handleSessionTimeout);
    };
  }, [router]);

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    
    if (!confirmed) return; // If user cancels, do nothing
    
    try {
      // First, clear any local session data
      setUser(null);
      setIsProfileOpen(false);

      // Call your logout API
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      
      // Sign out without forcing a reload
      await signOut({ 
        redirect: false
      });

      // Add a small delay before reloading
      setTimeout(() => {
        window.location.href = '/'; // This will cause a full page reload and redirect to home
      }, 100);
      
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleSignupClick = () => {
    router.push("/signup-landing");
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToProfile = () => {
    router.push("/user-profile");
  };

  const navigateToHome = () => {
    router.push("/card_view");
  };

  const navigateToReservations = () => {
    router.push("/my-reservations");
  };

  const isPathActive = (path: string) => {
    if (path === '/card_view') {
      return currentPath === '/card_view';
    } else if (path === '/my-reservations') {
      return currentPath?.startsWith('/my-reservations');
    } else if (path === '/admin') {
      return currentPath?.startsWith('/admin');
    }
    return false;
  };

  const showAuthButtons = !user && !session?.user;

  return (
    <header className="bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="p-2">
          <div className="text-2xl font-bold text-[#584822]">RMS<span className="text-blue-500">.</span></div>
          <div className="text-sm text-gray-500">Reservation Management System</div>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button
            onClick={navigateToHome}
            className={`text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out relative
              ${isPathActive('/card_view') ? 'font-semibold' : ''}
            `}
          >
            Home
            {isPathActive('/card_view') && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#584822] -mb-1"></div>
            )}
          </button>
          
          {(user || session?.user) && (
            <button
              onClick={navigateToReservations}
              className={`text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out relative
                ${isPathActive('/my-reservations') ? 'font-semibold' : ''}
              `}
            >
              My Reservations
              {isPathActive('/my-reservations') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#584822] -mb-1"></div>
              )}
            </button>
          )}
          
          {((user && user.userType === 'Admin') || session?.user?.userType === 'Admin') && (
            <button
              onClick={() => router.push('/admin/dashboard')}
              className={`text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out relative mr-8
                ${isPathActive('/admin') ? 'font-semibold' : ''}
              `}
            >
              Manage
              {isPathActive('/admin') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#584822] -mb-1"></div>
              )}
            </button>
          )}
          {showAuthButtons ? (
            <>
              <button
                onClick={navigateToLogin}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out"
              >
                Login
              </button>
              <button
                onClick={handleSignupClick}
                style={{ backgroundColor: "#584822" }}
                className="text-white px-4 py-2 rounded hover:bg-[#6A5B3A] transition duration-200 ease-in-out"
              >
                Signup
              </button>
            </>
          ) : (
            <div className="relative profile-dropdown">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-[#584822] transition duration-200"
              >
                {(user?.profilePicture) ? (
                  <img
                    src={user?.profilePicture || '/default-avatar.png'}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      {(user?.firstName?.[0] || session?.user?.name?.[0] || 'U').toUpperCase()}
                    </span>
                  </div>
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={user?.profilePicture || '/default-avatar.png'}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center font-medium">
                      {user?.firstName || session?.user?.name || 'User'}
                    </div>
                  </div>
                  <button
                    onClick={navigateToProfile}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition duration-200"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition duration-200 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center p-4 border-b">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          {/* User info and logout at the top */}
          {(user || session?.user) ? (
            <>
              <button
                onClick={navigateToProfile}
                className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  {(user?.profilePicture ) ? (
                    <img
                      src={user?.profilePicture || '/default-avatar.png'}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">
                        {(user?.firstName?.[0] || session?.user?.name?.[0] || 'U').toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <span>Welcome, {user?.firstName || session?.user?.name || 'User'}</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-gray-700 w-full text-left px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out text-sm mb-4"
              >
                Logout
              </button>
              <div className="border-b border-gray-200 mb-4"></div>
            </>
          ) : (
            <>
              <button
                onClick={navigateToLogin}
                className="bg-gray-200 text-gray-700 w-full text-left px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out text-sm"
              >
                Login
              </button>
              <button
                onClick={handleSignupClick}
                style={{ backgroundColor: "#584822" }}
                className="text-white w-full text-left px-4 py-2 rounded hover:bg-[#6A5B3A] transition duration-200 ease-in-out text-sm mb-4"
              >
                Signup
              </button>
              <div className="border-b border-gray-200 mb-4"></div>
            </>
          )}
          
          {/* Navigation links below */}
          <button
            onClick={navigateToHome}
            className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out text-left"
          >
            Home
          </button>
          {(user || session?.user) && (
            <button
              onClick={navigateToReservations}
              className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out text-left"
            >
              My Reservations
            </button>
          )}
          {((user && user.userType === 'Admin') || session?.user?.userType === 'Admin') && (
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out text-left"
            >
              Manage
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

// Wrap the HeaderContent with AuthProvider
export default function Header() {
  return (
    <AuthProvider>
      <HeaderContent />
    </AuthProvider>
  );
}