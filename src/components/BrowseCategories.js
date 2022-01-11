import React from 'react';

const BrowseCategories = ({ icon, title }) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='rounded-full p-10 border-2 border-[#3EC1F9]'>{icon}</div>
      <span className='font-bold text-md mt-2 text-[#000000DE]'>{title}</span>
    </div>
  );
};

export default BrowseCategories;
