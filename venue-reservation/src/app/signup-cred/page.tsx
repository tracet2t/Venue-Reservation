"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BrandingSection from "@/components/design/branding-section";
import Card from "@/components/ui/card";
const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Ensure all fields are filled
    if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.phoneNumber.trim() ||
        !formData.password.trim() ||
        !formData.confirmPassword.trim()
    ) {
      alert("All fields are required");
      return;
    }
  
    // Check for validation errors
    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please fix validation errors before submitting");
      return;
    }
  
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Signup successful");
        // Navigate to login page after successful signup
        router.push("/login");
      } else {
        alert(result.error || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An unexpected error occurred");
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      }));
    }

    if (name === "phoneNumber") {
      const phoneRegex = /^\+94[0-9]{9}$/; // Validates phone number format for Sri Lanka
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: phoneRegex.test(value)
          ? ""
          : "Phone number must be in the format +94 7XX XXX XXX",
      }));
    }

    if (name === "password") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          value.length >= 6 ? "" : "Password must be at least 6 characters long",
      }));
    }

    if (name === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          value === formData.password ? "" : "Passwords do not match",
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-8">
        <BrandingSection />
      </div>

      {/* Form Section */}
      <div className="w-full h-screen md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <Card>
          <div className="w-full max-w-md flex flex-col items-center px-2 sm:px-4 pb-6 min-h-[800px] py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#584822] mb-6 py-2" 
                style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)" }}>
              New User Account
            </h2>
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              {/* First Name */}
              <div>
                <label className="block text-sm md:text-base font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#584822] rounded w-full"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm md:text-base font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#584822] rounded w-full"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm md:text-base font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#584822] rounded w-full"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm md:text-base font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#584822] rounded w-full"
                  placeholder="+94 XXX XXX XXX"
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm md:text-base font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-[#584822] rounded w-full"
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
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
                  placeholder="Re-Enter password"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#584822] text-white font-semibold rounded-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;