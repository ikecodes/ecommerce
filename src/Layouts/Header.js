import React from 'react';
import { FaStore, FaUser, FaHeart, FaCartPlus, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=' flex  items-center justify-around p-3 flex-wrap bg-[#3EC1F9]'>
      <h4 className='inline uppercase text-white'>Logo</h4>

      <div className='flex'>
        <div className='flex items-center bg-white rounded-3xl p-2 max-w-full '>
          <FaSearch color='gray' />
          <input
            type='text'
            name='Search'
            placeholder='Search Product'
            className='w-full focus:border-none focus:outline-none pl-3'
          />
        </div>
        <button className='flex items-center bg-white rounded-xl font-bold p-2 ml-2 text-sm text-[#3EC1F9]'>
          <FaStore />
          <span className='ml-2'> Store Locator</span>
        </button>
      </div>

      <div className='flex items-center divide-x mt-2 md:mt-0'>
        <div className='flex items-center text-white text-sm p-2'>
          <FaUser />
          <span className='pl-2'>Sign In</span>
        </div>
        <div className='flex items-center text-white text-sm p-2'>
          <FaHeart />
          <span className='pl-2'>2</span>
        </div>
        <div className='flex items-center text-white text-sm p-2'>
          <FaCartPlus />
          <span className='pl-2'>4</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
