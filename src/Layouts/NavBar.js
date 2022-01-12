import React, { useState } from 'react';
import { FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { menu } from '../constants/menu';
const NavBar = () => {
  const [active, setActive] = useState('home');
  return (
    <div className='flex items-center p-4'>
      <div className='flex items-center hidden md:flex ml-10 md:ml-20 cursor-pointer'>
        <FaTh size={20} />
        <span className='uppercase mx-2 font-semibold'>Categories</span>
      </div>
      <ul className='flex items-center space-x-4 ml-10 md:ml-40'>
        {menu.map((item) => (
          <li key={item.name}>
            <Link to={item.to} onClick={() => setActive(item.name)}>
              <button
                className={`text-sm font-semibold uppercase ${
                  item.name === active ? 'text-[#3EC1F9]' : ''
                }`}
                disabled={item.name === 'deal' || item.name === 'about'}
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
