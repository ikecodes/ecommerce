import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getProductsByStore } from '../slices/productSlice';
import {
  FaTimes,
  FaShoppingCart,
  FaHome,
  FaPercentage,
  FaFileAlt,
  FaStore,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import NavImg from '../assets/images/logo-placeholder.jpg';

const menu = [
  {
    name: 'home',
    to: '/',
    icon: <FaHome className='text-2xl text-gray-500 mr-2' />,
  },
  {
    name: 'products',
    to: '/products',
    icon: <FaShoppingCart className='text-2xl text-gray-500 mr-2' />,
  },
  {
    name: 'deal',
    to: '/',
    icon: <FaPercentage className='text-2xl text-gray-500 mr-2' />,
  },
  {
    name: 'about',
    to: '/',
    icon: <FaFileAlt className='text-2xl text-gray-500 mr-2' />,
  },
];

const NavBarSm = ({ handleShowNav, showNav, handleShowLocator }) => {
  const dispatch = useDispatch();
  const storeId = localStorage.getItem('storeId');
  const handleNav = (item) => {
    if (item.name === 'products' && storeId)
      return dispatch(getProductsByStore(storeId));
    dispatch(getProducts());
  };

  return (
    <div className={showNav ? 'block' : 'hidden'}>
      <div
        className='fixed top-0 h-full w-full z-50 bg-[rgb(0,0,0,0.5)]'
        onClick={handleShowNav}
      ></div>
      <div className='fixed top-0 h-full w-3/4 z-50 bg-white'>
        <div className='flex items-start space-x-4 pt-4 border-b border-gray-300 pb-8 p-2'>
          <FaTimes className='text-2xl text-gray-500' onClick={handleShowNav} />
          <img src={NavImg} alt='Nav logo' className='h-20 w-40' />
        </div>
        <ul className='mt-8 space-y-2 border-b border-gray-300 pb-8 p-2'>
          {menu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                onClick={() => handleNav(item)}
                className={({ isActive }) => (isActive ? 'text-[#3EC1F9]' : '')}
              >
                <button
                  className='flex items-center space-x-2 capitalize text-lg my-6'
                  disabled={item.name === 'deal' || item.name === 'about'}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </NavLink>
            </li>
          ))}
          <li
            className='flex items-center space-x-2 capitalize text-lg my-6'
            onClick={handleShowLocator}
          >
            <FaStore className='text-2xl text-gray-500 mr-2' />
            <span> store locator</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSm;
