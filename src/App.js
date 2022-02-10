import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getBanners,
  getProductsByStore,
  getProductsByBest,
} from './slices/productSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Locator from './pages/Locator';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
function App() {
  const storeId = localStorage.getItem('storeId');
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  let id = storeId || '';
  useEffect(() => {
    dispatch(getBanners());
    dispatch(getProductsByBest(id));
    if (storeId) return dispatch(getProductsByStore(id));
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/productDetails' exact element={<ProductDetails />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/favorites' exact element={<Favorites />} />
        <Route path='/locator' exact element={<Locator />} />
      </Routes>
    </Router>
  );
}

export default App;
