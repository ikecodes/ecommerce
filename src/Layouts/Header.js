import React from 'react';
import { FaStore, FaUser, FaHeart, FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo-placeholder.jpg';
const Header = () => {
  return (
    <div>
      <div className=' flex  items-center justify-around p-3 flex-wrap bg-[#3EC1F9]'>
        <img src={LogoImage} alt='logo' className='my-2 md:my-0 h-24' />

        <div className='flex items-center bg-white rounded-3xl p-2 basis-1/2 '>
          <FaSearch color='gray' />
          <input
            type='text'
            name='Search'
            placeholder='Search Product'
            className='w-full focus:border-none focus:outline-none pl-3'
          />
        </div>
        <Link to='/locator'>
          <button className='flex items-center bg-white rounded-xl font-bold p-2 ml-2 text-sm text-[#3EC1F9]'>
            <FaStore />
            <span className='ml-2'> Store Locator</span>
          </button>
        </Link>

        <div className='flex items-center divide-x mt-2 md:mt-0'>
          <div className='flex items-center text-white text-sm p-2'>
            <FaUser />
            <span className='pl-2'>Sign In</span>
          </div>
          <Link to='/favorites'>
            <div className='flex items-center text-white text-sm p-2'>
              <FaHeart />
              <span className='pl-2'>2</span>
            </div>
          </Link>
          <Link to='/cart'>
            <div className='flex items-center text-white text-sm p-2'>
              <FaCartPlus />
              <span className='pl-2'>4</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
