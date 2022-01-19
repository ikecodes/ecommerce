import React from 'react';
import { FaStore } from 'react-icons/fa';

const StoreLocatorBtn = ({ handleShowLocator }) => {
  return (
    <button
      onClick={handleShowLocator}
      className='flex items-center order-2 sm:order-2 bg-white rounded-2xl font-bold p-2 lg:-ml-20 text-sm text-[#3EC1F9]'
    >
      <FaStore />
      <span className='ml-2'>Store Locator</span>
    </button>
  );
};

export default StoreLocatorBtn;
