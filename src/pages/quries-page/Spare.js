import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = ({ userid, id, title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-2 w-80">
      <div className="flex items-center">
        <div className="ml-4">
          <h2 className="text-xl font-semibold">User ID: {userid}</h2>
          <p className="text-gray-600">ID: {id}</p>
          <h3 className="text-lg font-medium mt-2">{title}</h3>
          <p className="text-gray-600 mt-2">{body}</p>
        </div>
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setProfiles(data.slice(0, 8)); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} userid={profile.userId} />
      ))}
    </div>
  );
};

export default ProfileGrid;
