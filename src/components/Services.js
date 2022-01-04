import React from 'react';

const Services = ({ icon, text, title }) => {
  return (
    <div className='flex  bg-white rounded p-4 items-center space-x-4'>
      {icon}
      <div>
        <p className='font-semibold'>{text}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Services;
