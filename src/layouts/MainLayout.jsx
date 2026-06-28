import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniCart from '../components/MiniCart';
import MobileMenu from '../components/MobileMenu';
import SearchModal from '../components/SearchModal';
import ScrollToTop from '../components/ScrollToTop';
import CallbackSection from '../components/CallbackSection';

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const excludePaths = [
    '/cart',
    '/checkout',
    '/login-register',
    '/my-account',
    '/order-success',
    '/order-failed',
    '/maintenance',
    '/404',
    '/profile',
    '/change-password',
    '/saved-addresses',
    '/my-orders',
    '/forgot-password',
    '/reset-password',
    '/empty-cart',
    '/empty-wishlist'
  ];

  const shouldShowCallback = !excludePaths.some(path => location.pathname.startsWith(path));

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

      {/* Reusable Global Callback Section */}
      {shouldShowCallback && (
        <div id="callback-area">
          <CallbackSection />
        </div>
      )}

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
