import React from 'react';
import spareManufacturerLogo from '../assets/spare-manufacturer-logo.png.png';

const SpareManufacturers = () => {
  return (
    <section className="mb-6">
       <div className="flex justify-between items-center mb-4">
       <h3 className="text-md font-semibold mb-2 italic">SPARE MANUFACTURERS</h3>
        <button className="text-blue-800 hover:text-gray-950 italic font-semibold">See All</button>
      </div>
    
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-200 w-full h-auto max-h-24 flex justify-center items-center">
            <img src={spareManufacturerLogo} alt={`Spare Manufacturer ${index + 1}`} className="p-7 object-contain h-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpareManufacturers;
