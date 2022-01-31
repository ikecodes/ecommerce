import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import storeReducer from './slices/storeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    store: storeReducer,
  },
});
