import React, { useState } from 'react';

const OfferCard = ({ offer }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card offer-card border rounded overflow-hidden shadow-sm h-100" style={{ backgroundColor: '#ffffff' }}>
      <div className="bg-primary text-white text-center p-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '140px' }}>
        <span className="display-6 font-weight-bold">{offer.discount}</span>
        <span className="text-uppercase tracking-wider font-weight-bold" style={{ fontSize: '0.9rem', opacity: '0.9' }}>DISCOUNT</span>
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <h4 className="card-title mb-2 text-dark font-weight-bold">{offer.title}</h4>
        <p className="card-text text-muted mb-4" style={{ fontSize: '0.95rem' }}>{offer.desc}</p>
        
        <div className="mt-auto">
          <div className="d-flex align-items-center justify-content-between p-2 bg-light border rounded mb-3">
            <code className="text-primary font-weight-bold px-2" style={{ fontSize: '1.1rem' }}>{offer.code}</code>
            <button
              onClick={handleCopy}
              className={`btn btn-sm ${copied ? 'btn-success' : 'btn-primary'} px-3`}
              style={{ fontSize: '0.85rem' }}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <span className="text-muted d-block text-center" style={{ fontSize: '0.8rem' }}>
            <i className="fa fa-calendar me-1"></i> {offer.expiry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
