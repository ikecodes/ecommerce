import React from 'react';
import Layout from '../Layouts/Layout';
import ProductImage from '../assets/images/product-placeholder.jpg';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <div className='py-10 px-5'>
        <div className='overflow-x-scroll scrollbar-hide'>
          <table class=' m-auto  w-[50rem] capitalize'>
            <thead className='text-left border-b border-gray-300 mb-4'>
              <tr>
                <th></th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='divide-y space-y-4'>
              {arr.map((item) => (
                <tr>
                  <td>
                    <div className='h-24 w-24'>
                      <img
                        className='h-full w-full object-cover'
                        src={ProductImage}
                        alt='product'
                      />
                    </div>
                  </td>
                  <td>
                    <h4 className='font-semibold text-sm'>Fliper phone</h4>
                    <h4 className='text-sm'>high grade fliper phone</h4>
                  </td>
                  <td className='text-[#3EC1F9] font-semibold text-md'>
                    N9,000
                  </td>
                  <td>
                    <div className='flex  justify-start items-center space-x-2'>
                      <FaPlus className='bg-[#3EC1F9] p-1 cursor-pointer' />
                      <span>3</span>
                      <FaMinus className='bg-[#3EC1F9] p-1 cursor-pointer' />
                    </div>
                  </td>
                  <td className='text-red-400 cursor-pointer'>remove</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-8 px-20'>
          <div className='flex capitalize items-center justify-between border-2 border-gray-300 space-x-4 p-2 px-4'>
            <span className='text-gray-400'>discount</span>
            <span className='font-semibold'>N9,000</span>
          </div>
          <div className='flex capitalize items-center justify-between border-2 border-gray-300 space-x-4 p-2 px-4'>
            <span className='text-gray-400'>delivery</span>
            <span className='font-semibold'>N9,000</span>
          </div>
          <div className='flex capitalize items-center justify-between border-2 border-gray-300 space-x-4 p-2 px-4'>
            <span className='text-gray-400'>subtotal</span>
            <span className='font-semibold'>N9,000</span>
          </div>
          <div className='flex capitalize items-center justify-between border-2 border-gray-300 space-x-4 p-2 px-4'>
            <span className='text-[#3EC1F9]'>total</span>
            <span className='font-semibold'>N9,000</span>
          </div>
        </div>
        <div className='py-4 lg:px-40'>
          <p className='font-semibold mb-2'>
            if you have promotion code, please enter it here
          </p>
          <div className='flex items-center flex-wrap '>
            <div className='flex items-center w-full md:w-3/4 h-12'>
              <input
                type='text'
                placeholder='Please enter promotion code'
                className='border-2 border-gray-400 w-3/4  bg-gray-100 rounded-l-xl pl-2 border-r-0 focus:outline-none h-full'
              />
              <button className='bg-[#3EC1F9] rounded-r-xl border-l-0 h-full px-1 text-white'>
                apply discount
              </button>
            </div>
            <div className='flex bg-[#3EC1F9] rounded-full w-48 p-1 items-center mt-2 lg:mt-0  justify-center'>
              <button className='text-white text-xs uppercase p-2 font-semibold '>
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
