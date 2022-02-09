import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStore } from '../slices/storeSlice';
import { getProductsByStore } from '../slices/productSlice';
import { FaStore } from 'react-icons/fa';
const StoreLocation = ({ id, phone, name, location, showBtn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectStore = () => {
    dispatch(setStore(id));
    localStorage.setItem('storeId', id);
    dispatch(getProductsByStore(id));
    navigate('/products');
  };
  return (
    <div className='justify-between rounded p-2 bg-[#FAFAFA] flex items-center flex-wrap space-y-4'>
      <div className='flex items-center space-x-2 mb-2'>
        <div className='bg-[#70707080] rounded-full p-2 ml-3'>
          <FaStore size={30} />
        </div>
        <div className='text-capitalize  space-y-3'>
          <h4 className=' font-medium p-0'>{name}</h4>
          <p className='m-0'>{location}</p>
          {/* <span className='text-gray-500'>{distance}</span> */}
        </div>
      </div>

      <div>
        <span className='text-gray-500'>working hours</span>
        <h4 className='text-md font-medium p-0'>monday - friday, 8am-5pm</h4>
      </div>
      <div>
        <span className='text-gray-500'>phone number</span>
        <h4 className='text-md font-medium p-0'>{phone}</h4>
      </div>

      {showBtn && (
        <div className='flex justify-end'>
          <button
            className='bg-[#3EC1F9] text-white p-1 rounded mt-2'
            onClick={handleSelectStore}
          >
            start shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreLocation;
