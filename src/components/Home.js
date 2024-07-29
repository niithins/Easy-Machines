import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './homepage/MainContent';
import RentalPage from '../pages/rental-page/RentalPage';
import PostsPage from '../pages/post-page/PostsPage';
import NewVehicle from '../pages/own-page/newvehicle-page/Newvehicle';
import SecondHand from '../pages/own-page/newvehicle-page/seconhand-page/Secondhand';
import MyList from '../pages/MyList';
import Profile from '../pages/profile/Profile';
import Spares from '../pages/quries-page/Spare';

const Home = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/rental" element={<RentalPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/own/newvehicle" element={<NewVehicle />} />
          <Route path="/own/secondhand" element={<SecondHand />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/queries/spares" element={<Spares/>} />

        </Routes>
      </div>
    </div>
  );
};

export default Home;
