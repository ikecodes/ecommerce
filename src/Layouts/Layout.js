import React from 'react';
import Footer from './Footer';
import Header from './Header';
import NavBarLg from './NavBarLg';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBarLg />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
