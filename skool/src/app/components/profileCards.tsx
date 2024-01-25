"use client"

import React from 'react';

interface CardProps {
    banner: string;
    ranking: string;
    profilePicture: string;
    profileName: string;
    description: {
      data: string
      type: string;
      members: string;
      price: string;
    };
  }

const Card: React.FC<CardProps>  = ({ banner, ranking, profilePicture, profileName, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg relative">
      <img className="w-full" src={banner} alt="Card Banner" />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <span className="bg-black bg-opacity-75 text-white py-1 px-3 rounded-full text-sm absolute top-1 left-1">{ranking}</span>
        </div>
        <div className="flex items-center mb-2">
          <img className="w-10 h-10 rounded-full mr-2 mb-4" src={profilePicture} alt="Profile" />
          <div>
            <p className="text-xl font-bold text-custom-black">{profileName}</p>
            <p className="text-gray-600 text-sm">{description.data}</p>
          </div>
        </div>
        <div className="text-sm flex flex-row text-gray-600">
            <p>{description.type}</p>
            <span className="mx-1"> &middot; </span>
            <p>{`${description.members}`}</p>
            <span className="mx-1"> &middot; </span>
            <p>{`${description.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
