import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../assets/images/logo-placeholder.jpg';

const Welcome = ({ handleShowLocator }) => {
  return (
    <div className='fixed bg-[rgb(0,0,0,0.5)] h-[100vh] w-full grid place-content-center z-[100]'>
      <div className='bg-white rounded-lg py-20 px-28 capitalize text-center'>
        <img src={Logo} alt='logo' className='h-24 m-auto ' />
        <h1 className='font-semibold text-3xl mt-8'>welcome</h1>
        <p className='font-medium mt-4'>
          select your location to start shopping
        </p>
        <button
          className='bg-[#3EC1F9] mt-4 text-white rounded-full flex items-center space-x-4 justify-items-around uppercase p-2 px-8 m-auto my-4'
          onClick={handleShowLocator}
        >
          <FaMapMarkerAlt />
          <span className='text-sm whitespace-nowrap'>select location</span>
        </button>
        {/* <p className='text-sm my-4'>
          <span className='text-[#3EC1F9]'>sign in</span> if you have an account
        </p> */}
      </div>
    </div>
  );
};

export default Welcome;
