import React from 'react';

const Services = ({ icon, text, title }) => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start justify-self-stretch  bg-white rounded px-1 sm:px-9 py-4 items-center '>
      {icon}
      <div className='text-center lg:ml-4 mt-2 lg:mt-0 md:text-left'>
        <p className='font-semibold text-xs sm:text-base whitespace-nowrap'>
          {text}
        </p>
        <p className='text-xs sm:text-base'>{title}</p>
      </div>
    </div>
  );
};

export default Services;
