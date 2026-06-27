import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniCart from '../components/MiniCart';
import MobileMenu from '../components/MobileMenu';
import SearchModal from '../components/SearchModal';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="main-wrapper">
      {/* Header */}
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Pages Content */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Off-canvas Cart */}
      <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
