import React from 'react';

const NewsLetter = () => {
  return (
    <div
      className='bg-black mt-10 p-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center 
    items-center sm:space-y-5'
    >
      <p className='text-white lg:justify-self-end capitalize text-center md:w-3/4 mt-4'>
        subscribe to our newsletter to stay up to date with our latest news and
        product
      </p>
      <div className='my-4 lg:my-0'>
        <input
          type='email'
          className='rounded p-2 mr-2 w-40  md:w-72 focus:outline-none'
          placeholder='Enter email'
        />
        <button className='bg-[#3EC1F9] rounded capitalize focus:outline-none text-white p-2'>
          subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
