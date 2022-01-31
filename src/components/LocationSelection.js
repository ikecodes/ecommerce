import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLga, getStates } from '../slices/storeSlice';

const LocationSelector = ({ showLocator, handleShowLocator }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const states = useSelector((state) => state.store.states);
  const lgas = useSelector((state) => state.store.lga);
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
    console.log(state, lga);
  };
  return (
    <div
      onClick={handleShowLocator}
      className={`fixed noShow bg-[rgb(0,0,0,0.5)] ${
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
            id='lga'
            onChange={(e) => setLga(e.target.value)}
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
    </div>
  );
};

export default LocationSelector;
