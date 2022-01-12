import React from 'react';
import Layout from '../Layouts/Layout';
import ProductItem from '../components/ProductItem';
import ProductImage from '../assets/images/product-placeholder.jpg';
import Categories from '../components/Categories';

const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Layout>
      <div className='divide-y px-10'>
        <div className='relative flex my-2 sm:px-5 py-10 space-x-4 items-start justify-center gap-20'>
          <div className='relative hidden lg:block'>
            <Categories showFilter />
          </div>

          <div>
            <div className='flex items-center justify-center md:justify-between mx-4 mb-6'>
              <h1 className='font-semibold text-xl capitalize'>products</h1>
              <div className='hidden md:flex items-center'>
                <h1 className='font-semibold hidden md:block text-md capitalize mr-2'>
                  sort by
                </h1>
                <div className='flex items-center rounded-xl  text-center text-[#DBDBDB]'>
                  <button className='rounded-l-lg p-1 border-[0.5px] border-[#DBDBDB] px-4'>
                    relevance
                  </button>
                  <button className='p-1 border-[0.5px] border-[#DBDBDB] border-l-0 border-r-0 px-4'>
                    Price - high to low
                  </button>
                  <button className='rounded-r-lg p-1 border-[0.5px] border-[#DBDBDB] bg-[#3EC1F9] text-white px-4 '>
                    Price - low to high
                  </button>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-8 border-t border-gray-200 pt-4'>
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
        </div>
      </div>
    </Layout>
  );
};

export default Products;
