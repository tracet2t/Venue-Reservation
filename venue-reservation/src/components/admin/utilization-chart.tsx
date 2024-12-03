"use client"
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface UtilizationChartProps {
  data: number[];
  labels: string[];
}

const UtilizationChart: React.FC<UtilizationChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Utilization (%)",
        data,
        backgroundColor: "#d2b48c", // Tailwind `bg-tan-500` color
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Utilization Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default UtilizationChart;
