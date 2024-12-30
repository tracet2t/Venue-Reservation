"use client";
import Carousel from '@/components/carousel';
import React from 'react';
import LandingVenueCard from '@/components/venue_card/landing_venue_card';
import Footer from '@/app/layouts/Footer';
import { useRouter } from 'next/navigation';



const AdditionalSection = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
  ];

  return (
    <div
      className="container mx-auto mt-12 p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2"
      style={{
        marginLeft: '0',
        marginRight: '0',
        maxWidth: '100%',
        padding: '0 2rem',
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col space-y-4 md:w-5/12">
        
        <div className="relative w-full h-[200px] md:h-[345px]">
          <img
            src="/images/image1.jpg"
            alt="Row 1 Image"
            className="w-full h-full object-cover rounded-[28px] shadow-lg"
          />
       
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center space-y-1 text-white bg-black bg-opacity-40 rounded-[28px]">
            <p className="text-lg md:text-2xl font-semibold">Explore more to get out of <br /> your comfort zone</p>
            <p className="text-sm md:text-base">Find your perfect venue for unforgettable moments</p>
          </div>

          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-md">
            Reserve your venue
          </button>
        </div>

        {/* Second Image */}
        <div className="w-full h-[200px] md:h-[269px]">
          <img
            src="/images/image2.jpg"
            alt="Row 2 Image"
            className="w-full h-full object-cover rounded-[28px] shadow-lg"
          />
        </div>
      </div>

      {/* Right Column with Carousel */}
      <div className="w-full md:w-7/12 h-[300px] md:h-[620px]">
        <Carousel
          images={images}
          width="100%"
          height="100%"
          arrowBgColor="rgba(0, 0, 0, 0.7)"
          arrowFgColor="#fff"
          dotColor="#ccc"
          activeDotColor="#ff6347"
        />
      </div>
    </div>
  );
};

// Types of venues
const VenueType = () => {
  const router = useRouter();

  const handleVenueTypeClick = (type: string) => {
    router.push(`/card_view?venueType=${type}`);
  };

  const venueTypes = [
    { name: "Auditorium", image: "/images/image1.jpg", description: "A large room for public gatherings." },
    { name: "Conference Hall", image: "/images/image2.jpg", description: "Ideal for corporate events." },
    { name: "Outdoor", image: "/images/image4.jpg", description: "Perfect for outdoor celebrations." },
    { name: "Banquet Hall", image: "/images/image5.jpg", description: "Spacious venue for dining events." },
    { name: "Co-Working Space", image: "/images/image3.jpg", description: "A scenic view for exclusive events." },
  ];

  return (
    <div className="mt-12 w-full px-4">
      <h2 className="text-4xl font-bold text-[#6A5B3A] mb-4 text-center">Browse By Type</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex space-x-4 p-4 justify-center">
          {venueTypes.map((venue, index) => (
            <div 
              key={index}
              className="w-[320px] h-[450px] border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleVenueTypeClick(venue.name)}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-3/4 object-cover rounded-t-lg"
              />
              <div className="w-[308px] h-[110px] p-4 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-center">{venue.name}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{venue.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main FontsPage component
const FontsPage = (): JSX.Element => {
  const router = useRouter();

  const navigateToReservation = () => {
    router.push('/card_view');
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-left">

        {/* Call-to-Action Section */}
        <div className="flex justify-center w-full">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 w-full max-w-full min-h-[300px] md:min-h-[500px] text-center" 
            style={{ 
              margin: '0',
              width: '100%'
            }}>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: '#584822' }}>
              Tailored Spaces, <br /> Reserved for You
            </h2>
            <p className="mt-6 text-gray-600 text-sm md:text-lg">
              Instantly discover the best venues for events, meetings, and celebrations.<br /> Start planning your perfect event today.
            </p>
            <div className="flex justify-center">
              <button
                onClick={navigateToReservation}
                style={{ backgroundColor: '#584822' }} 
                className="mt-10 md:mt-20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#6A5B3A] transition duration-200 ease-in-out flex items-center justify-center"
              >
                Reserve Now <span className="ml-2 text-xl md:text-4xl">→</span>
              </button>
            </div>
          </div>
        </div>

        
        <LandingVenueCard />

        {/* Additional Section */}
<div className="w-full p-4 mx-auto md:p-12" style={{ margin: '0' }}>
  <div className="flex flex-col md:flex-row flex-wrap justify-between rounded-lg shadow-lg p-8 items-center w-full">
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
          <strong className="block text-sm md:text-base">02. Plan Your Event</strong>
          <span className="text-xs md:text-sm">Discover and select the perfect venue based on your specific needs.</span>
        </div>
      </div>

      <div className="flex items-start">
        <svg className="w-8 md:w-10 h-8 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-2-2v4m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
        <div className="ml-2 md:ml-4">
          <strong className="block text-sm md:text-base">03. Make A Reservation</strong>
          <span className="text-xs md:text-sm">Easily reserve your chosen venue online and get instant confirmation.</span>
        </div>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="w-full md:w-1/2">
      <img 
        src="/images/landing image.jpg" 
        alt="Venue" 
        className="w-full h-auto rounded-lg md:ml-4"
      />
    </div>
  </div>
</div>

        <AdditionalSection />

        <VenueType />
        
      </main>
    <Footer/>
    
    </div>
  );
};

export default FontsPage;