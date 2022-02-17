import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../slices/productSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const categories = useSelector((state) => state.product.categories);
  const storeId = localStorage.getItem('storeId');
  let id = storeId || '';
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // absolute top-0 left-0 flex justify-center h-full w-full bg-white
  return (
    <div className='bg-white'>
      <ul className='ml-10 space-y-2'>
        {categories &&
          categories.map((category) => (
            <li
              key={category.name}
              className={`bg-[#fafafa] p-[3px] ${
                active === category ? 'border-l-2 border-[#3EC1F9]' : ''
              }`}
              onClick={() => {
                setActive(category);
                dispatch(
                  getProductsByCategory({
                    category: category.name,
                    id: id,
                  })
                );
                navigate('/products');
              }}
            >
              <button className='capitalize font-normal text-medium whitespace-nowrap'>
                {category.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
