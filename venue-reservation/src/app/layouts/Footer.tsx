import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f7fafc] mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-[#6A5B3A] font-bold text-xl mb-4">Venue Reservation</h3>
            <p className="text-[#8B7355] text-sm leading-relaxed mb-4">
              A streamlined platform that allows users to easily browse, book, and manage reservations for event spaces like auditoriums and conference rooms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#6A5B3A] hover:text-[#8B7355] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#6A5B3A] hover:text-[#8B7355] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#6A5B3A] hover:text-[#8B7355] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#6A5B3A] hover:text-[#8B7355] transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#6A5B3A] font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/dashboard" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/venues" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                  Venues
                </a>
              </li>
              <li>
                <a href="/bookings" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                  My Bookings
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-[#6A5B3A] font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+94701800786" className="flex items-center space-x-3 text-[#8B7355] hover:text-[#6A5B3A] transition-colors">
                <FaPhoneAlt className="text-[#6A5B3A]" />
                <span className="text-sm">+94 70 1800 786</span>
              </a>
              <a href="mailto:info@trace.lk" className="flex items-center space-x-3 text-[#8B7355] hover:text-[#6A5B3A] transition-colors">
                <FaEnvelope className="text-[#6A5B3A]" />
                <span className="text-sm">info@trace.lk</span>
              </a>
              <a href="https://goo.gl/maps/yourlink" className="flex items-center space-x-3 text-[#8B7355] hover:text-[#6A5B3A] transition-colors">
                <FaMapMarkerAlt className="text-[#6A5B3A]" />
                <span className="text-sm">Bay 6, Trace Expert City, Maradana, Colombo 10</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-[#6A5B3A] font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-[#8B7355] text-sm mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#6A5B3A] focus:outline-none focus:ring-2 focus:ring-[#6A5B3A] text-sm"
              />
              <button 
                className="mt-2 w-full bg-[#6A5B3A] text-white px-4 py-2 rounded-lg hover:bg-[#584822] transition-colors text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#8B7355] text-sm">
              <span className="font-semibold text-[#C49D40]">TeamReserv</span> © 2024 All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#8B7355] hover:text-[#6A5B3A] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;