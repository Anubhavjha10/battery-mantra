import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const EmptyWishlist = () => {
  useSEO('Wishlist is Empty', 'Your wishlist is currently empty. Save items you like to buy them later.');

  return (
    <main className="main-content">
      <PageBanner title="My Wishlist" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Wishlist' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="Your Wishlist is Empty"
          message="You haven't saved any batteries to your wishlist. Browse our store to bookmark products you like."
          icon="pe-7s-like"
          actionText="Explore Products"
          actionPath="/shop"
        />
      </div>
    </main>
  );
};

export default EmptyWishlist;
