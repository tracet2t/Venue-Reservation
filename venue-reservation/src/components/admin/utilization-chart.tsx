'use client';
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UtilizationChart = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [viewMode, setViewMode] = useState<string>("daily"); // daily, weekly, monthly
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUtilizationData = async () => {
    setLoading(true);

    try {
      let endpoint = "/api/admin-api/utilization";
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];

      if (viewMode === "daily") {
        endpoint += `?date=${formattedDate}`;
      } else if (viewMode === "weekly") {
        const startDate = new Date(today.setDate(today.getDate() - 7))
          .toISOString()
          .split("T")[0];
        endpoint += `?startDate=${startDate}&endDate=${formattedDate}`;
      } else if (viewMode === "monthly") {
        const month = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
        endpoint += `?month=${month}`;
      }

      const response = await axios.get(endpoint);
      const data = response.data;

      const labels = data.map((item: any) => item.venueName);
      const utilizations = data.map((item: any) => item.utilization);

      setChartData({
        labels,
        datasets: [
          {
            label: "Utilization (%)",
            data: utilizations,
            backgroundColor: "rgba(131, 115, 12, 0.64)",
            borderColor: "rgb(72, 55, 3)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching utilization data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUtilizationData();
  }, [viewMode]);

  return (
    <div className="p-4 bg-[#f7f5e6] rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* <h2 className="text-2xl font-bold text-[#584822] mb-4 text-center">Utilization Chart</h2> */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          className={`px-4 py-2 rounded-lg text-white bg-[#584822] hover:bg-[#71623b] focus:ring-2 focus:ring-[#71623b] ${
            viewMode === "daily" ? "font-bold" : ""
          }`}
          onClick={() => setViewMode("daily")}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white bg-[#584822] hover:bg-[#71623b] focus:ring-2 focus:ring-[#71623b] ${
            viewMode === "weekly" ? "font-bold" : ""
          }`}
          onClick={() => setViewMode("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white bg-[#584822] hover:bg-[#71623b] focus:ring-2 focus:ring-[#71623b] ${
            viewMode === "monthly" ? "font-bold" : ""
          }`}
          onClick={() => setViewMode("monthly")}
        >
          Monthly
        </button>
      </div>
      {loading ? (
        <p className="text-center text-[#584822]">Loading chart...</p>
      ) : chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Utilization (%)",
                  font: { size: 16, weight: "bold" },
                  color: "#584822",
                },
                grid: {
                  display: false, // Hides y-axis grid lines
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Venues",
                  font: { size: 16, weight: "bold" },
                  color: "#584822",
                },
                ticks: {
                  font: { weight: "bold" },
                },
                grid: {
                  display: false, // Hides x-axis grid lines
                },
              },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const utilization = context.raw;
                    return `${context.label}: ${utilization}% Utilization`;
                  },
                },
                backgroundColor: "#fff",
                titleColor: "#333",
                bodyColor: "#333",
                borderColor: "#ddd",
                borderWidth: 1,
              },
            },
          }}
        />
      ) : (
        <p className="text-center text-[#584822]">No data available</p>
      )}
    </div>
  );
};

export default UtilizationChart;
