import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const PrivacyPolicy = () => {
  useSEO('Privacy Policy', 'Review Battery Mantra policies on customer data privacy, cookies, and protection measures.');

  return (
    <main className="main-content">
      <PageBanner title="Privacy Policy" breadcrumbs={[{ label: 'Privacy Policy' }]} />

      <div className="policy-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-4 font-weight-bold">1. Information We Collect</h3>
                <p className="text-muted mb-4">We collect personal data that you provide directly to us (e.g. name, email, vehicle information, delivery coordinates, billing details) when purchasing batteries or registering warranty policies.</p>

                <h3 className="mb-4 font-weight-bold">2. How We Use Your Information</h3>
                <p className="text-muted mb-4">Your contact information is used exclusively to fulfill purchases, process doorstep installation logistics, coordinate roadside emergency queries, and dispatch warranty claim certificates.</p>

                <h3 className="mb-4 font-weight-bold">3. Data Security</h3>
                <p className="text-muted mb-4">We deploy industry-standard secure socket layers (SSL) and database encryption to safeguard your credit card records, identity tokens, and transaction credentials from unauthorized access.</p>

                <h3 className="mb-4 font-weight-bold">4. Third-Party Sharing</h3>
                <p className="text-muted mb-0">We never lease or sell your details to marketing agencies. Information is only shared with shipping technicians and authorized merchant payment gateways to facilitate order delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
