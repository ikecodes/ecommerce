import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import ProductImage from '../assets/images/product-placeholder.jpg';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { getCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(carts);
  return (
    <Layout>
      <div className='pb-12 px-5'>
        <div className='overflow-x-scroll scrollbar-hide m-auto lg:px-20'>
          <h1 className='uppercase font-medium mb-2'>my cart</h1>
          <table className='w-full'>
            <thead className='text-left border-b border-gray-300 mb-4'>
              <tr>
                <th className='p-4 font-medium'></th>
                <th className='p-4 font-medium'>Description</th>
                <th className='p-4 font-medium'>Price</th>
                <th className='p-4 font-medium'>Quantity</th>
                <th className='p-4 font-medium'></th>
              </tr>
            </thead>
            <tbody className='divide-y space-y-4 text-[#000000DE]'>
              {carts.length > 0 &&
                carts.map((item) => (
                  <tr key={item.id}>
                    <td className=''>
                      <div className='h-40 w-40'>
                        <img
                          className='h-full w-full object-cover'
                          src={ProductImage}
                          alt='product'
                        />
                      </div>
                    </td>
                    <td className='p-4'>
                      <h4 className='font-medium'>Fliper phone</h4>
                      <h4 className='text-[#7F7F7F] text-sm'>
                        high grade fliper phone
                      </h4>
                    </td>
                    <td className='text-[#3EC1F9] font-semibold text-md p-4'>
                      N9,000
                    </td>
                    <td className='p-4'>
                      <div className='flex  justify-start  space-x-2 p-4 flex-wrap'>
                        <span className='flex border-2 border-[#00000029] items-center'>
                          <FaPlus className='bg-[#3EC1F9] h-full p-1 text-xl cursor-pointer' />
                          <span className='px-2'>3</span>
                          <FaMinus className='bg-[#3EC1F9] h-full p-1 text-xl cursor-pointer' />
                        </span>
                        <span></span>
                      </div>
                    </td>
                    <td className='text-red-400 cursor-pointer'>remove</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 justify-content-between lg:px-24  gap-10'>
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
