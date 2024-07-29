import React, { useState } from 'react';
import vendor1 from '../assets/vendor1-logo.png.png';
import vendor2 from '../assets/vendor2-logo.png.png';
import vendor3 from '../assets/vendor3-logo.png.png';
import vendor4 from '../assets/vendor4-logo.png.png';

const vendors = [
  { name: 'BrightServe Solutions', description: 'Bengaluru, India', logo: vendor1 },
  { name: 'Harmony Hands Services ', description: 'Mysuru, India', logo: vendor2 },
  { name: 'AV Equipments', description: 'Bengaluru, India', logo: vendor3 },
  { name: 'QuickFix Crews', description: 'Bengaluru, India', logo: vendor4 },
  { name: 'BrightServe Solutions', description: 'Mysuru, India', logo: vendor1 },
  { name: 'Harmony Hands Services', description: 'Bengaluru, India2', logo: vendor2 },
  { name: 'AV Equipments ', description: 'Mysuru, India', logo: vendor3 },
  { name: 'QuickFix Crews', description: 'Mysuru, India', logo: vendor4 },
];

const TopVendors = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedVendors = showAll ? vendors : vendors.slice(0, 6);

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold mb-2 italic">TOP VENDORS FOR YOU</h3>
        <button onClick={toggleShowAll} className="text-blue-800 font-semibold italic">
          {showAll ? 'Show Less' : 'See All'}
        </button>
      </div>


      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {displayedVendors.map((vendor, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="bg-white w-full h-32 flex justify-center items-center image-container rounded-lg border border-gray-300 hover:shadow-lg">
              <img src={vendor.logo} alt={vendor.name} className="p-2 object-contain h-full" />
            </div>
            <div className="image-description flex flex-col items-center mt-2 text-center">
              <p className="text-md font-semibold">{vendor.name}</p>
              <p className="text-sm text-gray-600">{vendor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopVendors;
