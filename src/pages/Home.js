import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import HeaderBanner from '../assets/images/banner2.jpg';
import HeaderBanner2 from '../assets/images/banner-shoe.jpg';
import HeaderBanner3 from '../assets/images/Rolex-Watches-Wallpaper.jpg';
import SpeakerI from '../assets/images/speaker.png';
import SpeakerII from '../assets/images/beats.jpg';
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
import Discount from '../components/Discount';

const Home = () => {
  const imgArr = [
    {
      url: HeaderBanner,
      title: 'footwears',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad? Nobis qui cumque atque impedit ipsum quod asperiores ',
    },
    {
      url: HeaderBanner2,
      title: 'bags',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad? Nobis qui cumque atque impedit ipsum quod asperiores ',
    },
    {
      url: HeaderBanner3,
      title: 'watches',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad? Nobis qui cumque atque impedit ipsum quod asperiores ',
    },
  ];
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
      <div className='flex h-[30vh] md:h-[70vh]'>
        <div className='bg-[#3EC1F9] hidden md:grid basis-1/4 shrink-1 grid place-content-center cursor-pointer  relative'>
          <span className='font-bold text-white'>ORDER NOW</span>
          <Categories />
        </div>
        <div className='grow relative'>
          <img
            className='h-full w-full object-cover'
            src={imgArr[image].url}
            alt='Header Banner'
          />
          <div className='absolute h-full w-full top-0 bg-[rgb(0,0,0,0.5)]'></div>
          <div className='absolute top-[50%] left-5 translate-y-[-50%] text-white'>
            <h1 className='text-4xl md:text-7xl capitalize font-bold'>
              {imgArr[image].title}
            </h1>
            <p className='mt-4 w-3/4 md:w-1/2 text-sm md:text-lg capitalize'>
              {imgArr[image].description}
            </p>
          </div>
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
      <div className='p-10 overflow-x-auto flex items-center lg:justify-center space-x-8 scrollbar-hide'>
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
      <div className='mt-10 md:p-10'>
        <div className='px-0 md:px-16 mb-20'>
          <Discount
            title='google extraordinary'
            image={SpeakerI}
            discount='40%'
            customer='for new customers only'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam dolore omnis esse? Quos ab mollitia voluptates reiciendis ut officia exercitationem! Consectetur sint praesentium, omnis id doloribus incidunt impedit consequuntur.'
          />
        </div>

        <div className='my-10'>
          <div className='flex items-center justify-between'>
            <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink  text-center uppercase bg-white z-10'>
              best selling
            </h4>
            <div className='w-full h-0.5 bg-gray-300'></div>
            <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink text-center capitalize bg-white cursor-pointer text-[#3EC1F9]'>
              view all
            </h4>
          </div>
          <div className='mt-10 overflow-x-auto flex items-center lg:justify-around px-8 space-x-4 scrollbar-hide'>
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
        </div>

        <div className='my-10'>
          <div className='flex items-center justify-between'>
            <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink  text-center uppercase bg-white z-10'>
              deal of the day
            </h4>
            <div className='w-full h-0.5 bg-gray-300'></div>
            <h4 className='font-bold text-sm w-1/4 shrink-0 md:shrink text-center capitalize bg-white cursor-pointer text-[#3EC1F9]'>
              view all
            </h4>
          </div>
          <div className='mt-10 overflow-x-auto flex items-center lg:justify-around px-8 space-x-4 scrollbar-hide'>
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
        </div>
      </div>

      <Discount
        title='google extraordinary'
        image={SpeakerII}
        discount='40%'
        customer='for new customers only'
      />
      <NewsLetter />
    </Layout>
  );
};

export default Home;
