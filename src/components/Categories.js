import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../slices/productSlice';

const Categories = ({ showFilter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.product.categories);
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='absolute top-0 left-0 flex justify-center h-full w-full bg-white'>
      <div>
        <ul className='space-y-2'>
          {categories &&
            categories.map((category) => (
              <li key={category.name}>
                <button
                  className='capitalize font-normal text-medium whitespace-nowrap'
                  onClick={() => {
                    dispatch(getProductsByCategory(category.name));
                    navigate('/products');
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
