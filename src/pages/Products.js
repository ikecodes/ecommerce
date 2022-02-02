import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import ProductItem from '../components/ProductItem';
import Categories from '../components/Categories';

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const [sort, setSort] = useState('relevance');

  return (
    <Layout>
      <div className='divide-y px-10'>
        <div className='relative flex my-2 sm:px-5 py-5 items-start justify-center md:space-x-20 gap-20'>
          <div className='relative hidden lg:block'>
            <Categories />
          </div>

          <div>
            <div className='flex items-center justify-center md:justify-between mx-4 mb-6'>
              <h1 className='font-semibold text-xl capitalize'>products</h1>
              <div className='hidden md:flex items-center'>
                <h1 className='font-semibold hidden md:block text-md capitalize mr-2'>
                  sort by
                </h1>
                <div className='flex items-center rounded-xl  text-center text-[#DBDBDB]'>
                  <button
                    className={`rounded-l-lg p-1 border-[0.5px] border-[#DBDBDB] px-4 ${
                      sort === 'relevance' && 'bg-[#3EC1F9] text-white px-4'
                    }`}
                    onClick={() => setSort('relevance')}
                  >
                    relevance
                  </button>
                  <button
                    className={`p-1 border-[0.5px] border-[#DBDBDB] border-l-0 border-r-0 px-4 ${
                      sort === 'high' && 'bg-[#3EC1F9] text-white px-4'
                    }`}
                    onClick={() => setSort('high')}
                  >
                    Price - high to low
                  </button>
                  <button
                    className={`rounded-r-lg p-1 border-[0.5px] border-[#DBDBDB] ${
                      sort === 'low' && 'bg-[#3EC1F9] text-white px-4'
                    }`}
                    onClick={() => setSort('low')}
                  >
                    Price - low to high
                  </button>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-8 border-t border-gray-200 pt-4'>
              {products &&
                products.map((item) => (
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    description={item.name}
                    price={item.price}
                    salePrice={item.sale_price}
                    toCart
                    availability={item.stores_having_product}
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
