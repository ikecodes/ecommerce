import React, { useEffect } from 'react';
import decode from 'jwt-decode';
import { getUser } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Toast from '../utils/Toast';
import {
  FaUser,
  FaHeart,
  FaCartPlus,
  FaSearch,
  FaBars,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo-placeholder.jpg';
import LocationSelection from '../components/LocationSelection';
import StartOrder from '../components/StartOrder';
import StoreLocatorBtn from '../components/StoreLocatorBtn';
import NavBarSm from './NavBarSm';

const Header = ({ showLocator, handleShowLocator, showNav, handleShowNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const decodedToken = decode(localStorage.getItem('token'));
      if (decodedToken.exp * 1000 < new Date().getTime())
        return handleLogout('token expired,login again');
      dispatch(getUser());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, token, dispatch]);

  const handleLogout = (msg) => {
    localStorage.removeItem('token');
    Toast(msg, 'info');
    navigate('/');
  };
  return (
    <div>
      <LocationSelection
        showLocator={showLocator}
        handleShowLocator={handleShowLocator}
      />
      <StartOrder />
      <NavBarSm
        handleShowNav={handleShowNav}
        showNav={showNav}
        handleShowLocator={handleShowLocator}
        showLocator={showLocator}
      />
      <div className=' flex  items-center justify-around  flex-wrap bg-[#3EC1F9]'>
        <FaBars size={20} className='sm:hidden' onClick={handleShowNav} />
        <Link to='/'>
          <img
            src={LogoImage}
            alt='logo'
            className='my-2 md:my-0 h-15 w-24 sm:h-20 sm:w-40 sm:ml-10'
          />
        </Link>

        <div className='flex items-center order-3 sm:order-1 bg-white rounded-3xl p-2 basis-full my-2 sm:my-0 mx-2 sm:mx-0 sm:basis-1/2 md:basis-1/3 '>
          <FaSearch color='#000000DE' className='mx-2' />
          <input
            type='text'
            name='Search'
            placeholder='Search Product'
            className='w-full focus:border-none focus:outline-none pl-3'
          />
        </div>

        <div className='hidden sm:block order-2'>
          <StoreLocatorBtn handleShowLocator={handleShowLocator} />
        </div>

        <div className='flex order-1 sm:order-3 items-center divide-x mt-2 md:mt-0'>
          {token ? (
            <div
              className='flex items-center text-white text-sm p-2 cursor-pointer'
              onClick={() => handleLogout('Logging you out')}
            >
              <FaSignOutAlt />
              <span className='pl-2'>Logout</span>
            </div>
          ) : (
            <Link to='/signin'>
              <div className='flex items-center text-white text-sm p-2'>
                <FaUser />
                <span className='pl-2'>Sign In</span>
              </div>
            </Link>
          )}

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
