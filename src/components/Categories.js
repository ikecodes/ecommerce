import React from 'react';
import { categories } from '../constants/menu';

const Categories = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-center h-full w-full bg-white'>
      <ul className='space-y-2'>
        {categories.map((category) => (
          <li className='capitalize font-medium text-lg'>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
