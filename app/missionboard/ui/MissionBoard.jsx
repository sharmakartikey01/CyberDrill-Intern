'use client'
import React, { useState } from 'react'

const rowsData = [
  { points: "50 pts", title: "Social Engineering 1", teamSolved: "14/14", status: "SOLVED" },
  { points: "75 pts", title: "Cybersecurity 2", teamSolved: "12/15", status: "IN PROGRESS" },
  { points: "90 pts", title: "Data Breach 3", teamSolved: "8/10", status: "SOLVED" },
  { points: "40 pts", title: "Password Cracking", teamSolved: "7/14", status: "NOT STARTED" },
  { points: "100 pts", title: "Phishing Attack", teamSolved: "14/14", status: "SOLVED" },
];

const MissionBoard = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className="w-full px-4 sm:px-6 py-2">
      <section className="text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-1">Missions</h2>
        <p className="text-lg sm:text-xl font-medium">88% Solved</p>
      </section>

      <div className="space-y-4 sm:space-y-8">
        {rowsData.map((row, index) => (
          <Row 
            key={index} 
            points={row.points} 
            title={row.title} 
            teamSolved={row.teamSolved} 
            status={row.status} 
          />
        ))}
      </div>
    </main>
  );
};

export default MissionBoard;

const Row = ({ points, title, teamSolved, status }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-7 bg-gray-200 p-2 sm:p-4 rounded-lg">
      <div className="bg-blue-100 p-4 text-center rounded shadow transition-transform duration-300 hover:scale-105 hover:bg-blue-200 flex justify-center items-center">
        <h3 className="font-bold text-sm sm:text-base">{points}</h3>
      </div>

      <div className="bg-green-100 p-4 text-center rounded shadow transition-transform duration-300 hover:scale-105 hover:bg-green-200 flex justify-center items-center">
        <h3 className="font-bold text-sm sm:text-base">{title}</h3>
      </div>

      <div className="bg-yellow-100 p-4 text-center rounded shadow transition-transform duration-300 hover:scale-105 hover:bg-yellow-200">
        <h3 className="font-bold text-sm sm:text-base">Team Solved</h3>
        <p className="text-sm sm:text-base">{teamSolved}</p>
      </div>

      <div className={`p-4 text-center rounded shadow transition-transform duration-300 hover:scale-105 flex justify-center items-center text-sm sm:text-base ${
        status === 'SOLVED' ? 'bg-red-100 hover:bg-red-200' : 'bg-gray-100 hover:bg-gray-200'
      }`}>
        <h1 className="font-bold">{status}</h1>
      </div>
    </div>
  );
};
