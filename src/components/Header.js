import React from 'react';
import { Bot, CircleAlert } from 'lucide-react';
import '../../src/index.css'; // Ensure this path correctly points to your CSS file

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="text-center md:text-left">
        <h1 className="text-lg font-semibold">Bengaluru</h1>
        <p className="text-sm text-gray-600">1865, 4th Floor, 5th Cross...</p>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0 mr-16">
        <div className="gradient-border">
          <button className="inner-button flex items-center space-x-2 text-black font-bold text-lg hover:bg-gray-100">
            <Bot className="w-6 h-6" />
            <span>CHATBOT</span>
          </button>
        </div>
        <button className="px-5 py-2 flex items-center bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500">
          <CircleAlert className="mr-2" />
          8 Alerts
        </button>
      </div>
    </div>
  );
};

export default Header;
