import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const HomeTwo = lazy(() => import('./pages/HomeTwo'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const LoginRegister = lazy(() => import('./pages/LoginRegister'));
const MyAccount = lazy(() => import('./pages/MyAccount'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Compare = lazy(() => import('./pages/Compare'));
const Shop = lazy(() => import('./pages/Shop'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// New Page Components
const Offers = lazy(() => import('./pages/Offers'));
const StoreLocator = lazy(() => import('./pages/StoreLocator'));
const TrackOrder = lazy(() => import('./pages/TrackOrder'));
const Warranty = lazy(() => import('./pages/Warranty'));
const BatteryInstallation = lazy(() => import('./pages/BatteryInstallation'));
const BecomeDealer = lazy(() => import('./pages/BecomeDealer'));
const CorporateOrders = lazy(() => import('./pages/CorporateOrders'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const CategoryListing = lazy(() => import('./pages/CategoryListing'));
const BrandListing = lazy(() => import('./pages/BrandListing'));
const VehicleListing = lazy(() => import('./pages/VehicleListing'));
const OrderDetails = lazy(() => import('./pages/OrderDetails'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const OrderFailed = lazy(() => import('./pages/OrderFailed'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const PageLoader = () => (
  <div className="preloader-wrapper text-center py-5 my-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Home Pages */}
            <Route index element={<Home />} />
            <Route path="index.html" element={<Navigate to="/" replace />} />
            <Route path="index-2" element={<HomeTwo />} />
            <Route path="index-2.html" element={<Navigate to="/index-2" replace />} />

            {/* Shop Routes */}
            <Route path="shop" element={<Shop layout="default" />} />
            <Route path="shop.html" element={<Navigate to="/shop" replace />} />
            <Route path="shop-grid-fullwidth" element={<Shop layout="grid-fullwidth" />} />
            <Route path="shop-grid-fullwidth.html" element={<Navigate to="/shop-grid-fullwidth" replace />} />
            <Route path="shop-right-sidebar" element={<Shop layout="right-sidebar" />} />
            <Route path="shop-right-sidebar.html" element={<Navigate to="/shop-right-sidebar" replace />} />
            <Route path="shop-list-fullwidth" element={<Shop layout="list-fullwidth" />} />
            <Route path="shop-list-fullwidth.html" element={<Navigate to="/shop-list-fullwidth" replace />} />
            <Route path="shop-list-left-sidebar" element={<Shop layout="list-left-sidebar" />} />
            <Route path="shop-list-left-sidebar.html" element={<Navigate to="/shop-list-left-sidebar" replace />} />
            <Route path="shop-list-right-sidebar" element={<Shop layout="list-right-sidebar" />} />
            <Route path="shop-list-right-sidebar.html" element={<Navigate to="/shop-list-right-sidebar" replace />} />

            {/* Single Product Routes */}
            <Route path="single-product" element={<SingleProduct style="default" />} />
            <Route path="single-product.html" element={<Navigate to="/single-product" replace />} />
            <Route path="single-product-variable" element={<SingleProduct style="variable" />} />
            <Route path="single-product-variable.html" element={<Navigate to="/single-product-variable" replace />} />
            <Route path="single-product-group" element={<SingleProduct style="group" />} />
            <Route path="single-product-group.html" element={<Navigate to="/single-product-group" replace />} />
            <Route path="single-product-affiliate" element={<SingleProduct style="affiliate" />} />
            <Route path="single-product-affiliate.html" element={<Navigate to="/single-product-affiliate" replace />} />
            <Route path="single-product-sale" element={<SingleProduct style="sale" />} />
            <Route path="single-product-sale.html" element={<Navigate to="/single-product-sale" replace />} />
            <Route path="single-product-sticky" element={<SingleProduct style="sticky" />} />
            <Route path="single-product-sticky.html" element={<Navigate to="/single-product-sticky" replace />} />

            {/* Pages */}
            <Route path="about" element={<About />} />
            <Route path="about.html" element={<Navigate to="/about" replace />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="faq.html" element={<Navigate to="/faq" replace />} />
            <Route path="login-register" element={<LoginRegister />} />
            <Route path="login-register.html" element={<Navigate to="/login-register" replace />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="my-account.html" element={<Navigate to="/my-account" replace />} />

            {/* Shopping flow */}
            <Route path="cart" element={<Cart />} />
            <Route path="cart.html" element={<Navigate to="/cart" replace />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout.html" element={<Navigate to="/checkout" replace />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="wishlist.html" element={<Navigate to="/wishlist" replace />} />
            <Route path="compare" element={<Compare />} />
            <Route path="compare.html" element={<Navigate to="/compare" replace />} />

            {/* Blog Routes */}
            <Route path="blog" element={<Blog layout="default" />} />
            <Route path="blog.html" element={<Navigate to="/blog" replace />} />
            <Route path="blog-listview" element={<Blog layout="listview" />} />
            <Route path="blog-listview.html" element={<Navigate to="/blog-listview" replace />} />
            <Route path="blog-detail" element={<BlogDetail />} />
            <Route path="blog-detail.html" element={<Navigate to="/blog-detail" replace />} />

            {/* Contact */}
            <Route path="contact" element={<Contact />} />
            <Route path="contact.html" element={<Navigate to="/contact" replace />} />

            {/* Dynamic B2C / B2B Page Routes */}
            <Route path="offers" element={<Offers />} />
            <Route path="store-locator" element={<StoreLocator />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="warranty" element={<Warranty />} />
            <Route path="battery-installation" element={<BatteryInstallation />} />
            <Route path="become-a-dealer" element={<BecomeDealer />} />
            <Route path="corporate-orders" element={<CorporateOrders />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="category/:slug" element={<CategoryListing />} />
            <Route path="brand/:slug" element={<BrandListing />} />
            <Route path="vehicle/:brand" element={<VehicleListing />} />
            <Route path="vehicle/:brand/:model" element={<VehicleListing />} />
            <Route path="product/:slug" element={<SingleProduct style="default" />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="order-details/:id" element={<OrderDetails />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="order-failed" element={<OrderFailed />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsConditions />} />

            {/* 404 Route */}
            <Route path="404" element={<NotFound />} />
            <Route path="404.html" element={<Navigate to="/404" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
