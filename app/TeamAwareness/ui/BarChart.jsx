"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// BarChart Component
const BarChart = () => {
  const data = {
    labels: ['CI', 'CLOUD', 'DMZ', 'INT', 'SEC'],
    datasets: [
      {
        label: 'Good',
        data: [100, 100, 50, 40, 70],
        backgroundColor: '#4ade80', 
      },
      {
        label: 'Compromised',
        data: [0, 0, 30, 50, 30],
        backgroundColor: '#f97316', 
      },
      {
        label: 'Not Available',
        data: [0, 0, 20, 10, 0],
        backgroundColor: '#ef4444', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e5e7eb', 
        },
      },
      title: {
        display: true,
        text: 'TEAM AWARENESS',
        color: '#f1f5f9', 
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#9ca3af', 
        },
        grid: {
          color: '#374151', 
        },
      },
      x: {
        ticks: {
          color: '#9ca3af', 
        },
        grid: {
          color: '#374151', 
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 p-20 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-white mb-6">TEAM AWARENESS DASHBOARD</h1>
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
