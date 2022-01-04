import React from 'react';
import Layout from '../Layouts/Layout';
import headerBanner from '../assets/images/placeholder-banner.png';
import Services from '../components/Services';
import { FaShip, FaShoePrints } from 'react-icons/fa';
import BrowseCategories from '../components/BrowseCategories';

const Home = () => {
  return (
    <Layout>
      <div className='flex'>
        <div className='bg-[#3EC1F9] hidden md:grid w-1/4 shrink-1 grid place-content-center cursor-pointer'>
          <span className='font-bold text-white'>ORDER NOW</span>
        </div>
        <div>
          <img
            className='object-cover'
            src={headerBanner}
            alt='Header Banner'
          />
        </div>
      </div>
      <div className='bg-[#3EC1F9] grid grid-cols-1 lg:grid-cols-3 mt-8 m-4 rounded p-8 gap-2 justify-items-center items-center'>
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaShip size={35} />}
        />
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaShip size={35} />}
        />
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaShip size={35} />}
        />
      </div>
      <div className='p-8 flex items-center'>
        <div className='w-full h-0.5 bg-gray-300 z-0'></div>
        <h4 className='font-bold text-sm w-1/2 text-center bg-white z-10'>
          BROWSE CATEGORIES
        </h4>
        <div className='w-full h-0.5 bg-gray-300 z-0'></div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 mt-8 m-4 rounded py-4 px-40  gap-2 gap-y-4 justify-items-center items-center'>
        <BrowseCategories
          icon={<FaShoePrints size={50} color='#3EC1F9' />}
          title='Footwares'
        />
        <BrowseCategories
          icon={<FaShoePrints size={50} color='#3EC1F9' />}
          title='Footwares'
        />
        <BrowseCategories
          icon={<FaShoePrints size={50} color='#3EC1F9' />}
          title='Footwares'
        />
        <BrowseCategories
          icon={<FaShoePrints size={50} color='#3EC1F9' />}
          title='Footwares'
        />
      </div>
    </Layout>
  );
};

export default Home;
