import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const ReturnRefundPolicy = () => {
  useSEO('Return & Refund Policy', 'Learn about return guidelines, refund times, and terms of product replacement on Battery Mantra.');

  return (
    <main className="main-content">
      <PageBanner title="Return & Refund Policy" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Return & Refund Policy' }]} />

      <div className="return-refund-policy-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Return, Replacement & Refund Guidelines</h2>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Return Window</h4>
                  <p className="text-muted leading-relaxed">
                    Due to the highly specialized nature of automotive and home power backup batteries, products can only be returned or replaced within **7 days** of delivery.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Return Eligibility</h4>
                  <p className="text-muted leading-relaxed">
                    To be eligible for a return or replacement:
                  </p>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">The battery must be unused, uninstalled, and in the same condition that you received it.</li>
                    <li className="mb-1">It must be in the original packaging with all labels, warranties, and accessories intact.</li>
                    <li className="mb-1">Proof of purchase (invoice) must be provided.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Non-Returnable Scenarios</h4>
                  <p className="text-muted leading-relaxed">
                    We cannot accept returns or offer refunds if:
                  </p>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">The battery was short-circuited or damaged due to improper installation by the customer.</li>
                    <li className="mb-1">The battery casing shows physical damage, dents, cracks, or burnt terminal posts.</li>
                    <li className="mb-1">The warranty card is lost or the serial number sticker has been defaced.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">4. Refund Process & Timeline</h4>
                  <p className="text-muted leading-relaxed">
                    Once the returned battery is received and inspected at our warehouse, we will notify you of the approval or rejection of your return.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Approved refunds will be processed via your original payment method (Credit/Debit Card, Net Banking, UPI, or Wallet) within **5 to 7 business days**. For cash-on-delivery orders, we will request bank account details to complete a direct bank transfer.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">5. Warranty Replacements</h4>
                  <p className="text-muted leading-relaxed">
                    If a product fails after the initial 7-day return window, it falls under the standard manufacturer warranty. In such cases, please submit a request on our **Warranty Claim** page to initiate troubleshooting or replacement.
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

export default ReturnRefundPolicy;
