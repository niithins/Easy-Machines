import React from 'react';
import Engine from '../assets/Frame01.png';
import Tyres from '../assets/Frame02.png';
import HydraulicSystemParts from '../assets/Frame03.png';
import UndercarriageParts from '../assets/Frame04.png';
import CoolingSystemParts from '../assets/Frame05.png';
import ElectricalComponents from '../assets/Frame06.png';

const categories = [
  { name: 'Engine Components', icon: Engine },
  { name: 'Tyres', icon: Tyres },
  { name: 'Hydraulic System Parts', icon: HydraulicSystemParts },
  { name: 'Undercarriage Parts', icon: UndercarriageParts },
  { name: 'Cooling System Parts', icon: CoolingSystemParts },
  { name: 'Electrical Components', icon: ElectricalComponents },
];

const SpareCategories = () => {
  return (
    <section className="mb-6">   
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold mb-2 italic">CATEGORIES</h3>
        <button className="text-blue-800 hover:text-gray-950 font-semibold italic">See All</button>
      </div>
  
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col items-center p-5 rounded-md transition-all duration-200 hover:bg-gray-100">
              <img 
                src={category.icon} 
                alt={category.name} 
                className="object-cover max-h-20 rounded-md"
              />
              <div className="mt-3 text-center font-bold">
                <span className="inline-block">{category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpareCategories;
