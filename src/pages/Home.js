import React from 'react';
import Layout from '../Layouts/Layout';
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

import Discount from '../components/Discount';
import Carousel from '../components/Carousel';

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <Carousel />
      {/* /////////////////////////////////////////////////// */}
      <div className='bg-[#3EC1F9] grid grid-cols-3 rounded sm:px-16 py-8 gap-4 justify-items-center items-center'>
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
