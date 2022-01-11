import React from 'react';

const Services = ({ icon, text, title }) => {
  return (
    <div className='flex lg:justify-self-stretch  bg-white rounded px-9 py-4 items-center space-x-4'>
      {icon}
      <div>
        <p className='font-semibold'>{text}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Services;
