"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RegisteredHeader from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          credentials: 'include',
        });
        const data = await response.json();
        
        if (data.user?.userType !== 'Admin') {
          router.push('/');
          return;
        }
        
        setIsAdmin(true);
      } catch (error) {
        console.error('Error checking admin status:', error);
        router.push('/');
      }
    };

    checkAdminStatus();
  }, [router]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div>
      <RegisteredHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#584822] mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your admin dashboard cards/sections here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Manage Venues</h2>
            <button 
              onClick={() => router.push('/admin/venues')}
              className="bg-[#584822] text-white px-4 py-2 rounded hover:bg-[#6A5B3A]"
            >
              View Venues
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Manage Reservations</h2>
            <button 
              onClick={() => router.push('/admin/reservations')}
              className="bg-[#584822] text-white px-4 py-2 rounded hover:bg-[#6A5B3A]"
            >
              View Reservations
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <button 
              onClick={() => router.push('/admin/users')}
              className="bg-[#584822] text-white px-4 py-2 rounded hover:bg-[#6A5B3A]"
            >
              Manage Users
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 