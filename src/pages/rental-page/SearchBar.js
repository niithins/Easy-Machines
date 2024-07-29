import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import Popup from './Popup';
import axios from 'axios';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [content, setContent] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setContent(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSearch = () => {
    const result = content.find(item => item.id.toString() === searchQuery);
    if (result) {
      setSelectedContent(result);
      setShowPopup(true);
    } else {
      console.log("No results found");
      setShowPopup(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mb-7">
        <div className="flex items-center bg-gray-100 rounded-full p-2 px-12">
          <FiSend className="text-gray-500 mr-2 cursor-pointer" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Select & Rent"
            className="bg-transparent outline-none"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="relative">
          <div className="bg-gray-100 rounded-full p-2">
            <AiOutlineMail className="text-black" />
          </div>
          <div className="absolute top-0 right-0 h-3 w-3 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
      {showPopup && selectedContent && (
        <Popup details={selectedContent} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default SearchBar;
