"use client";

import React, { useState } from 'react';
import BrandingSection from '@/components/branding-section'; // Import the BrandingSection component

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col w-1/2 h-full bg-white items-center justify-center">
        <BrandingSection />
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-1/2 h-full bg-white items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-center">New User Account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm md:text-base font-semibold">First Name</label>
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

            <div>
              <label className="block text-sm md:text-base font-semibold">Last Name</label>
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

            <div>
              <label className="block text-sm md:text-base font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="+94 76 ** **"
                required
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 border border-[#584822] rounded w-full"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-2 bg-[#584822] text-white rounded hover:bg-[#6A5B3A] transition duration-200 text-sm sm:text-base"
            >
              <b>SIGNUP</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;