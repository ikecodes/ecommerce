import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' exact element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
