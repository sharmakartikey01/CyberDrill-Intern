"use client"
import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <div className="flex items-center bg-gray-800 p-2 rounded shadow-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 outline-none flex-grow"
      />
      <button
        onClick={() => onSearch(query)}
        className="text-white ml-2 p-2 bg-purple-600 rounded hover:bg-purple-500 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
