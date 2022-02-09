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
export const getProductsByCategory = createAsyncThunk(
  'product/getProductsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.categoriesProduct(category);
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

export const getProductsByStore = createAsyncThunk(
  'product/getProductsByStore',
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getProductsByStore(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getProduct(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getSimilarProduct = createAsyncThunk(
  'product/getSimilarProduct',
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getSimilarProduct(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getSimilarStores = createAsyncThunk(
  'product/getSimilarStores',
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getSimilarStore(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const initialState = {
  loading: false,
  banners: [],
  products: [],
  catProducts: null,
  product: null,
  similarProducts: [],
  similarStores: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getSimilarStores.fulfilled]: (state, { payload }) => {
      state.similarStores = payload;
    },
    [getSimilarProduct.fulfilled]: (state, { payload }) => {
      state.similarProducts = payload;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.product = payload;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getProductsByStore.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getProductsByCategory.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getBanners.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.banners = payload;
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
