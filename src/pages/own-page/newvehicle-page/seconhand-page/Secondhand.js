
import React from 'react';
import SearchBar from '../../../../pages/rental-page/SearchBar';
import Crains from '../../../own-page/newvehicle-page/Crains';
import Trucks from '../../../own-page/newvehicle-page/Truck';
import Dozers from '../../../own-page/newvehicle-page/Dozers';



const Secondhand = () => {
  return (
    <div className="p-6 flex-1 overflow-auto">

      <SearchBar/>
      <Trucks/>
      <Crains/>
      <Dozers/>
   
    </div>
  );
};

export default Secondhand;
