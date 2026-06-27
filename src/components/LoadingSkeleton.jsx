import React from 'react';

const LoadingSkeleton = ({ type = 'product', count = 1 }) => {
  const renderSkeleton = (idx) => {
    switch (type) {
      case 'product':
        return (
          <div key={idx} className="product-item-skeleton p-4 border rounded mb-6" style={{ background: '#fcfcfc' }}>
            <div className="skeleton-image mb-4 bg-light rounded" style={{ height: '220px', width: '100%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
            <div className="skeleton-title mb-2 bg-light rounded" style={{ height: '20px', width: '70%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
            <div className="skeleton-price mb-2 bg-light rounded" style={{ height: '16px', width: '40%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
          </div>
        );
      case 'list':
      default:
        return (
          <div key={idx} className="list-skeleton p-4 border rounded mb-3 d-flex align-items-center" style={{ background: '#fcfcfc' }}>
            <div className="skeleton-avatar bg-light rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0, animation: 'pulse 1.5s infinite ease-in-out' }}></div>
            <div className="w-100">
              <div className="skeleton-line mb-2 bg-light rounded" style={{ height: '16px', width: '80%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
              <div className="skeleton-line bg-light rounded" style={{ height: '12px', width: '50%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
      <div className="row">
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className={type === 'product' ? 'col-lg-4 col-sm-6' : 'col-12'}>
            {renderSkeleton(idx)}
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadingSkeleton;
