// pages/index.jsx

import React from 'react';
import IncidentReportTable from './ui/IncidentReportTable'

const Home = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-900">
      <div className="w-full max-w-6xl p-4">
        <h1 className="text-2xl font-bold text-white mb-2">Incident Reports</h1>
        <IncidentReportTable />
      </div>
    </div>
  );
};

export default Home;
