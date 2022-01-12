import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { categories } from '../constants/menu';

const Categories = ({ showFilter }) => {
  return (
    <div className='absolute top-0 left-0 flex justify-center h-full w-full bg-white'>
      <div>
        <ul className='space-y-2'>
          {categories.map((category) => (
            <div className='flex items-center'>
              <li className='capitalize font-normal text-medium'>
                {category.name}
              </li>
              {category.add && (
                <FaPlus
                  size={10}
                  className='ml-auto font-normal text-gray-900'
                />
              )}
            </div>
          ))}
        </ul>
        {showFilter && (
          <div className='w-56 h-56 mt-8'>
            <h4 className='font-semibold uppercase mb-4'>filter</h4>
            <div className='flex items-start  flex-wrap gap-2 capitalize'>
              <button className='bg-[#DBDBDB]  p-1 px-2'>sneakers</button>
              <button className='bg-[#DBDBDB]  p-1 px-2'>calendar</button>
              <button className='bg-[#DBDBDB]  p-1 px-2'>caps</button>
              <button className='bg-[#DBDBDB]  p-1 px-2'>clothes</button>
              <button className='bg-[#DBDBDB]  p-1 px-2'>shoes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
