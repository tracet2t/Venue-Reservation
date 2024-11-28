import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-[#f7fafc] mt-12 py-8">
     <div className="max-w-7xl mx-auto p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* First Column */}
        <div className="flex flex-col mr-12">
          <h3 className="text-[#6A5B3A] font-bold text-2xl mb-4">Venue Reservation</h3>
          <p className="text-base text-[#8B7355] mb-6 text-justify">
  A Venue Reservation System is a streamlined platform that allows users to easily browse, book, and manage reservations for event spaces like auditoriums, and conference rooms.
</p>

<div className="flex items-center mb-2">
  <FaPhoneAlt className="text-[#6A5B3A] mr-5 text-xl" />
  <a 
    href="tel:+94701800786" 
    className="text-base text-[#8B7355]"
  >
    +94 70 1800 786
  </a>
</div>

          
          <div className="flex items-center mb-2">
  <FaEnvelope className="text-[#6A5B3A] mr-5 text-xl" />
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@trace.lk" 
    className="text-base text-[#8B7355]"
    target="_blank"
    rel="noopener noreferrer"
  >
    info@trace.lk
  </a>
</div>
<div className="flex items-center mb-2">
  <FaMapMarkerAlt className="text-[#6A5B3A] mr-5 text-xl" />
  <a 
    href="https://www.google.com/maps/search/Bay+6,+Trace+Expert+City,+Maradana,+Colombo+10" 
    className="text-base text-[#8B7355]"
    target="_blank"
    rel="noopener noreferrer"
  >
    Bay 6, Trace Expert City, Maradana, Colombo 10
  </a>
</div>

    
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-2xl mb-4">Quick Links</h3>
          <ul className="text-base text-[#8B7355]">
            <li className="mb-2">Dashboard</li>
            <li>Blog</li>
          </ul>
        </div>
        
        {/* Third Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-2xl mb-4">Support</h3>
          <ul className="text-base text-[#8B7355]">
            <li className="mb-2">WhatsApp</li>
            <li>Telegram</li>
          </ul>
        </div>
        
        {/* Fourth Column */}
        <div className="flex flex-col">
  <h3 className="text-[#6A5B3A] font-bold text-2xl mb-4">Get Updates</h3>
  <div className="relative w-full sm:w-[400px]">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="bg-[#6A5B3A] text-white placeholder-white p-4 pr-32 rounded-md w-full"
    />
    <button 
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#6A5B3A] px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
    >
      Subscribe
    </button>
  </div>
</div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center py-8 bg-[#e2e8f0]">
      <p className="text-4xl ">
  <span className="text-[#C49D40]">TeamReserv</span>
  <span className="text-black"> | © 2024 All Rights Reserved.</span>
</p>

        <p className="text-2xl text-[#8B7355]">Privacy Policy | Terms of Services</p>
      </div>
    </footer>
  );
};

export default Footer;
