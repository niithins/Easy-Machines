import React from 'react';
import ProfilePic from '../../assets/cat-logo.png.png'; 
import PostImage from '../../assets/used-vehicle1.png.png'; 


const ProfileContent = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        
      {/* Profile Header */}
      <div className="flex items-center mb-4">
        <img src={ProfilePic} alt="Profile" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">JCB</h2>
          <p className="text-gray-500">Manufacturer</p>
          <button className="mt-2 text-sm text-blue-500 border border-blue-500 rounded-full px-3 py-1">EDIT</button>
        </div>
      </div>

      {/* Bio and Stats */}
      <div className="text-center mb-4">
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur. Viverra fusce consectetur eu congue proin.</p>
        <div className="flex justify-center space-x-8">
          <div>
            <span className="font-bold text-lg">356</span>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <span className="font-bold text-lg">2</span>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
      </div>

      {/* Recent Posts Thumbnails */}
      <div className="flex justify-center space-x-2 mb-4">
        <img src={PostImage} alt="Post" className="w-20 h-20 rounded-lg" />
        <img src={PostImage} alt="Post" className="w-20 h-20 rounded-lg" />
        <img src={PostImage} alt="Post" className="w-20 h-20 rounded-lg" />
      </div>

      {/* Posts */}
      <div className="border-t border-gray-200 pt-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={ProfilePic} alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <h3 className="text-sm font-semibold">JCB</h3>
                  <p className="text-gray-500 text-sm">Manufacturer</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs">{index === 0 ? '24 minutes ago' : '1 day ago'}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{index === 0 ? "We're excited to announce the launch of our newest heavy equipment lineup" : 'Breaking Ground: Our Latest Heavy Equipment Models Unveiled'}</p>
            <img src={PostImage} alt="Heavy Equipment" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between items-center text-gray-500">
              <div className="flex items-center space-x-2">
                <button className="flex items-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 8.828a4 4 0 015.656-5.656L10 4.343l1.172-1.171a4 4 0 015.656 5.656L10 15.657 3.172 8.828zM10 14l6-6a2 2 0 00-2.828-2.828L10 8.343 6.828 5.172A2 2 0 004 7.828l6 6z" />
                  </svg>
                  <span className="ml-1">{index === 0 ? '410' : '54'}</span>
                </button>
                <button className="flex items-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.5 3a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15zm0 5a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15zm0 5a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15z" />
                  </svg>
                  <span className="ml-1">{index === 0 ? '69' : '9'}</span>
                </button>
              </div>
              <button className="flex items-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 00-2.824 2H6.171a3 3 0 00-.128-1H10a3 3 0 000-2H5.935a3 3 0 00-2.71-1.824A3 3 0 0010 8h5a3 3 0 00.824-2H4.172a3 3 0 00.128 1H10a3 3 0 000 2H5.935a3 3 0 002.71 1.824A3 3 0 0010 14h-5a3 3 0 00.824 2H10a3 3 0 000-2H4.172a3 3 0 00-.128 1H10a3 3 0 00-.824-2H6.171a3 3 0 00.128 1H15a3 3 0 002.824 2H6.171a3 3 0 00-.128 1H15a3 3 0 002.824-2H6.171a3 3 0 00.128-1H15a3 3 0 00-.824-2H6.171a3 3 0 00.128 1H15a3 3 0 00-2.824-2H6.171a3 3 0 00-.128-1H10a3 3 0 000-2H5.935a3 3 0 00-2.71-1.824A3 3 0 0010 8h5z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;
