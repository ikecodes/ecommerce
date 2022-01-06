import React from 'react';
import Layout from '../Layouts/Layout';
import ProductImage from '../assets/images/product-placeholder.jpg';
import { AddToCart, BuyNow } from '../components/Buttons';

const Favorites = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Layout>
      <div className='p-2 md:p-10 overflow-x-scroll scrollbar-hide'>
        <table class=' m-auto w-3/4 capitalize'>
          <thead className='text-left border-b border-gray-300 mb-4'>
            <tr>
              <th></th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='divide-y'>
            {arr.map((item) => (
              <tr>
                <td>
                  <img
                    className='h-24 shrink-0'
                    src={ProductImage}
                    alt='product'
                  />
                </td>
                <td>
                  <h4 className='font-semibold text-sm'>Fliper phone</h4>
                  <h4 className='text-xs'>high grade fliper phone</h4>
                </td>
                <td className='text-[#3EC1F9] font-semibold text-md'>N9,000</td>
                <td>
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
    </Layout>
  );
};

export default Favorites;
