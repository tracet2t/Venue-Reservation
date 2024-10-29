"use client"
import { useState } from "react";
import Chart from "@/components/chart"

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const labels = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
  const data = [65, 59, 80, 81, 56, 55];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0 bg-gray-100 w-64 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <h2 className="text-white text-lg font-bold">Admin Dashboard</h2>
          <button
            onClick={toggleSidebar}
            className="text-white lg:hidden focus:outline-none"
          >
            ✕
          </button>
        </div>
        <nav className="mt-5">
          <ul>
            <li className=" text-blackpy-2 px-4 hover:bg-gray-700">
              Dashboard
            </li>
            <li className="text-black py-2 px-4 hover:bg-gray-700">
                Reservation Request
            </li>
            <li className="text-black py-2 px-4 hover:bg-gray-700">
                Calender
            </li>
            <li className="text-black py-2 px-4 hover:bg-gray-700">
              Venue Details
            </li>
            <li className="text-black py-2 px-4 hover:bg-gray-700">
              Calendar
            </li>
            <li className="text-black py-2 px-4 hover:bg-gray-700">
              Payments
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 lg:ml-64">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-blue-900 focus:outline-none"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
          <div className="text-blue-900">Admin</div>
        </header>

        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="bg-gray-100 border w-800">
                <Chart labels={labels} data={data} />
        </div>
        </main>
        
      </div>
    </div>
  );
}

export default AdminDashboard;
