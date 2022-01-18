import React, { useState, useEffect } from 'react';
import HeaderBanner from '../assets/images/banner2.jpg';
import HeaderBanner2 from '../assets/images/banner-shoe.jpg';
import HeaderBanner3 from '../assets/images/Rolex-Watches-Wallpaper.jpg';
import Categories from './Categories';
const Carousel = () => {
  const imgArr = [
    {
      url: HeaderBanner,
      title: 'footwears',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad?',
    },
    {
      url: HeaderBanner2,
      title: 'bags',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad?',
    },
    {
      url: HeaderBanner3,
      title: 'watches',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt. Quis, ad?',
    },
  ];
  const getRand = () => Math.ceil(Math.random() * imgArr.length) - 1;
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(getRand());
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='flex h-[30vh] md:h-[70vh]'>
      <div className='bg-[#3EC1F9] hidden md:grid basis-1/4 shrink-1 grid place-content-center cursor-pointer  relative'>
        <span className='font-bold text-white'>ORDER NOW</span>
        <Categories />
      </div>
      <div className='grow relative'>
        <img
          className='h-full w-full object-cover'
          src={imgArr[image].url}
          alt='Header Banner'
        />
        <div className='absolute h-full w-full top-0 bg-[rgb(0,0,0,0.5)]'></div>
        <div className='absolute top-[50%] left-5 translate-y-[-50%] text-white'>
          <h1 className='text-4xl md:text-6xl capitalize font-bold'>
            {imgArr[image].title}
          </h1>
          <p className='mt-4 w-3/4 md:w-1/2 text-sm md:text-lg capitalize'>
            {imgArr[image].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
