"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface User {
  firstName: string;
  email: string;
  userType: string;
  provider?: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      // First clear custom auth token
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      
      // Then sign out from NextAuth
      await signOut({ redirect: false });
      
      setUser(null);
      router.push("/");
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

  return (
    <header className="bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={navigateToProfile}
                className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out"
              >
                Welcome, {user.firstName}
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
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
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
          {user ? (
            <>
              <button
                onClick={navigateToProfile}
                className="text-gray-700 hover:text-[#584822] transition duration-200 ease-in-out text-left"
              >
                Welcome, {user.firstName}
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-gray-700 w-full text-left px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out text-sm"
              >
                Logout
              </button>
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
                className="text-white w-full text-left px-4 py-2 rounded hover:bg-[#6A5B3A] transition duration-200 ease-in-out text-sm"
              >
                Signup
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
