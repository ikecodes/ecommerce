import React from 'react';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import StartOrder from '../components/StartOrder';
const Layout = ({ children }) => {
  return (
    <div>
      <StartOrder />
      <Header />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
