import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../slices/productSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <ul className='ml-10 space-y-3'>
        {categories &&
          categories.map((category) => (
            <li key={category.name}>
              <button
                className='capitalize font-normal text-medium whitespace-nowrap'
                onClick={() => {
                  dispatch(
                    getProductsByCategory({
                      category: category.name,
                      id: id,
                    })
                  );
                  navigate('/products');
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
