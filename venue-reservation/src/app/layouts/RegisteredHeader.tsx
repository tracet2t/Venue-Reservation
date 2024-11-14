"use client";
import React, { useState } from "react";
import Logo from "./Logo";
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
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#6A5B3A]">
          {/* SVG for Hamburger */}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col space-y-4 p-6 lg:hidden">
            <button onClick={() => setIsOpen(false)} className="text-gray-700 self-end focus:outline-none">
              {/* SVG for Close */}
            </button>
            <Link href="/" className="text-[#6A5B3A] text-lg font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/my-reservations" className="text-[#6A5B3A] text-lg font-medium" onClick={() => setIsOpen(false)}>
              My Reservations
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default RegisteredHeader;
