'use client';
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UtilizationChart = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [viewMode, setViewMode] = useState<string>("weekly");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUtilizationData = async () => {
    setLoading(true);
    try {
      let endpoint = "/api/admin/utilization";
      const today = new Date();
      
      if (viewMode === "weekly") {
        const lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 7);
        endpoint += `?startDate=${lastWeek.toISOString().split('T')[0]}&endDate=${today.toISOString().split('T')[0]}`;
      } else if (viewMode === "monthly") {
        const month = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
        endpoint += `?month=${month}`;
      } else if (viewMode === "yearly") {
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        const endOfYear = new Date(today.getFullYear(), 11, 31);
        endpoint += `?startDate=${startOfYear.toISOString().split('T')[0]}&endDate=${endOfYear.toISOString().split('T')[0]}`;
      }

      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.length === 0) {
        setChartData(null);
        return;
      }

      setChartData({
        labels: data.map((item: any) => item.venueName),
        datasets: [
          {
            label: "Utilization (%)",
            data: data.map((item: any) => item.utilization),
            backgroundColor: "rgb(209, 188, 126)",
            borderColor: "rgb(72, 55, 3)",
            borderWidth: 1,
            borderRadius: 8,
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

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 20,
          callback: function(tickValue: number | string) {
            return tickValue.toString();
          }
        },
        title: {
          display: true,
          text: "Utilization (%)",
          font: {
            size: 14,
            weight: 'bold' as const
          }
        },
        grid: {
          display: false
        }
      },
      x: {
        title: {
          display: true,
          text: "Venue",
          font: {
            size: 14,
            weight: 'bold' as const
          }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  } as const;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "weekly" 
              ? "bg-[#584822]" 
              : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("weekly")}
        >
          Week
        </button>
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "monthly" 
              ? "bg-[#584822]" 
              : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("monthly")}
        >
          Month
        </button>
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "yearly" 
              ? "bg-[#584822]" 
              : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("yearly")}
        >
          Year
        </button>
      </div>
      
      {loading ? (
        <p className="text-center text-[#584822]">Loading chart...</p>
      ) : chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p className="text-center text-[#584822]">No data available</p>
      )}
    </div>
  );
};

export default UtilizationChart;