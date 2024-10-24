"use client";

import React from 'react';
import Carousel from '@/app/components/Carousel';
import Footer from '@/app/components/Footer';

interface FontsPageProps {
  title: string;
}

// VenueCard component
const VenueCard = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div className="mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
      <div className="w-full md:w-1/3 mt-10 h-64 md:h-400">
        <div className="h-full border border-gray-300 rounded-lg shadow-lg">
          <Carousel images={images} autoSlide={false} />
        </div>
      </div>

      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Trace Auditorium</h1>
          <p className="text-gray-700">Bay 6, Trace Expert City, Maradana, Colombo, Western Province</p>
          <p className="text-gray-700"><strong>Type:</strong> Auditorium</p>
          <p className="text-gray-700"><strong>Capacity:</strong> 500 seated</p>
          <p className="text-gray-700"><strong>Size:</strong> 5000 sqft</p>
          <p className="text-gray-700"><strong>Time Schedule:</strong> Entire Day</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Features:</h2>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>✓ State-of-the-art acoustics system for enhanced sound quality</li>
            <li>✓ Ergonomic seating for maximum comfort</li>
            <li>✓ Advanced lighting system with customizable ambiance</li>
            <li>✓ High-definition projector and retractable screen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};





const AdditionalSection = () => {
  return (
    <div
      className="container mx-auto mt-12 p-4 flex"
      style={{
        marginLeft: '2mm',
        marginRight: '2mm',
        width: '1600px',  // Increase overall width
        height: '620px',  // Overall height remains the same
      }}
    >
      {/* First Column with increased width */}
      <div
        className="flex flex-col space-y-4"
        style={{
          width: '600px',  // Increased width for the first column
          height: '620px', // Height remains the same
        }}
      >
        {/* Row 1 with adjusted dimensions */}
        <div
          style={{
            width: '600px',  // Increased width for Row 1
            height: '345px', // Height remains the same
          }}
        >
          <img
            src="/images/image1.jpg"
            alt="Row 1 Image"
            className="w-full h-full object-cover rounded-[28px] shadow-lg"
          />
        </div>

        {/* Row 2 with adjusted dimensions */}
        <div
          style={{
            width: '600px',  // Increased width for Row 2
            height: '269px', // Height remains the same
          }}
        >
          <img
            src="/images/image2.jpg"
            alt="Row 2 Image"
            className="w-full h-full object-cover rounded-[28px] shadow-lg"
          />
        </div>
      </div>

      {/* Space between columns */}
      <div className="w-4" /> {/* Space between columns remains unchanged */}

      {/* Second Column with increased width */}
      <div
        className="flex items-center justify-center"
        style={{
          width: '1000px',  // Increased width for the second column
          height: '620px',  // Height remains the same
        }}
      >
        <img
          src="/images/image3.jpg"
          alt="Right Column Image"
          className="w-full h-full object-cover rounded-[28px] shadow-lg"
        />
      </div>
    </div>
  );
};
=======
>>>>>>> f50ad39860742dfab3a6e7f8fd469f75dfb14dcd

// Main FontsPage component
const FontsPage = ({ title }: FontsPageProps): JSX.Element => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Section */}
<<<<<<< HEAD
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* First Column: Logo aligned to the left */}
          <div className="text-2xl font-bold text-gray-800" style={{ marginRight: 'auto' }}>
            MyLogo
          </div>

          {/* Second Column: Buttons aligned to the right */}
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
=======

>>>>>>> f50ad39860742dfab3a6e7f8fd469f75dfb14dcd

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{title}</h1>

        {/* Call-to-Action Section */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 w-full max-w-full md:max-w-[calc(100%+4rem)] mx-[-2rem] min-h-[300px] md:min-h-[500px] text-center" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: '#584822' }}>
              Tailored Spaces, <br /> Reserved for You
            </h2>
            <p className="mt-6 text-gray-600 text-sm md:text-lg">
              Instantly discover the best venues for events, meetings, and celebrations.<br /> Start planning your perfect event today.
            </p>
            <div className="flex justify-center">
              <button
                style={{ backgroundColor: '#584822' }} 
                className="mt-10 md:mt-20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#6A5B3A] transition duration-200 ease-in-out flex items-center justify-center"
              >
                Reserve Now <span className="ml-2 text-xl md:text-4xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Venue Card */}
        <VenueCard />

        {/* Additional Section */}
        <div className="max-w-full mx-auto p-4 md:p-7" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between border border-gray-300 rounded-lg shadow-lg p-6 items-center w-full">
            <h1 className="text-[30px] md:text-[50px] font-bold text-center mb-8 text-[#6A5B3A] w-full">
              Are you looking for a venue?
            </h1>

            <div className="w-full md:w-1/2 space-y-6 text-left">
              <div className="flex items-start">
                <svg className="w-8 md:w-10 h-8 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-2-2v4m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <div className="ml-2 md:ml-4">
                  <strong className="block text-sm md:text-base">01. Discover Your Ideal Venue</strong>
                  <span className="text-xs md:text-sm">Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize.</span>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 md:w-10 h-8 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-2-2v4m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <div className="ml-2 md:ml-4">
                  <strong className="block text-sm md:text-base">02. Experience it Seamlessly</strong>
                  <span className="text-xs md:text-sm">Nikmati setiap perjalanan dengan kenyamanan yang tiada tanding.</span>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 md:w-10 h-8 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-2-2v4m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <div className="ml-2 md:ml-4">
                  <strong className="block text-sm md:text-base">03. Experience it Seamlessly</strong>
                  <span className="text-xs md:text-sm">Nikmati setiap perjalanan dengan kenyamanan yang tiada tanding.</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img className="w-full h-auto rounded-lg shadow-lg" src="/images/landing image.jpg" alt="Beautiful Image" />
            </div>
          </div>
        </div>

        {/* AdditionalSection */}
        <AdditionalSection />
      </main>

      {/* Footer */}

    </div>
  );
};

export default FontsPage;

