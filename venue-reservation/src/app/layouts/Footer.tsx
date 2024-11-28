import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-[#f7fafc] mt-16">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className = "Majjshhfhfgjjkla lp-6 grid cols-1 sm:grid-cols-2 md: grid-cols-4 gap-4"></div>
        {/* First Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-xl mb-2">Venue Reservation</h3>
          <p className="text-sm text-[#8B7355] mb-2">A Venue Reservation System is a streamlined platform that allows users to easily browse, book, and manage reservations for event spaces like auditoriums, and conference rooms.</p>
          <div className="flex items-center mb-1">
            <FaPhoneAlt className="text-[#6A5B3A] mr-2" />
            <p className="text-sm text-[#8B7355]">+94 70 1800 786</p>
          </div>
          
          <div className="flex items-center mb-1">
            <FaEnvelope className="text-[#6A5B3A] mr-2" />
            <p className="text-sm text-[#8B7355]">info@trace.lk</p>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#6A5B3A] mr-2" />
            <p className="text-sm text-[#8B7355]">Bay 6, Trace Expert City, Maradana, Colombo 10.</p>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-xl mb-2">Quick Links</h3>
          <ul className="text-sm text-[#8B7355]">
            <li className="mb-1">Dashboard</li>
            <li>Blog</li>
          </ul>
        </div>
        
        {/* Third Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-xl mb-2">Support</h3>
          <ul className="text-sm text-[#8B7355]">
            <li className="mb-1">WhatsApp</li>
            <li>Telegram</li>
          </ul>
        </div>
        
        {/* Fourth Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] font-bold text-xl mb-2">Get Updates</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border border-gray-300 p-2 rounded-md mb-2 sm:mb-0 sm:mr-2 w-full"
            />
            <button 
              className="bg-[#6A5B3A] text-white px-4 py-2 rounded-md hover:bg-[#7B6C48] transition duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 bg-[#e2e8f0]">
        <p className="text-sm text-[#8B7355]">Created By TeamReserv | &copy; All Rights Reserved</p>
        <p className="text-sm text-[#8B7355]">Privacy Policy | Terms of Services</p>
      </div>
    </footer>
  );
};

export default Footer;
