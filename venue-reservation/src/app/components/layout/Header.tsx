"use client";
import React from 'react';
import Logo from '@/app/components/layout/Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            
        <div>
            {/* Add the Logo here */}
            <Logo />
        </div>

        <nav className="flex items-center space-x-4" style={{ marginLeft: 'auto' }}>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out">
            Login
            </button>
            <button
            style={{ backgroundColor: '#584822' }}
            className="text-white px-4 py-2 rounded hover:bg-[#6A5B3A] transition duration-200 ease-in-out"
            >
            Signup
            </button>
        </nav>
        </div>
    </header>
    );
};

export default Header;