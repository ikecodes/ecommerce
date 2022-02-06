import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Categories from './Categories';
const Carousel = () => {
  const banners = useSelector((state) => state.product.banners);
  const getRand = () => Math.ceil(Math.random() * banners?.length) - 1;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(getRand());
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='flex h-[30vh] md:h-[70vh]'>
        <div className='hidden md:flex basis-1/4 shrink-1 justify-center'>
          {/* <span className='font-bold text-white'>ORDER NOW</span> */}
          <Categories />
        </div>
        <div className='grow relative'>
          <img
            className='h-full w-full object-cover'
            src={banners[index]?.image}
            alt='Header Banner'
          />
          <div className='absolute h-full w-full top-0 bg-[rgb(0,0,0,0.5)]'></div>
          <div className='absolute top-[50%] left-5 translate-y-[-50%] text-white'>
            <h1 className='text-4xl md:text-6xl capitalize font-bold'>
              {banners[index]?.title}
            </h1>
            <p className='mt-4 w-3/4 md:w-1/2 text-sm md:text-lg capitalize'>
              {banners[index]?.main_text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
