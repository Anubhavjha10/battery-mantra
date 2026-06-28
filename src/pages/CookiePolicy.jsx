import React from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const CookiePolicy = () => {
  useSEO('Cookie Policy', 'Review guidelines explaining our cookies settings, tracking practices, and browser configurations.');

  return (
    <main className="main-content">
      <PageBanner title="Cookie Policy" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Cookie Policy' }]} />

      <div className="cookie-policy-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="border rounded bg-white p-8 p-md-10">
                <h2 className="text-charcoal mb-6 font-weight-bold">Cookie & Tracking Information Policy</h2>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">1. What are Cookies?</h4>
                  <p className="text-muted leading-relaxed">
                    Cookies are small text files stored on your computer or mobile device when you browse websites. They help websites remember your preferences, cart contents, account details, and analyze user interactions to offer a personalized shopping journey.
                  </p>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">2. How We Use Cookies</h4>
                  <p className="text-muted leading-relaxed">
                    We use cookies to:
                  </p>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'disc' }}>
                    <li className="mb-1">Keep you logged in to your account.</li>
                    <li className="mb-1">Maintain items in your shopping cart across browser sessions.</li>
                    <li className="mb-1">Remember regional selections like your state and city.</li>
                    <li className="mb-1">Gather anonymous traffic metrics to optimize site performance and design.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h4 className="font-weight-bold text-primary mb-3">3. Categories of Cookies We Use</h4>
                  <ul className="text-muted ps-4 mb-3" style={{ listStyleType: 'decimal' }}>
                    <li className="mb-2">
                      <strong className="text-charcoal">Essential Cookies:</strong> Necessary to enable security, login validation, and basket management. The site cannot function without these.
                    </li>
                    <li className="mb-2">
                      <strong className="text-charcoal">Functional Cookies:</strong> Used to recognize you when you return to our website and remember settings like language and location.
                    </li>
                    <li className="mb-2">
                      <strong className="text-charcoal">Analytical Cookies:</strong> Help us monitor traffic volumes, popular products, and technical issues.
                    </li>
                  </ul>
                </section>

                <section className="mb-0">
                  <h4 className="font-weight-bold text-primary mb-3">4. Managing Your Choices</h4>
                  <p className="text-muted leading-relaxed">
                    Most modern web browsers allow you to control cookie permissions via settings. You can choose to block all cookies, reject third-party cookies, or clear history when you close your browser.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Please note that deleting or disabling essential cookies might log you out, empty your cart, and restrict access to checkout features on Battery Mantra.
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

export default CookiePolicy;
