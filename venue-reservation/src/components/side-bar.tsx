// components/side-bar.tsx
import React from 'react';
import { FaHome, FaCalendarAlt, FaRegMoneyBillAlt, FaClipboardList } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-64 bg-white-800 text-Black">
      <div className="p-4 text-2xl font-bold">
        <span className="text-blue-500">RMS.</span>
        <p className="text-sm text-gray-400">Reservation Management System</p>
      </div>

      <div className="mt-8 space-y-4">
        <SidebarItem icon={<FaHome />} label="Dashboard" />
        <SidebarItem icon={<FaClipboardList />} label="Reservation Requests" />
        <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
        <SidebarItem icon={<FaClipboardList />} label="Venue Details" active />
        <SidebarItem icon={<FaRegMoneyBillAlt />} label="Payments" />
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center space-x-2 p-2 pl-4 text-lg cursor-pointer rounded-lg transition-colors duration-300 ${
        active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
