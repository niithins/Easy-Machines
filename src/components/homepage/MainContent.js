// MainContent.js
import React from 'react';
import HeroSection from '../HeroSection';
import VehicleManufacturers from '../VehicleManufacturers';
import Categories from '../Categories';
import TopVendors from '../TopVendors';
import SpareManufacturers from '../SpareManufacturers';
import UsedVehicles from '../UsedVehicles';
import Vendors from '../Vendors';
import SpareCategories from '../SpareCategories';

const MainContent = () => {
  return (
    <div className="p-6 w-auto flex-1 overflow-auto">
      <HeroSection />
      <VehicleManufacturers />
      <Categories />
      <HeroSection />
      <TopVendors />
      <SpareManufacturers />
      <SpareCategories/>
      <HeroSection />
      <Vendors/>
      <UsedVehicles />
    </div>
  );
};

export default MainContent;
