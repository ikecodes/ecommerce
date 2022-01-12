import React from 'react';

const StoreLocation = ({ icon, name, location, distance }) => {
  return (
    <div className='justify-between rounded p-2 bg-[#FAFAFA] flex items-center flex-wrap space-y-4'>
      <div className='flex items-center space-x-2 mb-2'>
        <div className='bg-[#70707080] rounded-full p-2 ml-3'>{icon}</div>
        <div className='text-capitalize  space-y-3'>
          <h4 className=' font-semibold p-0'>{name}</h4>
          <p className='m-0'>{location}</p>
          <span className='text-gray-500'>{distance}</span>
        </div>
      </div>

      <div>
        <span className='text-gray-500'>working hours</span>
        <h4 className='text-md font-semibold p-0'>monday - friday, 8am-5pm</h4>
      </div>
      <div>
        <span className='text-gray-500'>phone number</span>
        <h4 className='text-md font-semibold p-0'>08096969696</h4>
      </div>

      <div className='flex justify-end'>
        <button className='bg-[#3EC1F9] text-white p-1 rounded mt-2'>
          start shopping
        </button>
      </div>
    </div>
  );
};

export default StoreLocation;
