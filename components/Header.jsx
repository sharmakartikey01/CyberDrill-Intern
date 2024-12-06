"use client";
import React, { useState } from 'react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <header className="w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-md px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-100 hover:text-yellow-300 transition duration-300">
          Cyber Drill
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleFullscreen}
            className="flex items-center text-gray-100 bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-600 transition-all duration-200 shadow-sm"
            title={isFullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}
          >
            {isFullscreen ? <FiMinimize /> : <FiMaximize />}
            <span className="ml-1 text-sm">Fullscreen</span>
          </button>
          <span className="text-base text-gray-300">
            Welcome back, Client!
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
