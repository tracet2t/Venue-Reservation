//venue-reservation/src/app/reset-password/page.tsx 
"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import BrandingSection from "@/components/design/branding-section";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.newPassword.trim() || !formData.confirmPassword.trim()) {
      alert("All fields are required");
      return;
    }

    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please fix validation errors before submitting");
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          newPassword: formData.newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Password reset successful");
        // Redirect to login page
        window.location.href = "/login";
      } else {
        alert(result.error || "Password reset failed");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      alert("An unexpected error occurred");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "newPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        newPassword:
          value.length >= 6 ? "" : "Password must be at least 6 characters long",
      }));
    }

    if (name === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          value === formData.newPassword ? "" : "Passwords do not match",
      }));
    }
  };

  if (!token) {
    return <div>Invalid or expired reset link</div>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    {/* Branding Section - exact 50% width */}
    <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 min-h-screen">
      <BrandingSection />
    </div>


      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 min-h-screen">
      <div className="w-full max-w-[600px] mx-auto">
        <div className="p-12 bg-white shadow-xl rounded-xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#584822] mt-8 p-8" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)" }}>
            Reset Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm md:text-base font-semibold">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Enter your new password"
                required
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
              )}
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Re-enter your new password"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 bg-[#584822] text-white font-semibold rounded-lg"
            >
              Save New Password
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResetPasswordPage;
