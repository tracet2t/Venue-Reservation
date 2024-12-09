import React from "react";
import UtilizationChart from "@/components/admin/utilization-chart";

const AdminHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Utilization Chart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <UtilizationChart/>
      </div>
    </div>
  );
};

export default AdminHomePage;
