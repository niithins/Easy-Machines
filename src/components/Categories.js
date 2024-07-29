import React from 'react';
import demolitionIcon from '../assets/demolition-icon.png.png';
import materialHandlingIcon from '../assets/material-handling-icon.png.png';
import agricultureIcon from '../assets/agriculture-icon.png.png';
import roadHighwayIcon from '../assets/road-highway-icon.png.png';
import miningIcon from '../assets/mining-icon.png.png';

const categories = [
  { name: 'Demolition Equipment', icon: demolitionIcon },
  { name: 'Material Handling', icon: materialHandlingIcon },
  { name: 'Agriculture', icon: agricultureIcon },
  { name: 'Road and Highway', icon: roadHighwayIcon },
  { name: 'Mining', icon: miningIcon },
  { name: 'Construction', icon: demolitionIcon },
];

const Categories = () => {
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
            <div className="flex flex-col items-center p-5 rounded-md transition-colors duration-200 hover:bg-gray-100">
              <img 
                src={category.icon} 
                alt={category.name} 
                className="object-cover max-h-20 rounded-md"
              />
              <div className="mt-6 text-center flex justify-center font-bold align-bottom items-center w-full h-12">
                <span className="inline-block">{category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
