import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo-placeholder.jpg';
import { menu, support, legal } from '../constants/menu';
const Footer = () => {
  return (
    <div className='bg-[#3EC1F9] p-10 px-20 flex flex-wrap justify-around text-white'>
      <img src={LogoImage} alt='Logo' className='h-24' />
      <ul className='list-style-none'>
        <li className='capitalize text-2xl text-white'>menu</li>
        {menu.map((item) => (
          <li className='font-semibold text-sm mt-8' key={item.name}>
            <Link to={item.to} className='capitalize text-white font-light'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='list-style-none'>
        <li className='capitalize text-2xl text-white'>support</li>
        {support.map((item) => (
          <li className='font-semibold text-sm mt-8' key={item.name}>
            <Link to={item.to} className='capitalize text-white font-light '>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='list-style-none'>
        <li className='capitalize text-2xl text-white'>legal</li>
        {legal.map((item) => (
          <li className='font-semibold text-sm mt-8' key={item.name}>
            <Link to={item.to} className='capitalize text-white font-light '>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <span className='font-semibold capitalize mr-2 text-lg'>
            address:
          </span>
          <p className='capitalize'>43 round table drive north london</p>
        </div>
        <div className='flex items-center'>
          <span className='font-semibold capitalize mr-2 text-lg'>Tel:</span>
          <p className='capitalize'>+40440404040</p>
        </div>
        <div className='flex space-x-2'>
          <FaTwitterSquare size={30} />
          <FaInstagram size={30} />
          <FaFacebook size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
