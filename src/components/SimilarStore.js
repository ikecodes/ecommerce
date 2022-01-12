import React from 'react';

const SimilarStore = ({ icon, name, location, distance }) => {
  return (
    <div className='border-2 border-gray-300 rounded-xl p-1 bg-[#FAFAFA] divide-y space-y-2 divide-gray-300'>
      <div className='flex items-center space-x-2 mb-2'>
        <div className='bg-[#70707080] rounded-full p-2'>{icon}</div>
        <div className='text-capitalize text-xs space-y-3'>
          <h4 className=' font-semibold p-0'>{name}</h4>
          <p className='m-0'>{location}</p>
          <span className='text-gray-500'>{distance}</span>
        </div>
      </div>
      <div>
        <div className='flex items-center text-xs space-x-4 justify-between'>
          <div>
            <span className='text-gray-500'>working hours</span>
            <h4 className='text-md font-semibold p-0'>
              monday - friday, 8am-5pm
            </h4>
          </div>
          <div>
            <span className='text-gray-500'>phone number</span>
            <h4 className='text-md font-semibold p-0'>08096969696</h4>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='bg-[#3EC1F9] text-white text-xs p-1 rounded mt-2'>
            start shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarStore;
