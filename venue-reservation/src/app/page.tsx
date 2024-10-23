"use client";

import React from 'react';
import Carousel from '@/app/components/Carousel';

interface FontsPageProps {
  title: string;
}

// VenueCard component
const VenueCard = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  return (
    <div className="h-200 mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg flex" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
      <div className="w-1/3 mt-10 h-400">
        <div className="h-200 border border-gray-300 rounded-lg shadow-lg">
          <Carousel images={images} autoSlide={false} />
        </div>
      </div>

      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">Trace Auditorium</h1>
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

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 MyVenue. All Rights Reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

// Main FontsPage component
const FontsPage = ({ title }: FontsPageProps): JSX.Element => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          <div className="text-2xl font-bold text-gray-800" style={{ marginRight: 'auto' }}>
            MyLogo
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

      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

        {/* Call-to-Action Section */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-16 w-full max-w-[calc(100%+4rem)] mx-[-2rem] min-h-[500px] text-center" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
            <h2 className="text-4xl font-bold" style={{ color: '#584822' }}>
              Tailored Spaces, <br /> Reserved for You
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              Instantly discover the best venues for events, meetings, and celebrations.<br /> Start planning your perfect event today.
            </p>
            <div className="flex justify-center">
              <button
                style={{ backgroundColor: '#584822' }} 
                className="mt-20 text-white px-8 py-4 rounded-full hover:bg-[#6A5B3A] transition duration-200 ease-in-out flex items-center justify-center"
              >
                Reserve Now <span className="ml-2 text-4xl">→</span>
              </button>
            </div>
          </div>
        </div>

        
        <VenueCard />

        
        <div className="max-w-full mx-auto p-7" style={{ marginLeft: '2mm', marginRight: '2mm' }}>
          
          <div className="flex flex-wrap justify-between border border-gray-300 rounded-lg shadow-lg p-6 items-center w-full">
            
            <h1 className="text-[50px] font-bold text-center mb-8 text-[#6A5B3A] w-full">
              Are you looking for a venue?
            </h1>

            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-start">
                
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-2-2v4m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <div className="ml-4">
                  <strong className="block">01. Discover Your Ideal Venue</strong>
                  <span>Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize.</span>
                </div>
              </div>

              <div className="flex items-start">
                
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h4l1 1-6 6H9l-1-1 6-6zm-9 3v1m-1-1h1m-1 0v-1h1v1H5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18h1l2 2-1 1H6zM21 5l-6 6-3-3 6-6c1.5-1.5 3.5-1.5 5 0s1.5 3.5 0 5z" />
                </svg>
                <div className="ml-4">
                  <strong className="block">02. Secure Your Perfect Venue</strong>
                  <span>Tulis dan lengkapi data kamu untuk keperluan data booking.</span>
                </div>
              </div>

              <div className="flex items-start">
                
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="ml-4">
                  <strong className="block">03. Personalize Your Venue</strong>
                  <span>Kami siap membantu untuk menjadikan venue pilihan kamu sesuai dengan keinginanmu.</span>
                </div>
              </div>
            </div>

            
            <div className="w-full md:w-1/2">
              <img className="w-full object-cover h-[400px] rounded-lg" src="/images/venue_placeholder.jpg" alt="Venue" />
            </div>
          </div>
        </div>
      </main>

      
      <Footer />
    </div>
  );
};

export default FontsPage;