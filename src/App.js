import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Locator from './pages/Locator';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/welcome' exact element={<Welcome />} />
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
