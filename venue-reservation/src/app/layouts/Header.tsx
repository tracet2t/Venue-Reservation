"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AuthProvider  from "@/components/providers/AuthProvider";

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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check", {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else if (status === "authenticated" && session?.user) {
          setUser({
            firstName: session.user.name || '',
            email: session.user.email || '',
            userType: session.user.userType || 'User',
            provider: session.user.provider || 'google',
            image: session.user.image || '',
            profilePicture: session.user.image || ''
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        if (status === "authenticated" && session?.user) {
          setUser({
            firstName: session.user.name || '',
            email: session.user.email || '',
            userType: session.user.userType || 'User',
            provider: session.user.provider || 'google',
            image: session.user.image || '',
            profilePicture: session.user.image || ''
          });
        } else {
          setUser(null);
        }
      }
    };

    checkAuth();
  }, [session, status]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      
      await signOut({ 
        callbackUrl: '/',  // Redirect to home page after logout
        redirect: true     // Enable redirect
      });
      
    } catch (error) {
      console.error("Logout failed:", error);
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

  return (
    <header className="bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          <button
            onClick={navigateToHome}
            className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out"
          >
            Home
          </button>
          {(user || session?.user) && (
            <button
              onClick={navigateToReservations}
              className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out"
            >
              My Reservations
            </button>
          )}
          {((user && user.userType === 'Admin') || session?.user?.userType === 'Admin') && (
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out"
            >
              Manage
            </button>
          )}
          {(user || session?.user) ? (
            <>
              <button
                onClick={navigateToProfile}
                className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  {(user?.profilePicture || session?.user?.image) ? (
                    <img
                      src={user?.profilePicture || session?.user?.image || ''}
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
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
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
                  {(user?.profilePicture || session?.user?.image) ? (
                    <img
                      src={user?.profilePicture || session?.user?.image || ''}
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