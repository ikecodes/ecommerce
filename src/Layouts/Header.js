import React, { useState } from 'react';
import { FaStore, FaUser, FaHeart, FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo-placeholder.jpg';
import LocationSelection from '../components/LocationSelection';
import StartOrder from '../components/StartOrder';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <LocationSelection show={show} handleShow={handleShow} />
      <StartOrder />
      <div className=' flex  items-center justify-around  flex-wrap bg-[#3EC1F9]'>
        <img
          src={LogoImage}
          alt='logo'
          className='my-2 md:my-0 h-20 w-40 ml-10'
        />

        <div className='flex items-center bg-white rounded-3xl p-2 basis-1/3 '>
          <FaSearch color='#000000DE' className='mx-2' />
          <input
            type='text'
            name='Search'
            placeholder='Search Product'
            className='w-full focus:border-none focus:outline-none pl-3'
          />
        </div>

        <button
          onClick={handleShow}
          className='flex items-center bg-white rounded-2xl font-bold p-2 lg:-ml-20 text-sm text-[#3EC1F9]'
        >
          <FaStore />
          <span className='ml-2'> Store Locator</span>
        </button>

        <div className='flex items-center divide-x mt-2 md:mt-0'>
          <div className='flex items-center text-white text-sm p-2'>
            <FaUser />
            <button disabled>
              <span className='pl-2'>Sign In</span>
            </button>
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
