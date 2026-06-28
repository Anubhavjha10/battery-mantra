import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const EmptyCart = () => {
  useSEO('Shopping Cart is Empty', 'Your shopping cart is currently empty. Shop the best deals on batteries now.');

  return (
    <main className="main-content">
      <PageBanner title="Shopping Cart" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Cart' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="Your Shopping Cart is Empty"
          message="You have no items in your cart. Start shopping to find high-performance batteries for your vehicles."
          icon="pe-7s-shopbag"
          actionText="Shop Batteries Now"
          actionPath="/shop"
        />
      </div>
    </main>
  );
};

export default EmptyCart;
