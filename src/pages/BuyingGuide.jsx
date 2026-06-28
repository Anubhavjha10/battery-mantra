import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const BuyingGuide = () => {
  useSEO('Battery Buying Guide', 'Comprehensive guide detailing how to choose the right battery specifications for your car or home power backup.');

  return (
    <main className="main-content">
      <PageBanner title="Battery Buying Guide" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Buying Guide' }]} />

      <div className="buying-guide-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">How to Choose the Right Battery: A Complete Guide</h2>
                <p className="text-muted leading-relaxed mb-6">
                  A vehicle or inverter battery is the heart of its electrical system. Choosing the wrong specification can lead to early failure, electrical issues, or physical installation blockages. Follow our guide to make an informed choice.
                </p>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Check Your Vehicle / Inverter Manual</h4>
                  <p className="text-muted leading-relaxed">
                    Always start with the specifications detailed in your owner's manual. Look for:
                  </p>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">**Ah Rating (Ampere-Hour):** Measures how much energy a battery stores. (e.g., 35Ah, 45Ah, 80Ah for cars; 150Ah, 200Ah for inverters).</li>
                    <li className="mb-1">**Physical Dimensions (Length x Width x Height):** Ensure the battery fits comfortably in the tray.</li>
                    <li className="mb-1">**Terminal Layout:** Check if the positive terminal is on the left (L) or right (R) side.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Cold Cranking Amps (CCA)</h4>
                  <p className="text-muted leading-relaxed">
                    For automotive vehicles, CCA is vital. It measures the battery's capability to crank the engine in extremely cold environments. Higher CCA ratings ensure reliable starting performance during winters.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Battery Chemistry & Type</h4>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'decimal' }}>
                    <li className="mb-2">
                      <strong className="text-charcoal">Maintenance-Free (VRLA/SMF):</strong> Sealed design requiring no top-ups. Popular for two-wheelers and modern cars.
                    </li>
                    <li className="mb-2">
                      <strong className="text-charcoal">Flooded Lead-Acid:</strong> Traditional design that requires periodic distilled water top-ups.
                    </li>
                    <li className="mb-2">
                      <strong className="text-charcoal">Tubular Batteries:</strong> Best suited for long-lasting, deep discharge back-ups (preferred for home inverters).
                    </li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">4. Warranty & Brand Reputation</h4>
                  <p className="text-muted leading-relaxed">
                    Always opt for trusted brands such as Amaron, Exide, or Luminous. Look closely at the warranty split:
                  </p>
                  <p className="text-muted leading-relaxed">
                    * **Free Replacement Period:** The manufacturer replaces the battery free of charge in case of failure.
                    <br />
                    * **Pro-rata Period:** A discount is offered on a new battery depending on how many months have elapsed.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">5. Recycling Benefits</h4>
                  <p className="text-muted leading-relaxed">
                    Don't throw away your old scrap battery! Lead-acid batteries are highly recyclable. Trading in your old battery gets you significant buyback rewards or discounts at checkout.
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

export default BuyingGuide;
