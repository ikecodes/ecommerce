import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';
// import Toast from '../utils/Toast';

export const getStates = createAsyncThunk(
  'store/getStates',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getStates();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getLga = createAsyncThunk(
  'store/getLga',
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getLga(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getStores = createAsyncThunk(
  'store/getStores',
  async (args, { rejectWithValue }) => {
    const { state, lga } = args;
    try {
      const {
        data: { data },
      } = await api.getStores(state, lga);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  states: [],
  lga: [],
  stores: null,
  store: null,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStore: (state, { payload }) => {
      state.store = state.stores.find((store) => store.id === payload);
      localStorage.setItem('store', JSON.stringify(state.store));
    },
  },
  extraReducers: {
    [getStores.fulfilled]: (state, { payload }) => {
      state.stores = payload;
    },
    [getLga.fulfilled]: (state, { payload }) => {
      state.lga = [{ id: '12345', name: 'select lga' }, ...payload];
    },
    [getStates.fulfilled]: (state, { payload }) => {
      state.states = [{ id: '1234', name: 'select state' }, ...payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStore } = storeSlice.actions;

export default storeSlice.reducer;
