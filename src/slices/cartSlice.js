import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Toast from '../utils/Toast';
import * as api from '../api/api';

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getCart();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (formdata, { rejectWithValue }) => {
    try {
      await api.addToCart(formdata);
      Toast('Added product to cart', 'success');
    } catch (error) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeFromCart(id);
      Toast('Removed product to cart', 'success');
      return id;
    } catch (error) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, { payload }) => {
      state.carts = payload;
    },
    [removeFromCart.fulfilled]: (state, { payload }) => {
      state.carts = state.cart.filter((item) => item.id !== payload);
    },
  },
});

export default cartSlice.reducer;
