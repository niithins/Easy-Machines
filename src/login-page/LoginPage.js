import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../src/assets/background.png';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSkip = () => {
    onLogin();
    navigate('/');
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section (Background Image) */}
      <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex items-end justify-center h-full">
          <div className="text-center text-white mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Explore, Own, Rent!</h1>
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur. Nulla condimentum blandit sit enim diam. Ante.</p>
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8 relative">
        <button className="absolute top-4 right-4 bg-white text-black p-2 rounded" onClick={handleSkip}>Skip</button>
        <h2 className="w-full lg:w-2/3 text-2xl lg:text-4xl text-center font-bold mb-9">Discover Equipment, Connect Directly, Enjoy Savings</h2>
        <button className="w-full lg:w-2/3 bg-yellow-500 mb-4 p-2 lg:px-4 border rounded-3xl">LOGIN</button>
        <button className="w-full lg:w-2/3 bg-yellow-500 mb-4 p-2 lg:px-4 border rounded-3xl">CREATE AN ACCOUNT</button>
        <h6 className="text-gray-400 text-xs lg:text-sm mb-4">By continuing, you agree to T&C & privacy policy</h6>
      </div>
    </div>
  );
};

export default LoginPage;
