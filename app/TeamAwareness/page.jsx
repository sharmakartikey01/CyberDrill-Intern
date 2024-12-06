import React from 'react';
import BarChart from './ui/BarChart'        

const DashboardPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-gray-700 to-purple-700 p-8 shadow-lg">
   
      <div className="p-8">
        <BarChart />
      </div>
    </div>
  );
};

export default DashboardPage;