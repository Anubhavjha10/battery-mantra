import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const BatteryCare = () => {
  useSEO('Battery Care & Maintenance Tips', 'Learn essential maintenance tips to extend your car and inverter battery life.');

  return (
    <main className="main-content">
      <PageBanner title="Battery Care Tips" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Battery Care' }]} />

      <div className="battery-care-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Essential Battery Care & Safety Guidelines</h2>
                <p className="text-muted leading-relaxed mb-6">
                  Simple, proactive maintenance can double the life of your lead-acid battery and prevent unexpected breakdowns. Follow these safety instructions to keep your batteries in peak health.
                </p>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. Periodic Electrolyte Level Verification</h4>
                  <p className="text-muted leading-relaxed">
                    For flooded and tubular batteries, regularly inspect the water levels. The electrolyte level should always remain between the minimum and maximum level indicators.
                  </p>
                  <p className="text-muted leading-relaxed">
                    **Never use tap water or mineral water** for top-ups, as impurities can damage the lead plates. Only use battery-grade distilled water.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. Terminal Cleaning & Corrosion Removal</h4>
                  <p className="text-muted leading-relaxed">
                    Over time, white or blue powdery deposits (lead sulfate) can accumulate on the terminal posts, restricting electric current.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Clean terminals using a wire brush and a paste of warm water and baking soda. Once clean, apply a thin layer of petroleum jelly or terminal spray to prevent future corrosion.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Keep the Battery Securely Clamped</h4>
                  <p className="text-muted leading-relaxed">
                    Excessive vibration is one of the primary causes of internal plate damage. Ensure the holding bracket or clamp is tight and holding the battery firmly in place.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">4. Do Not Deeply Discharge Your Battery</h4>
                  <p className="text-muted leading-relaxed">
                    Frequently running your battery down to 0% charge causes sulfation and quickly degrades its capacity. Try to keep home inverter batteries within their specified load limits to prevent deep discharges.
                  </p>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">5. Winter Care for Stationary / Inactive Batteries</h4>
                  <p className="text-muted leading-relaxed">
                    If you are leaving a vehicle parked for more than two weeks, disconnect the negative terminal cable to prevent slow parasitic drains, or connect a smart trickle charger to maintain voltage levels.
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

export default BatteryCare;
