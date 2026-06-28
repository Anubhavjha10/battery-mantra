import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const ShippingPolicy = () => {
  useSEO('Shipping Policy', 'Learn more about shipping rates, methods, delivery areas, and schedules on Battery Mantra.');

  return (
    <main className="main-content">
      <PageBanner title="Shipping Policy" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Shipping Policy' }]} />

      <div className="shipping-policy-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Battery Mantra Shipping & Delivery Policy</h2>
                
                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Shipping Coverage</h4>
                  <p className="text-muted leading-relaxed">
                    We currently offer doorstep delivery and professional battery installation services across all major cities and states in India. Shipping options depend on location availability, which can be verified using our Pincode Checker tool.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Estimated Delivery Timelines</h4>
                  <p className="text-muted leading-relaxed">
                    Under normal circumstances:
                  </p>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">Metro Cities: 4 to 24 hours depending on the selection of express setup.</li>
                    <li className="mb-1">Tier-2 & Tier-3 Cities: 24 to 48 hours.</li>
                    <li className="mb-1">Other Locations: 2 to 5 business days.</li>
                  </ul>
                  <p className="text-muted leading-relaxed">
                    Express installation orders placed before 4:00 PM are typically completed on the same calendar day.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Delivery & Installation Fees</h4>
                  <p className="text-muted leading-relaxed">
                    Standard shipping and installation are absolutely free for order sums exceeding ₹1,500. Orders below this threshold are subject to a nominal delivery charge based on the destination and product size.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">4. Delivery Inspection</h4>
                  <p className="text-muted leading-relaxed">
                    All battery products should be visually inspected upon receipt to ensure there is no visible damage, leakage, or cracks. Our installation executive will test the voltage and charge rate in your presence before completing the booking.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">5. Delivery Delays</h4>
                  <p className="text-muted leading-relaxed">
                    In case of severe weather conditions, national holidays, local strikes, or other unexpected incidents, delivery timelines might get extended. Customers will be kept updated via email, SMS, and WhatsApp alerts.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShippingPolicy;
