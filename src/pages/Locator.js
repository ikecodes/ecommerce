import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates, getLga, getStores } from '../slices/storeSlice';
import { FaStore } from 'react-icons/fa';
import StoreLocation from '../components/StoreLocation';
import Layout from '../Layouts/Layout';
import Toast from '../utils/Toast';

const Locator = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const states = useSelector((state) => state.store.states);
  const lgas = useSelector((state) => state.store.lga);
  const stores = useSelector((state) => state.store.stores);

  useEffect(() => {
    dispatch(getStates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (state !== '') {
      dispatch(getLga(state));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lga === '') return Toast('Please select LGA', 'error');
    dispatch(getStores({ state, lga }));
  };
  return (
    <Layout>
      <div className='py-10  p-0 md:p-5 lg:px-20 '>
        <div className='flex items-center flex-wrap justify-center md:justify-between  md:space-x-4 space-y-4 pb-4 border-b-[0.5px]  border-gray-300 '>
          <h4 className='hidden md:block font-semibold uppercase text-md'>
            store locator
          </h4>
          <div className='h-14 flex items-center'>
            <label
              htmlFor='state'
              className='h-full py-auto  p-4 border-[0.5px] border-r-0 rounded-l-xl border-[#707070] bg-[#FAFAFA] '
            >
              State
            </label>
            <select
              name='state'
              id='state'
              onChange={(e) => setState(e.target.value)}
              className='h-full focus:outline-none  pl-2 pr-20 border-[0.5px] border-l-0 rounded-r-xl border-[#707070] font-semibold'
            >
              {states &&
                states.map((state) => {
                  return (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className='h-14  flex items-center'>
            <label
              htmlFor='lga'
              className='h-full py-auto px-6  p-4 border-[0.5px] border-r-0 rounded-l-xl border-[#707070] bg-[#FAFAFA]'
            >
              LGA
            </label>
            <select
              name='lga'
              onChange={(e) => setLga(e.target.value)}
              id='lga'
              className='h-full focus:outline-none pl-2 pr-20 border-[0.5px] border-l-0 rounded-r-xl border-[#707070] font-semibold'
            >
              {lgas &&
                lgas.map((lga) => {
                  return (
                    <option key={lga.id} value={lga.id}>
                      {lga.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <button
            className='bg-[#3EC1F9] ml-2 rounded-xl p-3 text-sm font-semibold uppercase mt-4 sm:mt-0 text-white'
            onClick={handleSubmit}
          >
            apply location
          </button>
        </div>

        {stores && stores.length > 0 && (
          <div className='my-8 space-y-8'>
            <h4 className='text-center mb-6 font-semibold'>
              These are the closest stores to your selected location, select any
              to start shopping
            </h4>

            {stores.map((store) => (
              <StoreLocation
                key={store.id}
                icon={<FaStore size={30} />}
                name={store.name}
                distance='500km away'
                location={store.address}
              />
            ))}
          </div>
        )}

        {stores && stores.length < 0 && (
          <div className='my-8 text-center'>
            <h4 className=' text-red-500 capitalize font-semibold'>
              There is no store currently near your location
            </h4>
            <h4 className='capitalize mb-6 '>
              drop your email to be notified when store is available
            </h4>

            <div className='my-4'>
              <input
                type='email'
                className='rounded p-2 mr-2 w-40 border-[0.5px] border-[#EDEDED]  md:w-72 focus:outline-none'
                placeholder='Enter email'
              />
              <button className='bg-[#3EC1F9] rounded capitalize focus:outline-none text-white p-2'>
                subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Locator;
