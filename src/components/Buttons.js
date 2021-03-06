import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { FaCartPlus } from 'react-icons/fa';
import Toast from '../utils/Toast';
export const AddToCart = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const storeId = localStorage.getItem('storeId');
  return (
    <div className='flex bg-[#3EC1F9] rounded-full w-40  items-center  justify-center'>
      <FaCartPlus color='white' />
      <button
        className='text-white text-xs uppercase p-2 font-semibold'
        onClick={() => {
          if (!storeId)
            return Toast(
              'you need to select a store from the store locator',
              'info'
            );
          dispatch(
            addToCart({ product_id: id, store_id: storeId, quantity: quantity })
          );
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export const BuyNow = () => {
  return (
    <div className='flex bg-white rounded-full border-[0.5px] border-[#3EC1F9] justify-center w-40 items-center'>
      <button className='text-[#3EC1F9]  text-xs uppercase p-2 font-semibold'>
        buy now
      </button>
    </div>
  );
};
