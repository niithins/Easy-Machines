import React from 'react';
import TopVendors from '../../components/TopVendors';
import CategoryList from './Topcategories';
import Equipment from './Topequipment';
import SearchBar from './SearchBar';

const RentalPage = () => {
  return (
    <div className="p-6 flex-1 overflow-auto mt-6">
      <SearchBar />
      <TopVendors />
      <CategoryList />
      <Equipment />
    </div>
  );
};
 
export default RentalPage;
 