import React from 'react'

// FilterBar Component
const FilterBar = () => {
    return (
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <h1 className="text-xl text-gray-800">TARGET CHECKS STATUS</h1>
        <div className="flex space-x-4">
          <select className="bg-gray-200 p-2 text-gray-800 rounded">
            <option>Team BT-14</option>
          </select>
          <select className="bg-gray-200 p-2 text-gray-800 rounded">
            <option>Network Segment</option>
          </select>
          <select className="bg-gray-200 p-2 text-gray-800 rounded">
            <option>Target Check Status</option>
          </select>
          <select className="bg-gray-200 p-2 text-gray-800 rounded">
            <option>User</option>
          </select>
        </div>
        <p className="text-gray-600">Last Updated: 10.10.2024 </p>
      </div>
    );
  };

export default FilterBar