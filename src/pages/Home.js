import React from 'react';
import Layout from '../Layouts/Layout';
import HeaderBanner from '../assets/images/banner2.jpg';
import AccessoriesBanner from '../assets/images/accesories-banner.jpg';
import ProductImage from '../assets/images/prod2.jpg';
import Services from '../components/Services';
import {
  FaCartPlus,
  FaHeadphones,
  FaMobile,
  FaShoePrints,
  FaShoppingBag,
} from 'react-icons/fa';
import BrowseCategories from '../components/BrowseCategories';
import ProductItem from '../components/ProductItem';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <div className='flex'>
        <div className='bg-[#3EC1F9] hidden md:grid basis-1/4 shrink-1 grid place-content-center cursor-pointer'>
          <span className='font-bold text-white'>ORDER NOW</span>
        </div>

        <div className='grow m-h-[80vh]'>
          <img
            className='h-full w-full object-cover'
            src={HeaderBanner}
            alt='Header Banner'
          />
        </div>
      </div>
      <div className='bg-[#3EC1F9] grid grid-cols-1 lg:grid-cols-3 mt-8 m-4 rounded p-8 gap-6 justify-items-center items-center'>
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaCartPlus size={35} />}
        />
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaCartPlus size={35} />}
        />
        <Services
          title=' Lorem ipsum, dolor sit amet consectetur.'
          text='Lorem ipsum dolor sit amet'
          icon={<FaCartPlus size={35} />}
        />
      </div>
      {/* <div className='mt-8 m-4 rounded m-h-[100vh]'>
        <img
          src={AccessoriesBanner}
          className='object-cover h-full w-full'
          alt='accesories'
        />
      </div> */}
      <div className='mt-5 p-8 flex items-center'>
        <div className='w-full h-0.5 bg-gray-300 z-0'></div>
        <h4 className='font-bold text-sm w-1/2 shrink-0 md:shrink text-center uppercase bg-white z-10'>
          browse categories
        </h4>
        <div className='w-full h-0.5 bg-gray-300 z-0'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 m-4 rounded py-4 px-40  gap-6  justify-items-center items-center'>
        <BrowseCategories
          icon={<FaShoePrints size={80} color='#3EC1F9' />}
          title='Footwares'
        />
        <BrowseCategories
          icon={<FaShoppingBag size={80} color='#3EC1F9' />}
          title='Bags'
        />
        <BrowseCategories
          icon={<FaMobile size={80} color='#3EC1F9' />}
          title='Phones'
        />
        <BrowseCategories
          icon={<FaHeadphones size={80} color='#3EC1F9' />}
          title='Wareables'
        />
      </div>
      <div className='mt-28'>
        <div className='flex items-center'>
          <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink  text-center uppercase bg-white z-10'>
            best selling
          </h4>
          <div className='w-full h-0.5 bg-gray-300'></div>
          <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink text-center capitalize bg-white cursor-pointer text-[#3EC1F9]'>
            view all
          </h4>
        </div>
        <div className='p-10 overflow-x-auto flex items-center lg:justify-center space-x-4 scrollbar-hide'>
          {arr.map((item) => (
            <ProductItem
              key={item}
              image={ProductImage}
              description='Black Flip phone'
              price={5000}
              availability
            />
          ))}
        </div>
        <NewsLetter />
      </div>
    </Layout>
  );
};

export default Home;
