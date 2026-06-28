import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const BatteryRecycling = () => {
  useSEO('Battery Recycling Program', 'Learn how you can recycle your old lead-acid batteries, get buyback discount rebates, and support environment initiatives.');

  return (
    <main className="main-content">
      <PageBanner title="Battery Recycling" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Recycling' }]} />

      <div className="battery-recycling-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Green Recycling Initiative & Scrap Battery Buyback</h2>
                
                <div className="alert alert-success d-flex align-items-center gap-3 p-4 mb-6">
                  <i className="fa fa-leaf text-success" style={{ fontSize: '2rem' }}></i>
                  <div>
                    <h5 className="font-weight-bold mb-0 text-success">Help Us Save the Environment!</h5>
                    <p className="mb-0 text-muted small">Lead-acid batteries are 99% recyclable when disposed of through certified channels.</p>
                  </div>
                </div>

                <p className="text-muted leading-relaxed mb-6">
                  At Battery Mantra, we are committed to reducing environmental pollution by implementing strict collection practices for old scrap batteries. Disposing of batteries in standard trash bins is illegal and releases toxic chemicals into the soil and water supply.
                </p>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Get Paid for Your Old Battery (Buyback Rebate)</h4>
                  <p className="text-muted leading-relaxed">
                    When purchasing a new battery on our store, select the **"Exchange Old Battery"** option. We will calculate a cash rebate discount based on the weight and Ah capacity of your scrap battery. 
                  </p>
                  <p className="text-muted leading-relaxed">
                    Our installation executive will pick up your old battery at the time of delivering your new purchase and hand over your refund or adjust it in the final invoice.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Drop-off Locator Network</h4>
                  <p className="text-muted leading-relaxed">
                    Even if you aren't purchasing a new battery, you can drop off old batteries at any of our authorized retail locations or retail partner stores. We guarantee safe storage and transit to certified smelting and recycling facilities.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">3. Corporate Battery Recycling Contracts</h4>
                  <p className="text-muted leading-relaxed">
                    For corporate offices, data centers, hospitals, and telecom towers, we provide bulk battery replacement, decommissioning, and recycling services. We issue official green disposal certificates complying with local environmental regulations.
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

export default BatteryRecycling;
