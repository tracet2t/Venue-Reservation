"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import BrandingSection from "@/components/design/branding-section";
import Link from "next/link";

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
    } catch (error) {
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
                  Don't have an account?{" "}
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
