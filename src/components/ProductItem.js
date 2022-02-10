import React from 'react';
import { useDispatch } from 'react-redux';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AddToCart } from './Buttons';
import { addToFavorites } from '../slices/favoriteSlice';
const ProductItem = ({
  id,
  image,
  description,
  price,
  toCart,
  availability,
  home,
  salePrice,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='relative'>
      <Link to={`/productDetails?id=${id}`}>
        <div
          className={` ${
            home ? 'w-full h-40 lg:w-full lg:h-60' : 'w-60 h-60'
          } mb-2`}
        >
          <img
            className='object-cover h-full w-full'
            src={image}
            alt='Product'
          />
        </div>
      </Link>
      <span className='bg-[#3EC1F9] p-2 absolute top-4 rounded-l-full right-0 text-white'>
        Out of stock
      </span>

      <div className='font-medium text-md mb-2.5  text-[#000000DE]'>
        {description}
      </div>
      <span className='text-[#3EC1F9] font-bold mr-2 pt-8'>N{price}</span>
      <span className='text-gray-200 line-through mb-2.5 font-bold text-sm p-50'>
        N{salePrice}
      </span>
      <div className='pb-2'></div>
      {toCart && (
        <div className='flex items-center  justify-between'>
          <AddToCart quantity={1} id={id} />
          <BsHeart
            className='text-[#3EC1F9] cursor-pointer'
            onClick={() => dispatch(addToFavorites(id))}
          />
        </div>
      )}

      {availability && (
        <p className='mt-2.5 text-[#07B52A] font-medium'>
          Available in {availability} stores
        </p>
      )}
    </div>
  );
};

export default ProductItem;
