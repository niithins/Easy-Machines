import React from 'react';
import demolitionIcon from '../../assets/demolition-icon.png.png';
import materialHandlingIcon from '../../assets/material-handling-icon.png.png';
import agricultureIcon from '../../assets/agriculture-icon.png.png';
import roadHighwayIcon from '../../assets/road-highway-icon.png.png';
import miningIcon from '../../assets/mining-icon.png.png';


const categoryList = [
    { name: 'Demolition Equipment', icon: demolitionIcon },
    { name: 'Material Handling', icon: materialHandlingIcon },
    { name: 'Agriculture', icon: agricultureIcon },
    { name: 'Road and Highway', icon: roadHighwayIcon },
    { name: 'Mining', icon: miningIcon },
    { name: 'Material Handling', icon: materialHandlingIcon },
  ];
  


const Topcategories = () => {
  return (
    <section className="mb-6">   
    <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold italic mb-2 "> Top Categories</h3>
     <button className="text-blue-800 italic font-semibold">See All</button>
   </div>
  
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {categoryList.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.icon} alt={category.name} className="p-5 object-cover max-h-20" />
            <span className="mt-2 text-center font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topcategories;
