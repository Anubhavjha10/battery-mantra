import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const TermsConditions = () => {
  useSEO('Terms & Conditions', 'Review terms of service, warranty eligibility, delivery agreements, and store policies on Battery Mantra.');

  return (
    <main className="main-content">
      <PageBanner title="Terms & Conditions" breadcrumbs={[{ label: 'Terms & Conditions' }]} />

      <div className="terms-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-4 font-weight-bold">1. Agreement to Terms</h3>
                <p className="text-muted mb-4">By visiting or purchasing from the Battery Mantra platform, you agree to comply with our commercial store policies, delivery logistics rules, and warranty registration protocols.</p>

                <h3 className="mb-4 font-weight-bold">2. Pricing and Payments</h3>
                <p className="text-muted mb-4">All prices are shown in local currency (INR, USD, EUR depending on selection) and are inclusive of local taxes where specified. Payment must be cleared prior to shipping unless Cash on Delivery (COD) is chosen.</p>

                <h3 className="mb-4 font-weight-bold">3. Doorstep Delivery & Installation</h3>
                <p className="text-muted mb-4">Doorstep installation slots are subject to technician availability. While we aim to install within 2-4 hours, delays caused by road congestion or extreme weather conditions are not liable for compensation.</p>

                <h3 className="mb-4 font-weight-bold">4. Limitation of Liability</h3>
                <p className="text-muted mb-0">Battery Mantra is not liable for indirect vehicle engine damages caused by incorrect battery model selection by the user. Please consult the vehicle model index or contact our support team for suitability advice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsConditions;
