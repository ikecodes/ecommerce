import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToSubscribers } from '../slices/authSlice';
import Toast from '../utils/Toast';

const NewsLetter = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === '') return Toast('input your email first', 'info');
    dispatch(addToSubscribers(form));
  };
  return (
    <div
      className='bg-black md:mt-10 p-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center 
    items-center sm:space-y-5'
    >
      <p className='text-white lg:justify-self-end capitalize text-center md:w-3/4 mt-4'>
        subscribe to our newsletter to stay up to date with our latest news and
        product
      </p>
      <div className='my-4 lg:my-0'>
        <input
          type='email'
          name='email'
          className='rounded p-2 mr-2 w-40  md:w-72 focus:outline-none'
          placeholder='Enter email'
          onChange={(e) => setForm({ [e.target.name]: e.target.value })}
        />
        <button
          className='bg-[#3EC1F9] rounded capitalize focus:outline-none text-white p-2'
          onClick={handleSubmit}
        >
          subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
