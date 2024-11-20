"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Custom input component
import { Button } from "@/components/ui/button"; // Custom button component
import BrandingSection from "@/components/design/branding-section"; 
import Link from "next/link";

const MagicLinkLoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
      console.log('Response:', data); // Add this for debugging

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Magic link sent! Please check your email.");
    } catch (error) {
      console.error('Error details:', error);
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
        <BrandingSection />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Log In with Magic Link</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {message && (
                <p className="text-center text-sm text-gray-600 mb-4">{message}</p>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-olive"
              >
                {loading ? "Sending..." : "Send Magic Link"}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-blue-600 hover:underline">
                  Sign up here
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLinkLoginPage;
