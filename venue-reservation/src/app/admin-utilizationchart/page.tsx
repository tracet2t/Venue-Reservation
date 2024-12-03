import React from "react";
import UtilizationChart from "@/components/admin/utilization-chart";

const AdminHomePage = () => {
  const labels = ["V1", "V2", "V3", "V4", "V5", "V6", "V7"];
  const data = [30, 60, 40, 80, 50, 30, 70];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Utilization Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <UtilizationChart labels={labels} data={data} />
      </div>
    </div>
  );
};

export default AdminHomePage;
