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

const NavBarSm = ({
  handleShowNav,
  showNav,
  handleShowLocator,
  showLocator,
}) => {
  const [active, setActive] = useState('home');

  const handleClick = (current) => {
    handleShowNav();
    setActive(current);
  };
  return (
    <div className={showNav ? 'block' : 'hidden'}>
      <div
        className='fixed top-0 h-full w-full z-50 bg-[rgb(0,0,0,0.5)]'
        onClick={handleShowNav}
      ></div>
      <div className='fixed top-0 h-full w-3/4 z-50 bg-white'>
        <div className='flex items-start space-x-4 pt-4 border-b border-gray-300 pb-8 p-2'>
          <FaTimes size={25} onClick={handleShowNav} />
          <img src={NavImg} alt='Nav logo' className='h-20 w-40' />
        </div>
        <ul className='mt-8 space-y-2 border-b border-gray-300 pb-8 p-2'>
          {menu.map((item) => (
            <Link
              to={item.to}
              key={item.name}
              onClick={() => handleClick(item.name)}
            >
              <li
                className={`capitalize text-xl my-6 ${
                  active === item.name ? 'text-[#3EC1F9]' : ''
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
          <li className='capitalize text-xl my-6' onClick={handleShowLocator}>
            store locator
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSm;
