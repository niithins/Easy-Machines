import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchfilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Perform search logic here without API calls
    // For example, you can filter local data or trigger another action
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mb-7">
      <div className="flex items-center bg-gray-100 rounded-full p-2 px-12">
        <FiSearch className="text-gray-500 mr-2 cursor-pointer" onClick={handleSearch} />
        <input
          type="text"
          placeholder=" Find your vehicle"
          className="bg-transparent outline-none"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Searchfilter;
