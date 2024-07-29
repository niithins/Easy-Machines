import React from 'react';

const Popup = ({ details, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 shadow-md w-2/5 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div>
              <p className="font-bold text-lg">User ID: {details.userId}</p>
              <p className="text-gray-500">ID: {details.id}</p>
              <p className="text-gray-500">Title: {details.title}</p>
              <p className="text-gray-500">Body: {details.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
