"use client"; 

import React from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';

interface FontsPageProps {
  title: string;
}

const FontsPage = ({ title }: FontsPageProps): JSX.Element => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white">
        <div className="max-w-[10000px] mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo on the Left */}
          <div className="text-2xl font-bold text-[#2d3748]">
            MyLogo
          </div>

          {/* Buttons on the Right */}
          <nav className="flex gap-4">
            <button
              className="bg-[#e2e8f0] text-[#4a5568] px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-[#cbd5e0] cursor-pointer"
            >
              Login
            </button>
            <button
              className="bg-[#584822] text-white px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-[#6A5B3A] cursor-pointer"
            >
              Signup
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-5xl mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#2d3748]">{title}</h1>
        <p className="mt-4 text-lg text-[#718096]"></p>

        {/* Full-Width Text Section */}
        <div className="mt-16">
          <h2 className="font-bold text-[68px] text-[#6A5B3A]">
            Tailored Spaces, <br /> Reserved for You
          </h2>
          <p className="mt-4 text-lg text-[#718096]">
            Instantly discover the best venues for events, meetings, and celebrations. <br />
            Start planning your perfect event today.
          </p>
          <button
            className="mt-8 bg-[#6A5B3A] text-white px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out hover:bg-[#7B6C48] cursor-pointer"
          >
            Reserve Now
          </button>
        </div>
      </main>

      {/* Venue Section */}
      <div className="max-w-8xl mx-auto p-7">
        {/* Header */}
        <h1 className="text-[50px] font-bold text-center mb-8 text-[#6A5B3A]">
          Are you looking for a venue?
        </h1>

        {/* Main Content */}
        <div className="flex flex-wrap justify-between">
          {/* Left Column */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-start">
              <Image src="" alt="Icon 1" width={40} height={40} />
              <div className="ml-4">
                <strong className="block">01. Discover Your Ideal Venue</strong>
                <span>Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize.</span>
              </div>
            </div>

            <div className="flex items-start">
              <Image src="" alt="Icon 2" width={40} height={40} />
              <div className="ml-4">
                <strong className="block">02. Secure Your Perfect Venue</strong>
                <span>Tulis dan lengkapi data kamu untuk keperluan data booking.</span>
              </div>
            </div>

            <div className="flex items-start">
              <Image src="" alt="Icon 3" width={40} height={40} />
              <div className="ml-4">
                <strong className="block">03. Relish Your Perfect Reservation</strong>
                <span>Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan.</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <Image src="" alt="Venue" layout="responsive" width={800} height={300} />
          </div>
        </div>
      </div>

   {/*Footer Section*/}
   <Footer />
    </div>
  );
}

export default FontsPage;