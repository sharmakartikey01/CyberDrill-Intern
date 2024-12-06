import React from 'react';

const SidebarButton = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-56 flex items-center p-2 rounded-md transition duration-300 transform 
        ${isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105'
          : 'text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-lg'
        }`}
    >
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default SidebarButton;
