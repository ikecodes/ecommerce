import React from 'react';

const Discount = ({ title, image, discount, customer, description }) => {
  return (
    <div>
      <div className='relative h-[50vh]'>
        <img
          src={image}
          alt='discount banner'
          className='w-full h-full object-cover'
        />
        <div className='absolute w-full h-full top-0 bg-[rgb(0,0,0,0.5)]'></div>
        <div className='capitalize text-white space-y-2 absolute top-[50%] left-10 translate-y-[-50%]'>
          <h1 className='font-semibold'>{title}</h1>
          <h1>{discount} flate</h1>
          <h1 className='text-[#3EC1F9]'>{customer}</h1>
          {description && <p className='text-xs w-3/4'>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Discount;
