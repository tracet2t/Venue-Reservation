import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type UtilizationChartProps = {
  labels: string[];
  data: number[];
};

const UtilizationChart: React.FC<UtilizationChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Utilization (%)',
        data,
        backgroundColor: '#DFC788',
        borderColor: '#DFC788',
        borderWidth: 1,
        borderRadius:10
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Utilization Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Utilization (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Venue',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default UtilizationChart;
 