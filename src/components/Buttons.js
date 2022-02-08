import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { FaCartPlus } from 'react-icons/fa';

export const AddToCart = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex bg-[#3EC1F9] rounded-full w-40  items-center  justify-center'>
      <FaCartPlus color='white' />
      <button
        className='text-white text-xs uppercase p-2 font-semibold'
        onClick={() =>
          dispatch(addToCart({ product_id: id, quantity: quantity }))
        }
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
