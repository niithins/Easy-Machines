import React from 'react';
import usedVehicle1 from '../../../assets/used-vehicle1.png.png';
import usedVehicle2 from '../../../assets/used-vehicle2.png.png';
import usedVehicle3 from '../../../assets/used-vehicle3.png.png';

const crains = [
  { name: 'Demolition Equipment', image: usedVehicle1 },
  { name: 'Material Handling', image: usedVehicle2 },
  { name: 'Agriculture', image: usedVehicle3 },
  { name: 'Road and Highway', image: usedVehicle1 },
  { name: 'Mining', image: usedVehicle2 },
  { name: 'Demolition Equipment', image: usedVehicle3 },
];

const Crains = () => {
  return (
    <section className="mb-6">
       <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold italic mb-2">Crains </h3>
        <button className="text-blue-800 italic font-semibold">See All</button>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {crains.map((vehicle, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={vehicle.image} alt={vehicle.name} className="object-cover h-35 w-35" />
            <span className="mt-2 text-center font-bold">{vehicle.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crains;
