"use client"

import React, { useState } from 'react';

const ButtonComponent = () => {
  const initialButtons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];
  const [buttons, setButtons] = useState(initialButtons);
  const [showMore, setShowMore] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const handleMoreClick = () => {
    setShowMore(!showMore);
    setShowLess(true);
    setShowMoreButton(false);
    setShowFilter(false); // Close filter when 'More' is clicked
  };

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleLessClick = () => {
    setShowLess(!showLess);
    setShowMore(false);
    setShowFilter(false);
    setShowMoreButton(true);
  };

  const handleFilterOptionClick = (option: string) => {
    // Handle filter options selection here
    console.log('Selected filter option:', option);
  };

  return (
    <div>
      <div className="flex space-x-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
          >
            {button}
          </button>
        ))}
        {showMoreButton && (
          <button
            className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
            onClick={handleMoreClick}
          >
            More
          </button>
        )}
        {!showMoreButton && (
            <button
            className='rounded-full bg-white text-custom-black px-3 py-1 text-sm'>
                button 6
            </button>
        )}
        <div className='relative'>
        <button
          className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
          onClick={handleFilterClick}
        >
          Filter
                {showFilter && (
            <div className="absolute top-full left-0 mt-2 p-4 z-10 bg-white border rounded-lg shadow text-custom-black flex flex-row">
            <div>
            <label className="font-bold">Type</label>
            <div className="flex flex-col p-2">
                <div className="flex items-center mr-4">
                <input
                    type="radio"
                    id="allType"
                    name="type"
                    value="all"
                    onChange={() => handleFilterOptionClick('all')}
                    defaultChecked
                />
                <label htmlFor="allType" className="ml-2">
                    All
                </label>
                </div>
                <div className="flex items-center mr-4">
                <input
                    type="radio"
                    id="publicType"
                    name="type"
                    value="public"
                    onChange={() => handleFilterOptionClick('public')}
                />
                <label htmlFor="publicType" className="ml-2">
                    Public
                </label>
                </div>
                <div className="flex items-center">
                <input
                    type="radio"
                    id="privateType"
                    name="type"
                    value="private"
                    onChange={() => handleFilterOptionClick('private')}
                />
                <label htmlFor="privateType" className="ml-2">
                    Private
                </label>
                </div>
            </div>
            </div>

            <div className=" border-l  border-custom-black">
            <label className='font-bold'>Price</label>
            <div className="flex flex-col p-2">
                <div className="flex items-center mr-4">
                <input
                    type="radio"
                    id="allPrice"
                    name="price"
                    value="all"
                    onChange={() => handleFilterOptionClick('all')}
                    defaultChecked
                />
                <label htmlFor="allPrice" className="ml-2">
                    All
                </label>
                </div>
                <div className="flex items-center mr-4">
                <input
                    type="radio"
                    id="freePrice"
                    name="price"
                    value="free"
                    onChange={() => handleFilterOptionClick('free')}
                />
                <label htmlFor="freePrice" className="ml-2">
                    Free
                </label>
                </div>
                <div className="flex items-center">
                <input
                    type="radio"
                    id="paidPrice"
                    name="price"
                    value="paid"
                    onChange={() => handleFilterOptionClick('paid')}
                />
                <label htmlFor="paidPrice" className="ml-2">
                    Paid
                </label>
                </div>
            </div>
            </div>
        </div>
        )}
        </button>
      </div>
      </div>
      <div className="flex space-x-2">
        {showMore && (
          <div className="flex space-x-2 mt-2">
            {/* Additional rows of buttons */}
            {/* You can dynamically generate these based on your content */}
            <button
              className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
            >
              More 1
            </button>
            <button
              className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
            >
              More 2
            </button>
            {/* Add more buttons as needed */}
          </div>
        )}

        {showLess && (
          <div className="flex space-x-2 mt-2">
            <button
              className="rounded-full bg-white text-custom-black px-3 py-1 text-sm"
              onClick={handleLessClick}
            >
              Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonComponent;
