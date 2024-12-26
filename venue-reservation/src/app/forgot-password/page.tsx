//venue-reservation\src\app\forgot-password\page.tsx
"use client";

import React, { useState } from "react";
import BrandingSection from "@/components/design/branding-section";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    try {
      const response = await fetch("/api/auth/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Password reset link has been sent to your email");
        setEmail("");
      } else {
        setError(result.error || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
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
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#584822] mt-8 p-8" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)" }}>
            Forgot Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {successMessage && (
              <p className="text-olive text-sm mt-1">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 bg-[#584822] text-white font-semibold rounded-lg"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ForgotPasswordPage;
