import React from 'react';

const LocationSelecto = ({ showLocator, handleShowLocator }) => {
  return (
    <div
      onClick={handleShowLocator}
      className={`absolute z-100 noShow bg-[rgb(0,0,0,0.5)] ${
        showLocator ? 'showAnim' : ''
      }`}
    >
      <div
        className={`noShow2 lg:mx-20 bg-white flex items-center flex-wrap justify-center p-10  md:space-x-4 gap-4 ${
          showLocator ? 'showAnim2' : ''
        } `}
      >
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
            className='h-full focus:outline-none  pl-2 pr-20 border-[0.5px] border-l-0 rounded-r-xl border-[#707070] font-semibold'
          >
            <option value='volvo'>Lagos</option>
            <option value='saab'>Abuja</option>
            <option value='mercedes'>Calabar</option>
            <option value='audi'>Enugu</option>
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
            id='lga'
            className='h-full focus:outline-none pl-2 pr-20 border-[0.5px] border-l-0 rounded-r-xl border-[#707070] font-semibold'
          >
            <option value='volvo'>Ikeja</option>
            <option value='saab'>Oshodi</option>
            <option value='mercedes'>Etti-osa-1</option>
            <option value='audi'>Etti-osa-2</option>
          </select>
        </div>

        <button className='bg-[#3EC1F9] ml-2 rounded-xl p-3 text-sm font-semibold uppercase mt-4 sm:mt-0 text-white'>
          apply location
        </button>
      </div>
    </div>
  );
};

export default LocationSelecto;
