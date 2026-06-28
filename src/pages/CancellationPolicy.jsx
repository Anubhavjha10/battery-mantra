import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const CancellationPolicy = () => {
  useSEO('Cancellation Policy', 'Read guidelines on how to cancel order bookings and schedule adjustments on Battery Mantra.');

  return (
    <main className="main-content">
      <PageBanner title="Cancellation Policy" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Cancellation Policy' }]} />

      <div className="cancellation-policy-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Order & Service Cancellation Policy</h2>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Order Cancellations</h4>
                  <p className="text-muted leading-relaxed">
                    You can cancel your battery order anytime before it has been dispatched from our local outlet. To cancel, please visit your account dashboard, view the order details, and hit the cancel button, or reach out to our support helpline.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Dispatch Exceptions</h4>
                  <p className="text-muted leading-relaxed">
                    Once the order is dispatched or the installation executive has departed for your address, cancellations cannot be processed directly. A flat shipping refusal charge of **₹250** may apply if you decline delivery at your doorstep.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Service & Installation Bookings</h4>
                  <p className="text-muted leading-relaxed">
                    Doorstep diagnostics, battery maintenance, or installation requests can be rescheduled or cancelled free of charge up to **2 hours** before the selected time slot. Cancellations within the 2-hour window are subject to a late fee of **₹150**.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">4. Cancellation Refunds</h4>
                  <p className="text-muted leading-relaxed">
                    Upon a successful cancellation, your prepaid amount will be refunded automatically to your payment source. Reversal timeframes range from:
                  </p>
                  <ul className="text-muted ps-4 mt-2" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">UPI & Wallets: 1 to 2 business days.</li>
                    <li className="mb-1">Credit / Debit Cards & Net Banking: 3 to 5 business days.</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CancellationPolicy;
