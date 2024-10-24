import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f7fafc] mt-16">
      <div className="max-w-8xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] text-xl sm:text-2xl mb-2">Venue Reservation</h3>
          <p className="text-sm text-gray-600 mb-2">A Venue Reservation System is a streamlined platform that allows users to easily browse, book, and manage reservations for event spaces like auditoriums and conference rooms.</p>
          <p className="text-sm text-gray-600">+9476-3451121</p>
          <p className="text-sm text-gray-600">pkudewakie@gmail.com</p>
          <p className="text-sm text-gray-600">533, Maradana Road, Colombo</p>
        </div>
 
        {/* Second Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] text-xl sm:text-2xl mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-600">
            <li> Dashboard</li>
            <li> Blog</li>
          </ul>
        </div>
 
        {/* Third Column */}
        <div className="flex flex-col">
          <h3 className="text-[#6A5B3A] text-xl sm:text-2xl mb-2">Support</h3>
          <ul className="text-sm text-gray-600">
            <li> WhatsApp</li>
            <li> Telegram</li>
          </ul>
        </div>
 
        {/* Fourth Column */}
        <div className="flex flex-col">
          <h3 className="text-[#584822] text-xl sm:text-2xl mb-2">Get Updates</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border border-gray-300 p-2 rounded-md mb-2 sm:mb-0 sm:mr-2 w-full"
            />
            <button 
              className="bg-[#584822] text-white px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-[#7B6C48] cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-[#e2e8f0]">
        <p className="text-sm text-gray-600">Created By TeamReserv | &copy; All Rights Reserved</p>
        <p className="text-sm text-gray-600">Privacy Policy | Terms of Services</p>
      </div>
    </footer>
  );
};

export default Footer;
