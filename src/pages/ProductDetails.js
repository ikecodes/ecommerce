import React from 'react';
import Layout from '../Layouts/Layout';
import ProductImage from '../assets/images/product-placeholder.jpg';
import { FaStar, FaStore } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import ProductItem from '../components/ProductItem';
import SimilarStore from '../components/SimilarStore';
import { AddToCart, BuyNow } from '../components/Buttons';

const ProductDetails = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <div className='capitalize my-10 p-2 lg:px-48'>
        <div className='flex items-center lg:items-start flex-wrap p-4  justify-between'>
          <div>
            <img className='max-h-96' src={ProductImage} alt='product' />
            <div className='flex items-center gap-4 mt-2'>
              <img className='max-h-20' src={ProductImage} alt='product' />
              <img className='max-h-20' src={ProductImage} alt='product' />
              <img className='max-h-20' src={ProductImage} alt='product' />
              <img className='max-h-20' src={ProductImage} alt='product' />
            </div>
          </div>
          <div>
            <h4 className='font-bold text-4xl my-4'>apple watch black color</h4>
            <div className='my-4'>
              <span className='font-normal mr-2'>product code</span>
              <span className='font-semibold'>495959</span>
            </div>
            <div className='mt-2'>
              <span className='text-md font-semibold'>Brand:</span>
              <div className='divide-x divide-x-2 divide-[#3EC1F9] inline-block text-[#3EC1F9]'>
                <span className='px-2 uppercase'>apple</span>
                <span className='px-2'>similar products from apple</span>
              </div>
              <div className='my-2'>
                <span className='flex my-2 items-center'>
                  <FaStar color='#FDCC0D' />
                  <FaStar color='#FDCC0D' />
                  <FaStar color='#FDCC0D' />
                  <FaStar color='#FDCC0D' />
                </span>
                <div>
                  <span> 4 star rating</span>
                  <span className='ml-2 text-[#3EC1F9]'>200 reviews</span>
                </div>
              </div>
              <div className='mt-2'>
                <div className='w-full h-0.5 bg-gray-200'></div>
                <div className='my-2'>
                  <span className='text-2xl text-[#3EC1F9] font-semibold'>
                    N9,000
                  </span>
                  <span className='text-md text-gray-200 mx-3 line-through font-semibold'>
                    N9,000
                  </span>
                  <span className='text-md text-[#07B52A] font-semibold'>
                    saves N9,000
                  </span>
                </div>
                <div className='w-full h-0.5 bg-gray-200'></div>
              </div>
              <div className='my-5 flex items-center'>
                <span>quantity</span>
                <input
                  type='number'
                  className='focus:outline-none mx-3 w-10 border-2 border-gray-300'
                />
                <div className='inline-block text-sm'>
                  <p>call us for more info</p>
                  <p className='font-semibold'>click here to number</p>
                </div>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <div className='flex flex-wrap items-start justify-start space-y-2 md:space-y-0 md:space-x-2'>
                  <AddToCart />
                  <BuyNow />
                </div>
                <BsHeart className='text-[#3EC1F9] md:text-base text-3xl cursor-pointer' />
              </div>
              <h1 className='bg-[#F5F5F5] p-2 mt-2 text-[#212121DE] font-medium'>
                Sold by <span className='text-[#3EC1F9]'>Slot Africa</span>
              </h1>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div className='my-5'>
          <ul class='inline-flex  pt-10 pb-5 capitalize'>
            <li class='px-4 py-2 -mb-px font-semibold text-black border-b-2 border-blue-500 rounded-t opacity-80'>
              <span>description</span>
            </li>
            <li class='px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-gray-400 rounded-t opacity-50'>
              <span>specification</span>
            </li>
            <li class='px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-gray-400 rounded-t opacity-50'>
              <span>review</span>
            </li>
          </ul>
          <div>
            <p className='p-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde id
              voluptatum non quis quos numquam, recusandae quaerat debitis iure
              nisi cum animi tempora? Minima unde necessitatibus, dolores vel
              expedita nihil.
            </p>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            similar product
          </h4>
          <div className='overflow-x-auto flex items-center lg:justify-start space-x-4 scrollbar-hide'>
            {arr.map((item) => (
              <ProductItem
                key={item}
                image={ProductImage}
                description='Black Flip phone'
                price={5000}
                toCart
              />
            ))}
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            Recently viewed
          </h4>
          <div className='overflow-x-auto flex items-center lg:justify-start space-x-4 scrollbar-hide'>
            {arr.map((item) => (
              <ProductItem
                key={item}
                image={ProductImage}
                description='Black Flip phone'
                price={5000}
                toCart
              />
            ))}
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            store with similar product in your location
          </h4>
          <div className='grid grid-cols-1 lg:grid-cols-3 rounded  gap-6 justify-items-stretch items-center'>
            <SimilarStore
              icon={<FaStore size={30} />}
              name='store africa'
              distance='500km away'
              location='21 kayode street abuleja,Lagos'
            />
            <SimilarStore
              icon={<FaStore size={30} />}
              name='store africa'
              distance='500km away'
              location='21 kayode street abuleja,Lagos'
            />
            <SimilarStore
              icon={<FaStore size={30} />}
              name='store africa'
              distance='500km away'
              location='21 kayode street abuleja,Lagos'
            />
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </Layout>
  );
};

export default ProductDetails;
