import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import Toast from '../utils/Toast';
import * as api from '../api/api';

export const getBanners = createAsyncThunk(
  'product/getBanners',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getBanners();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  'product/getCategories',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getCategories();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getProducts();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const initialState = {
  banners: [],
  categories: [],
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.banners = payload;
    },
  },
});

export default productSlice.reducer;
