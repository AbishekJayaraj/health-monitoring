// src/components/ChartComponent.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data = [] }) => {
  if (!data.length) {
    return <div>No data available to display.</div>;
  }

  const labels = data.map(entry =>
    entry.timestamp?.toDate().toLocaleString() || 'N/A'
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: data.map(entry => entry.heartRate ?? 0),
        borderColor: '#16a085',
        backgroundColor: 'rgba(22, 160, 133, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
      },
      {
        label: 'SpO₂ (%)',
        data: data.map(entry => entry.SpO2 ?? 0),
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
      },
      {
        label: 'Temperature (°C)',
        data: data.map(entry => entry.temperature ?? 0),
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Health Monitoring Data',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
