"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import BrandingSection from "@/components/design/branding-section"; 
import { useRouter } from "next/navigation";

const MagicLinkSignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName) {
      setMessage("Please enter your first name and email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // First, create the user in the database
      const signupResponse = await fetch("/api/auth/signup-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(), 
          firstName: firstName.trim() 
        }),
      });

      const signupData = await signupResponse.json();
      
      if (!signupResponse.ok) {
        throw new Error(signupData.message || "Something went wrong");
      }

      // Then, send the magic link email
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim()
        }),
      });

      const emailData = await emailResponse.json();
      
      if (!emailResponse.ok) {
        throw new Error(emailData.message || "Something went wrong");
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
      {/* Branding Section - exact 50% width */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 min-h-screen">
        <BrandingSection />
      </div>

      {/* Authentication Section - exact 50% width */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 min-h-screen">
        <div className="w-full max-w-[600px] mx-auto">
          <div className="p-12 bg-white shadow-xl rounded-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#584822] mt-8 p-8" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)" }}>Sign Up with Magic Link</h2>
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
                <Link href="/login" className="text-blue-600 hover:underline">
                  login here
                </div>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLinkSignupPage;