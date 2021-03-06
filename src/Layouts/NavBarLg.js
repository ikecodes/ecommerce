import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getProductsByStore } from '../slices/productSlice';
import { FaTh } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { menu } from '../constants/menu';
const NavBar = () => {
  const dispatch = useDispatch();
  const storeId = localStorage.getItem('storeId');
  const handleNav = (item) => {
    if (item.name === 'products' && storeId)
      return dispatch(getProductsByStore(storeId));
    dispatch(getProducts());
  };

  return (
    <div className='hidden sm:flex items-center p-4'>
      <div className='flex items-center hidden md:flex ml-8 md:ml-20 space-x-6 cursor-pointer'>
        <FaTh size={20} className='font-medium -mr-4 mr-2' />
        <span className='uppercase mx-2 font-medium'>Categories</span>
      </div>
      <ul className='flex items-center space-x-10 ml-10 md:ml-40'>
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.to}
              onClick={() => handleNav(item)}
              className={({ isActive }) => (isActive ? 'text-[#3EC1F9]' : '')}
            >
              <button
                className={`text-sm font-medium uppercase`}
                disabled={item.name === 'deal' || item.name === 'about'}
              >
                {item.name}
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
