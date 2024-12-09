"use client"

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UtilizationPage = () => {
  const [utilizationData, setUtilizationData] = useState<any>(null);
  const [venueId, setVenueId] = useState<number>(1); // Example: set initial venueId as 1
  const [period, setPeriod] = useState<string>('daily'); // Default to daily utilization
  const [date, setDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [month, setMonth] = useState<string>('');

  // Function to fetch utilization data
  const fetchUtilizationData = async () => {
    try {
      let url = `/admin-api/utilization?venueId=${venueId}`;

      if (period === 'daily' && date) {
        url += `&date=${date}`;
      } else if (period === 'weekly' && startDate && endDate) {
        url += `&startDate=${startDate}&endDate=${endDate}`;
      } else if (period === 'monthly' && month) {
        url += `&month=${month}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setUtilizationData(data.utilization);
      } else {
        alert(data.message || 'Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Chart.js data structure for utilization chart
  const chartData = {
    labels: ['Utilization'],
    datasets: [
      {
        label: 'Utilization Percentage',
        data: [utilizationData || 0],
        backgroundColor: '#4caf50', // Green color
        borderColor: '#388e3c',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${period.charAt(0).toUpperCase() + period.slice(1)} Utilization`,
      },
      legend: {
        display: false,
      },
    },
  };

  // Fetch data on component mount or when period/params change
  useEffect(() => {
    fetchUtilizationData();
  }, [period, date, startDate, endDate, month]);

  return (
    <div>
      <h1>Utilization Dashboard</h1>
      
      {/* Select Period */}
      <div>
        <label>Period: </label>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Input based on Period Selection */}
      {period === 'daily' && (
        <div>
          <label>Select Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      )}

      {period === 'weekly' && (
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>End Date: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      )}

      {period === 'monthly' && (
        <div>
          <label>Select Month: </label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
      )}

      {/* Chart Display */}
      <div style={{ maxWidth: '600px', margin: '20px auto' }}>
        {utilizationData !== null ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <p>Loading utilization data...</p>
        )}
      </div>
    </div>
  );
};

export default UtilizationPage;
