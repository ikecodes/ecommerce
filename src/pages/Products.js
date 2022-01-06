import React from 'react';
import Layout from '../Layouts/Layout';
import ProductItem from '../components/ProductItem';
import ProductImage from '../assets/images/product-placeholder.jpg';

const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Layout>
      <div className='divide-y p-2'>
        <div className='flex items-center justify-center md:justify-between mx-4 my-2'>
          <h1 className='hidden sm:block font-semibold text-xl capitalize'>
            products
          </h1>
          <div className='flex items-center '>
            <h1 className='font-semibold hidden md:block text-md capitalize mr-2'>
              sort by
            </h1>
            <div className='flex items-center rounded-xl  text-center '>
              <button className='rounded-l-lg p-1 border-[0.5px] border-gray-500'>
                relevance
              </button>
              <button className='p-1 border-[0.5px] border-gray-500 border-l-0 border-r-0'>
                high to low
              </button>
              <button className='rounded-r-lg p-1 border-[0.5px] border-gray-500 bg-[#3EC1F9] text-white '>
                low to high
              </button>
            </div>
          </div>
        </div>
        <div className='my-2 sm:px-20 py-10 grid grid-cols-1 justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8'>
          {arr.map((item) => (
            <ProductItem
              key={item}
              image={ProductImage}
              description='Black Flip phone'
              price={5000}
              toCart
              availability
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
