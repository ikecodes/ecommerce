import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';
// import Toast from '../utils/Toast';

export const getStates = createAsyncThunk(
  'auth/getStates',
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
  'auth/getLga',
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
  'auth/getStores',
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
  stores: [],
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [getStores.fulfilled]: (state, { payload }) => {
      state.stores = payload;
    },
    [getLga.fulfilled]: (state, { payload }) => {
      state.lga = payload;
    },
    [getStates.fulfilled]: (state, { payload }) => {
      state.states = [{ id: '1234', name: 'select state' }, ...payload];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default storeSlice.reducer;
