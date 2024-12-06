"use client"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TeamScoring = () => {
  const teamScoringData = {
    labels: ['BT-01', 'BT-06', 'BT-11', 'BT-03', 'BT-10', 'BT-09', 'BT-02', 'BT-07', 'BT-12', 'BT-04', 'BT-05', 'BT-13', 'BT-14', 'BT-08'],
    datasets: [
      {
        label: 'Team Scores',
        backgroundColor: '#a15ddf',
        data: [5382.82, 5323.73, 5200.82, 5173.55, 5047.84, 4900.43, 4863.17, 4850.66, 4794.55, 4437.12, 4120.15, 3895.79, 3778.19, 3630.34],
      },
    ],
  };

  const scoreSplitData = {
    labels: ['BT-01', 'BT-06', 'BT-11', 'BT-03', 'BT-10', 'BT-09', 'BT-02', 'BT-07', 'BT-12', 'BT-04', 'BT-05', 'BT-13', 'BT-14', 'BT-08'],
    datasets: [
      { label: 'Use Hint', backgroundColor: '#3B82F6', data: [1200, 1100, 1150, 980, 1050, 1110, 1120, 1200, 1170, 980, 1050, 1080, 1020, 1000] },
      { label: 'Attack Reports', backgroundColor: '#EF4444', data: [-4492.97, -4071.09, -4492.97, -4071.09, -4071.09, -4682.81, -4577.34, -4577.34, -4345.31, -4577.34, -4345.31, -4682.81, -4345.31, -4007.81] },
      { label: 'Restore from Backup', backgroundColor: '#F59E0B', data: [500, 450, 470, 520, 510, 470, 480, 510, 480, 450, 470, 520, 510, 480] },
      { label: 'Abandon Task', backgroundColor: '#8B5CF6', data: [300, 280, 290, 310, 305, 295, 285, 300, 295, 280, 290, 310, 305, 285] },
      { label: 'Special', backgroundColor: '#F472B6', data: [400, 380, 370, 390, 395, 385, 375, 390, 385, 370, 380, 390, 395, 375] },
      { label: 'Solve Task', backgroundColor: '#10B981', data: [1000, 950, 990, 1020, 1010, 1000, 1015, 1020, 990, 950, 980, 1020, 1005, 990] },
      { label: 'Availability', backgroundColor: '#22C55E', data: [5508.99, 5218.91, 5474.6, 5163.81, 5327.7, 5477.64, 5516.41, 5572.09, 5257.72, 5102.61, 5420.93, 5478.74, 5286.74, 5508.73] },
      { label: 'Incident Reports', backgroundColor: '#FF8C00', data: [750, 720, 730, 710, 745, 720, 735, 740, 725, 710, 730, 745, 720, 730] },
      { label: 'Situation Reports', backgroundColor: '#6366F1', data: [950, 920, 940, 970, 965, 950, 970, 960, 940, 920, 960, 975, 950, 930] },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'bottom', 
      },
    },
    scales: {
      x: {
        stacked: true,  
      },
      y: {
        stacked: true,  
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-between p-2 bg-gray-800"> 
        <div className="text-md font-bold">TEAM SCORING</div> 
        <div className="flex items-center space-x-2"> 
          <div className="flex items-center space-x-1">
            <span className="text-sm">Show Teams</span> 
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Select Time Period</span> 
            <select className="p-1 bg-gray-700 border-none rounded text-sm"> 
              <option>Period 1</option>
              <option>Period 2</option>
              <option>Period 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4" style={{ height: '300px' }}> 
          <Bar data={teamScoringData} options={chartOptions} />
        </div>

        <div className="mb-4" style={{ height: '300px' }}> 
          <Bar data={scoreSplitData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TeamScoring;
