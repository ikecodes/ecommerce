import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import ProductItem from '../components/ProductItem';
import Categories from '../components/Categories';
import StoreLocation from '../components/StoreLocation';

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const store = useSelector((state) => state.store.store);
  const [sort, setSort] = useState('high');
  return (
    <Layout>
      <div className='flex mb-12'>
        <div className='hidden md:flex basis-1/4 shrink-1 justify-center'>
          <Categories />
        </div>

        <div className='w-[100%] md:w-[70%]'>
          {store && (
            <div className='mx-4 my-8'>
              <StoreLocation
                key={store.id}
                id={store.id}
                name={store.name}
                phone={store.phone}
                location={store.address}
              />
            </div>
          )}

          <div className='flex items-center justify-center md:justify-between mx-4 mb-6'>
            <h1 className='font-medium text-xl capitalize'>products</h1>
            <div className='hidden md:flex items-center'>
              <h1 className='font-medium hidden md:block text-md capitalize mr-2'>
                sort by
              </h1>
              <div className='flex items-center rounded-xl  text-center text-[#DBDBDB]'>
                {/* <button
                  className={`rounded-l-lg p-1 border-[0.5px] border-[#DBDBDB] px-4 ${
                    sort === 'relevance' && 'bg-[#3EC1F9] text-white px-4'
                  }`}
                  onClick={() => setSort('relevance')}
                >
                  relevance
                </button> */}
                <button
                  className={`rounded-l-lg p-1 border-[0.5px] border-[#DBDBDB]  ${
                    sort === 'high' && 'bg-[#3EC1F9] text-white'
                  }`}
                  onClick={() => setSort('high')}
                >
                  Price - high to low
                </button>
                <button
                  className={`rounded-r-lg p-1 border-[0.5px] border-[#DBDBDB] ${
                    sort === 'low' && 'bg-[#3EC1F9] text-white'
                  }`}
                  onClick={() => setSort('low')}
                >
                  Price - low to high
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-8 border-t border-gray-200 pt-4'>
            {products.length > 0 ? (
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
              ))
            ) : (
              <p className='text-4xl text-gray-300 font-semibold whitespace-nowrap'>
                No product found
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
