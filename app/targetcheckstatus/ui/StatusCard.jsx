import React from 'react'

// StatusCard Component (Represents each target group)
const StatusCard = ({ groupName, checks }) => {
    return (
      <div className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h2 className="font-semibold mb-2">{groupName}</h2>
        {checks.map((check, index) => (
          <StatusCheck key={index} service={check.service} status={check.status} />
        ))}
      </div>
    );
  };
  
  // StatusCheck Component (Represents each individual service check)
  const StatusCheck = ({ service, status }) => {
    // Status icon logic (green for pass, yellow for warning, red for fail)
    const statusColor =
      status === 'pass' ? 'text-green-500' : status === 'fail' ? 'text-red-500' : 'text-yellow-500';
  
    return (
      <div className="flex justify-between items-center my-1">
        <span>{service}</span>
        <span className={statusColor}>
          {status === 'pass' && '✔'}
          {status === 'fail' && '✖'}
          {status === 'warning' && '⚠'}
        </span>
      </div>
    );
  };

export default StatusCard;