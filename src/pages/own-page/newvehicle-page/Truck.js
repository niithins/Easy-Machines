import React from 'react';
import truck1 from '../../../assets/Truck1.png';
import truck2 from '../../../assets/Truck2.png';
import truck3 from '../../../assets/Truck3.png';
import truck4 from '../../../assets/Truck4.png';
import truck5 from '../../../assets/Truck5.png';
import truck6 from '../../../assets/Truck6.png';

const trucks = [
  { name: 'Demolition Equipment', image: truck1},
  { name: 'Material Handling', image: truck2 },
  { name: 'Agriculture', image: truck3 },
  { name: 'Road and Highway', image: truck4 },
  { name: 'Mining', image: truck5 },
  { name: 'Demolition Equipment', image: truck6 },
];

const Trucks = () => {
  return (
    <section className="mb-6">
       <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold italic mb-2">TRUCKS </h3>
        <button className="text-blue-800 italic font-semibold">See All</button>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {trucks.map((trucks, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={trucks.image} alt={trucks.name} className="object-cover h-35 w-35" />
            <span className="mt-2 text-center font-bold">{trucks.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trucks;
