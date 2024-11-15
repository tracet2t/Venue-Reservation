"use client";
import React, { useState } from "react";
import Link from "next/link";

const RegisteredHeader = ({ userName }: { userName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F7F7F7] shadow-lg z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link href="" className="text-[#6A5B3A] font-bold text-xl">
          Auditorium Reservation  </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-[#6A5B3A] text-lg font-medium">
            Home
          </Link>
          <Link href="/my-reservations" className="text-[#6A5B3A] text-lg font-medium relative">
            My Reservations
          
          </Link>
          <div className="flex items-center text-[#6A5B3A] font-semibold text-lg">
            Hi, {userName}
          </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#6A5B3A] focus:outline-none">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar menu for mobile */}
        {isOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden z-50">
            <div className="flex justify-between items-center p-4">
              <button onClick={() => setIsOpen(false)} className="text-gray-700 focus:outline-none"> </button>
            </div>

            <nav className="flex flex-col items-start space-y-4 p-4">
              <div className="text-[#6A5B3A] font-semibold text-lg">
                  Hi, {userName}
              </div>
              <Link href="/" className="text-[#6A5B3A] text-lg font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/my-reservations" className="text-[#6A5B3A] text-lg font-medium" onClick={() => setIsOpen(false)}>
                My Reservations
              </Link>
            </nav>
          </div>
        )}
    </header>
  );
};

export default RegisteredHeader;
