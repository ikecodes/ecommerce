import React from 'react';
import Layout from '../Layouts/Layout';
import ProductImage from '../assets/images/product-placeholder.jpg';
import { AddToCart, BuyNow } from '../components/Buttons';

const Favorites = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <div className='py-10 px-5'>
        <div className='overflow-x-scroll scrollbar-hide m-auto lg:px-20'>
          <h1 className='uppercase font-semibold mb-2'>favourite</h1>
          <table class='w-full'>
            <thead className='text-left border-b border-gray-300 mb-4'>
              <tr>
                <th className='p-4'></th>
                <th className='p-4'>Description</th>
                <th className='p-4'>Price</th>
                <th className='p-4'>Action</th>
                <th className='p-4'></th>
              </tr>
            </thead>
            <tbody className='divide-y space-y-4'>
              {arr.map((item) => (
                <tr>
                  <td className='p-4'>
                    <div className='h-24 w-24'>
                      <img
                        className='h-full w-full object-cover'
                        src={ProductImage}
                        alt='product'
                      />
                    </div>
                  </td>
                  <td className='p-4'>
                    <h4 className='font-semibold'>Fliper phone</h4>
                    <h4 className=' text-[#7F7F7F] text-sm'>
                      high grade fliper phone
                    </h4>
                  </td>
                  <td className='text-[#3EC1F9] font-semibold text-md p-4'>
                    N9,000
                  </td>
                  <td className='p-4'>
                    <div className='flex flex-col justify-start space-y-2'>
                      <AddToCart />
                      <BuyNow />
                    </div>
                  </td>
                  <td className='text-red-400 cursor-pointer'>remove</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
