import React from 'react';

import Crains from '../pages/own-page/newvehicle-page/Crains';
import Trucks from '../pages/own-page/newvehicle-page/Truck';

const MyList = () => {
  return (
    <div className="p-6 flex-1 overflow-auto">
    

      <Crains/>
      <Trucks/>
    </div>
  );
};

export default MyList;
