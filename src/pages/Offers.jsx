import React, { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import OfferCard from '../components/OfferCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { offerService } from '../services/offerService';
import { useSEO } from '../utils/useSEO';

const Offers = () => {
  useSEO('Latest Offers & Coupons', 'Get the best discounts on Exide, Amaron, and other premium batteries with our latest promo codes.');
  
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await offerService.getOffers();
        setOffers(data);
      } catch (err) {
        console.error('Error fetching offers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  return (
    <main className="main-content">
      <PageBanner title="Latest Offers" breadcrumbs={[{ label: 'Offers' }]} />
      
      <div className="offers-area section-space-y-axis-100">
        <div className="container">
          {loading ? (
            <LoadingSkeleton type="product" count={3} />
          ) : offers.length > 0 ? (
            <div className="row g-4">
              {offers.map((offer, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                  <OfferCard offer={offer} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title="No Offers Available" message="There are no promotional offers at this time. Check back later!" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Offers;
