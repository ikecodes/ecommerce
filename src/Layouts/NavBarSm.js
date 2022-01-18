import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavImg from '../assets/images/logo-placeholder.jpg';

const menu = [
  { name: 'home', to: '/' },
  { name: 'products', to: '/products' },
  { name: 'deal', to: '/deal' },
  { name: 'about', to: '/about' },
];

const NavBarSm = ({ handleShowNav, showNav }) => {
  const [active, setActive] = useState('home');

  const handleClick = (current) => {
    handleShowNav();
    setActive(current);
  };
  return (
    <div className={showNav ? 'block' : 'hidden'}>
      <div
        className='absolute top-0 h-full w-full z-50 bg-[rgb(0,0,0,0.5)]'
        onClick={handleShowNav}
      ></div>
      <div className='absolute top-0 h-full w-3/4 z-50 bg-white'>
        <div className='flex items-start space-x-4 pt-4 border-b border-gray-300 pb-8 p-2'>
          <FaTimes size={20} onClick={handleShowNav} />
          <img src={NavImg} alt='Nav logo' className='h-20 w-40' />
        </div>
        <ul className='ml-8 mt-8 space-y-4 border-b border-gray-300 pb-8 p-2'>
          {menu.map((item) => (
            <Link
              to={item.to}
              key={item.name}
              onClick={() => handleClick(item.name)}
            >
              <li
                className={`capitalize text-2xl my-6 ${
                  active === item.name ? 'text-[#3EC1F9]' : ''
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarSm;
