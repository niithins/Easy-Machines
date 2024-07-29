import React from 'react';
import Img from '../../assets/used-vehicle1.png.png'

const Posts = () => {
  const comments = [
    {
      id: 1,
      name: 'Monish',
      role: 'Customer',
      content: 'Lorem ipsum dolor sit amet consectetur. Nunc lorem quam malesuada rutrum blandit ut a in.',
      time: '24 minutes ago',
      avatar: ""
    },
    {
      id: 2,
      name: 'Rohan',
      role: 'Customer',
      content: 'Lorem ipsum dolor sit amet consectetur. Amet morbi et tortor justo enim nisl interdum augue.',
      time: '24 minutes ago',
      avatar: 'https://your-avatar-url-here2' 
    }
  ];

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={Img} 
          alt="Profile"
        />
        <div className="ml-3">
          <div className="flex items-center">
            <span className="font-semibold">JCB</span>
            <span className="ml-2 text-gray-500">Manufacturer</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold">
          We're excited to announce the launch of our newest heavy equipment lineup
        </p>
        <img
          className="mt-4 w-full h-64 object-cover"
          src={Img}
          alt="Heavy Equipment"
        />
        <div className="mt-2 text-gray-500 text-sm">
          <span>24 minutes ago</span>
        </div>
        <div className="mt-4 flex items-center">
          <button className="flex items-center text-gray-500 mr-4">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 8.828a4 4 0 015.656-5.656L10 4.343l1.172-1.171a4 4 0 015.656 5.656L10 15.657 3.172 8.828zM10 14l6-6a2 2 0 00-2.828-2.828L10 8.343 6.828 5.172A2 2 0 004 7.828l6 6z" />
            </svg>
            410
          </button>
          <button className="flex items-center text-gray-500 mr-4">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.5 3a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15zm0 5a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15zm0 5a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15z" />
            </svg>
            69
          </button>
          <button className="flex items-center text-gray-500">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M15 8a3 3 0 00-2.824 2H6.171a3 3 0 00-.128-1H10a3 3 0 000-2H5.935a3 3 0 00-2.71-1.824A3 3 0 0010 8h5a3 3 0 00.824-2H4.172a3 3 0 00.128 1H10a3 3 0 000 2H5.935a3 3 0 002.71 1.824A3 3 0 0010 14h-5a3 3 0 00.824 2H10a3 3 0 000-2H4.172a3 3 0 00-.128 1H10a3 3 0 00-.824-2H6.171a3 3 0 00.128 1H15a3 3 0 002.824 2H6.171a3 3 0 00-.128 1H15a3 3 0 002.824-2H6.171a3 3 0 00.128-1H15a3 3 0 00-.824-2H6.171a3 3 0 00.128 1H15a3 3 0 00-2.824-2H6.171a3 3 0 00-.128-1H10a3 3 0 000-2H5.935a3 3 0 00-2.71-1.824A3 3 0 0010 8h5z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300 p-4">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Post your reply"
            className="flex-grow p-2 border border-gray-300 rounded-full"
          />
          <button className="ml-2 p-2 bg-yellow-400 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 10a1 1 0 011-1h8.586L11.293 5.707a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H6a1 1 0 01-1-1z" />
            </svg>
          </button>
        </div>
        {comments.map(comment => (
          <div key={comment.id} className="flex items-start mb-4">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center">
                <span className="font-semibold">{comment.name}</span>
                <span className="ml-2 text-gray-500">{comment.role}</span>
              </div>
              <p className="mt-1 text-gray-700">{comment.content}</p>
              <span className="mt-1 text-gray-500 text-sm">{comment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
