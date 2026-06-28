import React from 'react';
import { getAssetUrl, brandText } from '../utils/helpers';
import { useSEO } from '../utils/useSEO';

const Maintenance = () => {
  useSEO('Scheduled Maintenance', 'Battery Mantra is undergoing scheduled system upgrades. We will return shortly!');

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-6 bg-light"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center p-8 p-md-10 border rounded bg-white shadow-sm max-width-600 w-100">
        <div className="mb-6">
          <img
            src={getAssetUrl('assets/images/logo/dark.png')}
            alt="Battery Mantra Logo"
            className="img-fluid mx-auto"
            style={{ maxHeight: '60px' }}
          />
        </div>

        <div className="mb-4">
          <i className="pe-7s-tools text-primary" style={{ fontSize: '5rem' }}></i>
        </div>

        <h2 className="text-charcoal font-weight-bold mb-3">Under Scheduled Maintenance</h2>
        <p className="text-muted leading-relaxed mb-6">
          We are currently updating our systems to improve your shopping experience. {brandText('Battery Mantra')} will be back online shortly. We apologize for any inconvenience caused!
        </p>

        <div className="border-top pt-6 text-muted small">
          <p className="mb-1">
            Need urgent assistance? Call our emergency support hotline:
          </p>
          <a href="tel:09200920051" className="text-primary font-weight-bold" style={{ fontSize: '1.2rem' }}>
            09200920051
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
