import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import { FaStar, FaStore } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import ProductItem from '../components/ProductItem';
import SimilarStore from '../components/SimilarStore';
import { AddToCart, BuyNow } from '../components/Buttons';
import {
  getProduct,
  getSimilarProduct,
  getSimilarStores,
} from '../slices/productSlice';

const ProductDetails = () => {
  const store = JSON.parse(localStorage.getItem('store'));
  const dispatch = useDispatch();
  const { product, similarProducts, similarStores } = useSelector(
    (state) => state.product
  );
  const location = useLocation();
  const productId = location.search.split('=')[1];
  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
      dispatch(getSimilarProduct(productId));
      dispatch(getSimilarStores(productId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return (
    <Layout>
      <div className='capitalize mb-10 p-2 lg:px-20'>
        <div className='flex items-center lg:items-start flex-wrap gap-2  justify-between'>
          <div>
            <img className='max-h-[26rem]' src={product?.image} alt='product' />
            <div className='flex items-center gap-4 mt-2'>
              {product?.images.map((image) => (
                <img
                  key={image}
                  className='max-h-20'
                  src={image}
                  alt='product'
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className='font-bold text-4xl my-4'>{product?.name}</h4>
            {/* <div className='my-4'>
              <span className='font-normal mr-2'>product code</span>
              <span className='font-semibold'>495959</span>
            </div> */}
            <div className='mt-2'>
              {/* <span className='text-md font-semibold'>Brand:</span>
              <div className='divide-x divide-x-2 divide-[#3EC1F9] inline-block text-[#3EC1F9]'>
                <span className='px-2 uppercase'>apple</span>
                <span className='px-2'>similar products from apple</span>
              </div> */}
              <div className='my-2'>
                <span className='flex my-2 items-center'>
                  {product &&
                    [...Array(Math.round(product?.rating * 1))].map(
                      (rate, i) => {
                        return <FaStar key={i} color='#FDCC0D' />;
                      }
                    )}
                </span>
                <div>
                  <span> {Math.round(product?.rating * 1)} star rating</span>
                  <span className='ml-2 text-[#3EC1F9]'>
                    {product?.reviews.length} reviews
                  </span>
                </div>
              </div>
              <div className='mt-2'>
                <div className='w-full h-0.5 bg-gray-200'></div>
                <div className='my-2'>
                  <span className='text-2xl text-[#3EC1F9] font-semibold'>
                    N{product?.price}
                  </span>
                  <span className='text-md text-gray-200 mx-3 line-through font-semibold'>
                    N{product?.sale_price}
                  </span>
                  {/* <span className='text-md text-[#07B52A] font-semibold'>
                    saves N9,000
                  </span> */}
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
                <div className='flex flex-wrap items-center justify-start md:space-x-6'>
                  <AddToCart />
                  <BuyNow />
                </div>
                <BsHeart className='text-[#3EC1F9] ml-6 mr-2 md:text-xl text-3xl cursor-pointer' />
                <span className='uppercase text-[#3EC1F9]'>save for later</span>
              </div>
              <h1 className='bg-[#F5F5F5] p-2 mt-2 text-[#212121DE] font-medium'>
                Sold by <span className='text-[#3EC1F9]'>{store?.name}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div className='my-5'>
          <ul className='inline-flex  pt-10 pb-5 capitalize'>
            <li className='px-4 py-2 -mb-px font-semibold text-black border-b-2 border-blue-500 rounded-t opacity-80'>
              <span>description</span>
            </li>
            <li className='px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-gray-400 rounded-t opacity-50'>
              <span>specification</span>
            </li>
            <li className='px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-gray-400 rounded-t opacity-50'>
              <span>review</span>
            </li>
          </ul>
          <div>
            <p className='p-0'>{product?.description}</p>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            similar product
          </h4>
          <div className='overflow-x-auto flex items-center lg:justify-start space-x-4 scrollbar-hide'>
            {similarProducts.map((item) => (
              <ProductItem
                key={item?.id}
                image={item?.image}
                description={item?.name}
                price={item?.price}
                salePrice={item.sale_price}
                toCart
              />
            ))}
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            Recently viewed
          </h4>
          <div className='overflow-x-auto flex items-center lg:justify-start space-x-4 scrollbar-hide'>
          
          </div>
        </div> */}
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='my-10'>
          <h4 className='uppercase font-semibold border-b-2 pb-2 mb-2 border-gray-200'>
            store with similar product in your location
          </h4>
          <div className='grid grid-cols-1 lg:grid-cols-3 rounded  gap-6 justify-items-stretch items-center'>
            {similarStores &&
              similarStores.map((stores) => {
                return (
                  <SimilarStore
                    key={stores.id}
                    id={stores.id}
                    phone={stores.phone}
                    workingHours={stores.working_hours}
                    icon={<FaStore size={30} />}
                    name={stores.name}
                    distance=''
                    location={stores.address}
                  />
                );
              })}
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </Layout>
  );
};

export default ProductDetails;
