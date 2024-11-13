"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const RegisteredHeader = ({ userName }: { userName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-gray-700">
            Home
          </Link>
          <Link href="/my-reservations" className="text-gray-700">
            My Reservations
          </Link>
          <div className="text-gray-700 font-semibold">Hi, {userName}</div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700">
          {/* SVG for Hamburger */}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col space-y-4 p-6 lg:hidden">
            <button onClick={() => setIsOpen(false)} className="text-gray-700 self-end">
              {/* SVG for Close */}
            </button>
            <Link href="/" className="text-gray-700" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/my-reservations" className="text-gray-700" onClick={() => setIsOpen(false)}>
              My Reservations
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default RegisteredHeader;
