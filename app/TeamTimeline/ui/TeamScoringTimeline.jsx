"use client"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const colors = {
  abandonTask: '#9B59B6',
  attackReports: '#E74C3C',
  availability: '#1ABC9C',
  incidentReports: '#3498DB',
  restoreFromBackup: '#F1C40F',
  situationReports: '#2980B9',
  solveTask: '#27AE60',
  special: '#E67E22',
  total: '#8E44AD',
  useHint: '#D35400',
};


const datasets = [
  {
    label: 'Abandon Task',
    borderColor: colors.abandonTask,
    data: [500, 400, 300, 200, 100, 0],
  },
  {
    label: 'Attack Reports',
    borderColor: colors.attackReports,
    data: [400, 350, 300, 250, 200, 150],
  },
  {
    label: 'Availability',
    borderColor: colors.availability,
    data: [2000, 2200, 2400, 2600, 2800, 3000],
  },
  {
    label: 'Incident Reports',
    borderColor: colors.incidentReports,
    data: [-1000, -800, -600, -400, -200, 0],
  },
  {
    label: 'Restore from Backup',
    borderColor: colors.restoreFromBackup,
    data: [100, 150, 200, 250, 300, 350],
  },
  {
    label: 'Situation Reports',
    borderColor: colors.situationReports,
    data: [600, 650, 700, 750, 800, 850],
  },
  {
    label: 'Solve Task',
    borderColor: colors.solveTask,
    data: [200, 250, 300, 350, 400, 450],
  },
  {
    label: 'Special',
    borderColor: colors.special,
    data: [100, 120, 140, 160, 180, 200],
  },
  {
    label: 'Total',
    borderColor: colors.total,
    data: [1000, 1200, 1400, 1600, 1800, 2000],
  },
  {
    label: 'Use Hint',
    borderColor: colors.useHint,
    data: [300, 320, 340, 360, 380, 400],
  },
];

const TeamScoringTimeline = () => {
  const timelineData = {
    labels: [
      '26.04.2022 11:55',
      '26.04.2022 12:00',
      '26.04.2022 12:05',
      '27.04.2022 09:00',
      '28.04.2022 12:15',
      '28.04.2022 17:09',
    ],
    datasets: datasets.map(dataset => ({
      ...dataset,
      backgroundColor: `${dataset.borderColor}33`, // Add transparency to background
      fill: true,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Team Scoring Timeline',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Line data={timelineData} options={options} />
    </div>
  );
};

export default TeamScoringTimeline;
