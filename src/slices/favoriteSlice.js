import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Toast from '../utils/Toast';
import * as api from '../api/api';

export const getFavorites = createAsyncThunk(
  'favorite/getFavorites',
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await api.getFavorites();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'favorite/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      await api.addToFavorites(id);
      Toast('Added product to favorites', 'success');
    } catch (error) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);
export const removeFromFavorites = createAsyncThunk(
  'favorite/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeFromFavorites(id);
      Toast('Removed product to favorites', 'success');
      return id;
    } catch (error) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);

const initialState = {
  favorites: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getFavorites.fulfilled]: (state, { payload }) => {
      state.favorites = payload;
    },
    [removeFromFavorites.fulfilled]: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
});

export default productSlice.reducer;
