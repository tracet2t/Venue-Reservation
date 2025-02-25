'use client';
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Define interfaces for the data structure
interface UtilizationData {
  venueName: string;
  utilization: number;
}

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

const UtilizationChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [viewMode, setViewMode] = useState<string>("weekly");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().getMonth().toString());
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

  // Generate arrays for month and year options
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => (currentYear - 2 + i).toString());

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
        endpoint += `?month=${selectedYear}-${String(parseInt(selectedMonth) + 1).padStart(2, '0')}`;
      } else if (viewMode === "yearly") {
        endpoint += `?viewMode=yearly&year=${selectedYear}`;
      }

      const response = await fetch(endpoint);
      const data: UtilizationData[] = await response.json();

      if (data.length === 0) {
        setChartData(null);
        return;
      }

      setChartData({
        labels: data.map((item) => item.venueName),
        datasets: [
          {
            label: "Accepted Reservations (%)",
            data: data.map((item) => item.utilization),
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
  }, [viewMode, selectedMonth, selectedYear]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: "Utilization (%)",
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 10
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        title: {
          display: true,
          text: "Venue",
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 8
        },
        ticks: {
          font: {
            size: 10,
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          padding: 8
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          font: {
            size: 14
          }
        }
      },
    }
  } as const;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full mx-auto">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "weekly" ? "bg-[#584822]" : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("weekly")}
        >
          Week
        </button>
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "monthly" ? "bg-[#584822]" : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("monthly")}
        >
          Month
        </button>
        <button
          className={`px-6 py-2 rounded-full text-white transition-colors ${
            viewMode === "yearly" ? "bg-[#584822]" : "bg-[#8B7355] hover:bg-[#584822]"
          }`}
          onClick={() => setViewMode("yearly")}
        >
          Year
        </button>
      </div>

      {(viewMode === "monthly" || viewMode === "yearly") && (
        <div className="flex justify-center mb-6 space-x-4">
          {viewMode === "monthly" && (
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border rounded-md bg-white text-[#584822] border-[#8B7355]"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          )}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-md bg-white text-[#584822] border-[#8B7355]"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <div className="h-[500px] w-full">
        {loading ? (
          <p className="text-center text-[#584822]">Loading chart...</p>
        ) : chartData ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p className="text-center text-[#584822]">No data available</p>
        )}
      </div>
    </div>
  );
};

export default UtilizationChart;