import React from 'react';
import VehicleManufacturers from '../../../components/VehicleManufacturers';

import Crains from '../../own-page/newvehicle-page/Crains';
import Trucks from '../../own-page/newvehicle-page/Truck';
import Searchfilter from './Searchfilter';

const NewVehicle = () => {
  return (
    <div className="p-6 flex-1 overflow-auto">
    
     <Searchfilter/>
      <VehicleManufacturers />
      <Crains/>
      <Trucks/>
    </div> 
  );
};

export default NewVehicle;
