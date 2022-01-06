import React from 'react';
import { FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { menu } from '../constants/menu';
const NavBar = () => {
  return (
    <div className='flex items-center p-4 border-b-[0.5px] border-gray-300'>
      <div className='flex items-center hidden md:flex ml-10 md:ml-20 cursor-pointer'>
        <FaTh size={20} />
        <span className='uppercase mx-2 font-semibold'>Categories</span>
      </div>
      <ul className='flex items-center space-x-4 ml-10 md:ml-20'>
        {menu.map((item) => (
          <li key={item.name}>
            <Link to={item.to}>
              <button
                className={`text-sm ${
                  item.name === 'deal' || item.name === 'about'
                    ? 'text-gray-300'
                    : 'font-semibold '
                }`}
                disabled={item.name === 'deal' || item.name === 'about'}
              >
                {item.name.toUpperCase()}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
