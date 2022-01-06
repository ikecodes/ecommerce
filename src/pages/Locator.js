import React from 'react';
import { FaStore } from 'react-icons/fa';
import StoreLocation from '../components/StoreLocation';
import Layout from '../Layouts/Layout';

const Locator = () => {
  return (
    <Layout>
      <div className='py-10  p-0 md:p-5 lg:px-20 '>
        <div className='flex items-center flex-wrap justify-center  md:space-x-4 border-b-[0.5px] pb-4 border-gray-300 '>
          <h4 className='hidden md:block font-semibold uppercase text-md'>
            store locator
          </h4>
          <div className='h-10 flex items-center'>
            <label
              for='state'
              className='h-full p-2 border-[0.5px] border-r-0 rounded-l border-[#707070] bg-[#FAFAFA] '
            >
              State
            </label>
            <select
              name='state'
              id='state'
              className='h-full focus:outline-none p-2 border-[0.5px] border-l-0 rounded-r border-[#707070] font-semibold'
            >
              <option value='volvo'>Lagos</option>
              <option value='saab'>Abuja</option>
              <option value='mercedes'>Calabar</option>
              <option value='audi'>Enugu</option>
            </select>
          </div>
          <div className='h-10  flex items-center'>
            <label
              for='lga'
              className='h-full p-2 border-[0.5px] border-r-0 rounded-l border-[#707070] bg-[#FAFAFA]'
            >
              LGA
            </label>
            <select
              name='lga'
              id='lga'
              className='h-full focus:outline-none p-2 border-[0.5px] border-l-0 rounded-r border-[#707070] font-semibold'
            >
              <option value='volvo'>Ikeja</option>
              <option value='saab'>Oshodi</option>
              <option value='mercedes'>Etti-osa-1</option>
              <option value='audi'>Etti-osa-2</option>
            </select>
          </div>

          <button className='bg-[#3EC1F9] rounded-xl p-2 text-sm font-semibold uppercase mt-4 sm:mt-0 text-white'>
            apply location
          </button>
        </div>

        <div className='my-8 space-y-8'>
          <h4 className='text-center mb-6 font-semibold'>
            These are the closest stores to your selected location, select any
            to start shopping
          </h4>

          <StoreLocation
            icon={<FaStore size={30} />}
            name='store africa'
            distance='500km away'
            location='21 kayode street abuleja,Lagos'
          />
          <StoreLocation
            icon={<FaStore size={30} />}
            name='store africa'
            distance='500km away'
            location='21 kayode street abuleja,Lagos'
          />
        </div>
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
      </div>
    </Layout>
  );
};

export default Locator;
