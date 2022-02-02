import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import { AddToCart, BuyNow } from '../components/Buttons';
import { getFavorites, removeFromFavorites } from '../slices/favoriteSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  useEffect(() => {
    dispatch(getFavorites());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className='py-10 px-5'>
        <div className='overflow-x-scroll scrollbar-hide m-auto lg:px-20'>
          <h1 className='uppercase font-semibold mb-2'>favourite</h1>
          <table className='w-full'>
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
              {favorites &&
                favorites.map((item) => (
                  <tr key={item.id}>
                    <td className='p-4'>
                      <div className='h-24 w-24'>
                        <img
                          className='h-full w-full object-cover'
                          src={item.image}
                          alt='product'
                        />
                      </div>
                    </td>
                    <td className='p-4'>
                      <h4 className='font-semibold'>{item.name}</h4>
                      {/* <h4 className=' text-[#7F7F7F] text-sm'>
                        high grade fliper phone
                      </h4> */}
                    </td>
                    <td className='text-[#3EC1F9] font-semibold text-md p-4'>
                      N{item.price}
                    </td>
                    <td className='p-4'>
                      <div className='flex flex-col justify-start space-y-2'>
                        <AddToCart />
                        <BuyNow />
                      </div>
                    </td>
                    <td
                      className='text-red-400 cursor-pointer'
                      onClick={() => dispatch(removeFromFavorites(item.id))}
                    >
                      remove
                    </td>
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
