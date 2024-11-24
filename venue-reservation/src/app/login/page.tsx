"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import BrandingSection from "@/components/design/branding-section";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react"

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isMagicLink, setIsMagicLink] = useState(true); // Toggle between Magic Link and Login
  const router = useRouter();

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/auth/login-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setMessage("Magic link sent! Please check your email.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { 
        callbackUrl: '/card_view',
        redirect: false 
      });
      
      if (result?.error === 'AccessDenied') {
        // Show error message to user
        alert('Please sign up first. This email is registered with a different login method.');
        return;
      }
      
      if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };


  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/card_view");
      } else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4">
        <BrandingSection />
      </div>

      {/* Authentication Section */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">
              {isMagicLink ? "Log In with Magic Link" : "Log In"}
            </h2>
            <form onSubmit={isMagicLink ? handleMagicLinkSubmit : handleLoginSubmit}>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {!isMagicLink && (
                <div className="mb-4">
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              {message && <p className="text-center text-sm text-gray-600 mb-4">{message}</p>}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-olive"
              >
                {loading
                  ? isMagicLink
                    ? "Sending..."
                    : "Logging in..."
                  : isMagicLink
                  ? "Send Magic Link"
                  : "Login"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              {isMagicLink ? (
                <>
                  <p>
                    Want to use a password?{" "}
                    <button
                      onClick={() => setIsMagicLink(false)}
                      className="text-blue-600 hover:underline"
                    >
                      Log in with password
                    </button>
                    <Button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-white px-4 py-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-200"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </Button>
                  </p>
                </>
                
              ) : (
                <>
                  <p>
                    Prefer a magic link?{" "}
                    <button
                      onClick={() => setIsMagicLink(true)}
                      className="text-blue-600 hover:underline"
                    >
                      Use magic link
                    </button>
                  </p>
                  <p>
                    Forgot your password?{" "}
                    <Link
                      href="/auth/forgot-password"
                      className="text-blue-600 hover:underline"
                    >
                      Reset it here
                    </Link>.
                  </p>
                </>
              )}
            </div>
            {!isMagicLink && (
              <div className="mt-4 text-center text-sm text-gray-500">
               <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup-landing"
                  className="text-blue-600 hover:underline"
                >
                  Sign up here
                </Link>.
              </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
