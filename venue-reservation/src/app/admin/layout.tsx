'use client';
import { useState } from 'react';
import Sidebar from '@/components/admin/side-bar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open on desktop

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed position */}
      <div 
        className={`fixed left-0 top-0 h-full transform transition-transform duration-300 ease-in-out z-30 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static`}
      >
         <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64 w-full">
        {/* Main Content */}
        <div className="flex-1 p-2 px-6 md:px-6 lg:px-8 overflow-auto">
          {children}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}