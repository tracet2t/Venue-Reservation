"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Custom input component
import { Button } from "@/components/ui/button"; // Custom button component
import { useRouter } from "next/navigation";
import BrandingSection from "@/components/design/branding-section"; 
import Link from "next/link";
import { sendMagicLinkEmail } from "@/lib/auth"; // Assuming this function exists for sending magic link

const MagicLinkSignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName) {
      setMessage("Please enter your first name and email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(), 
          firstName: firstName.trim() 
        }),
      });

      const data = await response.json();
      console.log('Response:', data); // Add this for debugging

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Registration successful! Please check your email.");
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
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up with Magic Link</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
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
                If you have an account, you can{" "}
                <Link href="/auth/login" className="text-blue-600 hover:underline">
                  login here
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLinkSignupPage;
