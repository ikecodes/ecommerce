import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import NavBarLg from './NavBarLg';
const Layout = ({ children }) => {
  const stateId = localStorage.getItem('stateId');
  const lgaId = localStorage.getItem('lgaId');
  const [showLocator, setShowLocator] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleShowLocator = () => {
    setShowLocator((prev) => !prev);
  };
  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div>
      {!stateId && !lgaId && <Welcome handleShowLocator={handleShowLocator} />}
      <Header
        showLocator={showLocator}
        handleShowLocator={handleShowLocator}
        showNav={showNav}
        handleShowNav={handleShowNav}
      />
      <NavBarLg />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
