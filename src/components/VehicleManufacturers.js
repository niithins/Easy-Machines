import React from 'react';
import catLogo from '../assets/cat-logo.png.png';
import jcbLogo from '../assets/jcb-logo.png.png';
import aceLogo from '../assets/ace-logo.png.png';
import mahindraLogo from '../assets/mahindra-logo.png.png';
import komatsuLogo from '../assets/komatsu-logo.png.png';

const manufacturers = [
  { name: 'CAT', logo: catLogo },
  { name: 'JCB', logo: jcbLogo },
  { name: 'ACE', logo: aceLogo },
  { name: 'Mahindra', logo: mahindraLogo },
  { name: 'Komatsu', logo: komatsuLogo },
  { name: 'CAT', logo: catLogo },
];

const VehicleManufacturers = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold italic">VEHICLE MANUFACTURERS</h2>
        <button className="text-blue-800 hover:text-gray-950 italic font-semibold">See All</button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {manufacturers.map((manufacturer, index) => (
          <div key={index} className="bg-gray-200 w-full h-auto max-h-24 flex justify-center items-center">
            <img src={manufacturer.logo} alt={manufacturer.name} className="p-7 object-contain h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleManufacturers;
