import React, { useState } from 'react';
import{ House, Handshake, Tractor, StickyNote, LayoutList, CircleHelp, CircleUserRound , Phone , Settings ,ChevronDown    } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Sidebar = () => {
  const [isOwnMenuOpen, setIsOwnMenuOpen] = useState(false);
  const [isQueriesMenuOpen, setIsQueriesMenuOpen] = useState(false);

  const toggleOwnMenu = () => {
    setIsOwnMenuOpen(!isOwnMenuOpen);
  };

  const toggleQueriesMenu = () => {
    setIsQueriesMenuOpen(!isQueriesMenuOpen); 
  };

  return (
    <div className="w-full sm:w-64 h-auto md:h-full bg-white shadow-md p-6 flex-shrink-0">
      <div className="mb-8">
        <img src={Logo} alt="logo img" />
      </div>
      <ul className="space-y-6">
        <li>
          <Link to="/" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
            <House className="text-xl" />
            <span className="ml-3 text-[20px]">HOME</span>
          </Link>
        </li>
        <li>
          <Link to="/rental" className="flex items-center text-gray-500 font-semibold hover:text-gray-950"> 
            <Handshake className="text-xl" />
            <span className="ml-3 text-[15px]">RENTAL</span>
          </Link>
        </li>
        <li>
          <div className="text-gray-500 font-semibold hover:text-gray-950 cursor-pointer" onClick={toggleOwnMenu}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Tractor className="text-xl" />
                <span className="ml-3 text-[15px]">OWN</span>
              </div>
              {isOwnMenuOpen ? <ChevronDown  className="text-xl" /> : <ChevronDown  className="text-xl" />}
            </div>
            {isOwnMenuOpen && (
              <ul className="ml-6 mt-2 space-y-4">
                <li>
                  <Link to="/own/newvehicle" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
                    <span className='text-[15px]'>NEW VEHICLE</span>
                  </Link>
                </li>
                <li>
                  <Link to="/own/secondhand" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
                    <span className='text-[15px]'>2ND HAND VEHICLE</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link to="/posts" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
            <StickyNote className="text-xl" />
            <span className="ml-3 text-[15px]">POSTS</span>
          </Link>
        </li>
        <li>
          <Link to="/mylist" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
            <LayoutList className="text-xl" />
            <span className="ml-3 text-[15px]">MY LIST</span>
          </Link>
        </li>
        <li>
          <div className="text-gray-500 font-semibold hover:text-gray-950" onClick={toggleQueriesMenu}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CircleHelp className="text-xl" />
                <span className="ml-3 text-[15px]">QUERIES</span>
              </div>
              {isQueriesMenuOpen ? <ChevronDown  className="text-xl" /> : <ChevronDown  className="text-xl" />}
            </div>
            {isQueriesMenuOpen && (
              <ul className="ml-6 mt-2 space-y-4">
                <li>
                  <Link to="/queries/equipments" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
                    <span className='text-[15px]'>EQUIPMENTS</span>
                  </Link>
                </li>
                <li>
                  <Link to="/queries/spares" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
                    <span className='text-[15px]'>SPARE</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link to="/profile" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
            <CircleUserRound className="text-xl" />
            <span className="ml-3 text-[15px]">PROFILE</span>
          </Link>
        </li>
      </ul>
       
      <div className="mt-32">
      
        <ul className=" space-y-6">
          <li>
          
            <Link to="#" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
              <Phone  className="text-xl" />
              <span className="ml-3 text-[15px]">CONTACT US</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-500 font-semibold hover:text-gray-950">
              <Settings  className="text-xl" />
              <span className="ml-3 text-[15px]">SETTINGS</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex items-center">
        <img src={Logo} alt="User" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="text-gray-700">JCB</p>
          <p className="text-sm text-gray-500">contact@jcb.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;