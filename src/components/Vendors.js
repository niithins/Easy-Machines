import React from 'react';
import usedVehicle1 from '../assets/used-vehicle1.png.png';
import usedVehicle2 from '../assets/used-vehicle2.png.png';
import usedVehicle3 from '../assets/used-vehicle3.png.png';

const usedVehicles = [
  { name: 'Wheel-Loaders 433-4', image: usedVehicle1 },
  { name: 'JCB- Fork lifter M-8238', image: usedVehicle2 },
  { name: 'JCB- Fork lifter M-8238', image: usedVehicle3 },
  { name: 'Wheel-Loaders 433-4', image: usedVehicle1 },
  { name: 'JCB- Fork lifter M-8238', image: usedVehicle2 },
  { name: 'JCB- Fork lifter M-8238', image: usedVehicle3 },
];

const Vendors = () => {
  return (
    <section className="mb-6">
         <div className="flex justify-between items-center mb-4">
       
      <h3 className="text-md font-semibold mb-2 italic"> TOP VENDORS</h3>
        <button className="text-blue-800 hover:text-gray-950 italic font-semibold">See All</button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {usedVehicles.map((vehicle, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={vehicle.image} alt={vehicle.name} className="object-cover h-35 w-35" />
            <span className="mt-2 text-center font-bold max-w-36">{vehicle.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vendors;
