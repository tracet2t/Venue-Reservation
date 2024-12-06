"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#FDF8F3]" : "";
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r">
      {/* Logo Section */}
      <div className="p-6">
        <div className="text-2xl font-bold text-[#584822]">RMS<span className="text-blue-500">.</span></div>
        <div className="text-sm text-gray-500">Reservation Management System</div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <Link 
          href="/admin/dashboard"
          className={`flex items-center px-6 py-3 text-[#584822] hover:bg-[#FDF8F3] ${isActive('/admin/dashboard')}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Dashboard
        </Link>

        <Link 
          href="/admin/reservation-requests"
          className={`flex items-center px-6 py-3 text-[#584822] hover:bg-[#FDF8F3] ${isActive('/admin/reservation-requests')}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Reservation Requests
        </Link>

        <Link 
          href="/admin/calendar"
          className={`flex items-center px-6 py-3 text-[#584822] hover:bg-[#FDF8F3] ${isActive('/admin/calendar')}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Calendar
        </Link>

        <Link 
          href="/admin/venue-details"
          className={`flex items-center px-6 py-3 text-[#584822] hover:bg-[#FDF8F3] ${isActive('/admin/venue-details')}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Venue Details
        </Link>

        <Link 
          href="/admin/payments"
          className={`flex items-center px-6 py-3 text-[#584822] hover:bg-[#FDF8F3] ${isActive('/admin/payments')}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Payments
        </Link>
      </nav>
    </div>
  );
} 