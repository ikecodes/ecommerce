import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import HeaderBanner from '../assets/images/banner2.jpg';
import HeaderBanner2 from '../assets/images/banner-shoe.jpg';
import HeaderBanner3 from '../assets/images/Rolex-Watches-Wallpaper.jpg';
import ProductImage from '../assets/images/prod2.jpg';
import Services from '../components/Services';
import {
  FaHeadphones,
  FaMobile,
  FaShoePrints,
  FaShoppingBag,
} from 'react-icons/fa';
import BrowseCategories from '../components/BrowseCategories';
import ProductItem from '../components/ProductItem';
import NewsLetter from '../components/NewsLetter';
import { BsCircle } from 'react-icons/bs';
import Categories from '../components/Categories';

const Home = () => {
  const imgArr = [HeaderBanner, HeaderBanner2, HeaderBanner3];
  const getRand = () => Math.ceil(Math.random() * imgArr.length) - 1;
  const [image, setImage] = useState(0);
  const arr = [1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(getRand());
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className='flex h-[60vh]'>
        <div className='bg-[#3EC1F9] hidden md:grid basis-1/4 shrink-1 grid place-content-center cursor-pointer  relative'>
          <span className='font-bold text-white'>ORDER NOW</span>
          <Categories />
        </div>
        <div className='grow'>
          <img
            className='h-full w-full object-cover'
            src={imgArr[image]}
            alt='Header Banner'
          />
        </div>
      </div>

      {/* /////////////////////////////////////////////////// */}
      <div className='bg-[#3EC1F9] grid grid-cols-1 lg:grid-cols-3 rounded px-16 py-8 gap-8 justify-items-center items-center'>
        <Services
          title='if you are unable'
          text='100% satisfaction'
          icon={<BsCircle size={40} color='#707070' />}
        />
        <Services
          title='if you are unable'
          text='100% satisfaction'
          icon={<BsCircle size={40} color='#707070' />}
        />
        <Services
          title='if you are unable'
          text='100% satisfaction'
          icon={<BsCircle size={40} color='#707070' />}
        />
      </div>

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
