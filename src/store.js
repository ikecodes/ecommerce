import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import storeReducer from './slices/storeSlice';
import favoriteReducer from './slices/favoriteSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    store: storeReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
});
