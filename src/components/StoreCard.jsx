import React from 'react';

const StoreCard = ({ store }) => {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name} ${store.address}`)}`;

  return (
    <div className="card store-card border rounded p-4 mb-4 shadow-sm h-100" style={{ backgroundColor: '#ffffff' }}>
      <h4 className="text-dark font-weight-bold mb-3">{store.name}</h4>
      <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
        <i className="fa fa-map-marker text-primary me-2" style={{ fontSize: '1.1rem' }}></i>
        {store.address}
      </p>
      
      <div className="border-top pt-3">
        <p className="mb-2 text-dark" style={{ fontSize: '0.9rem' }}>
          <i className="fa fa-clock-o text-muted me-2"></i>
          <strong>Hours:</strong> {store.hours}
        </p>
        <p className="mb-2 text-dark" style={{ fontSize: '0.9rem' }}>
          <i className="fa fa-phone text-muted me-2"></i>
          <strong>Phone:</strong> <a href={`tel:${store.phone}`} className="text-decoration-none text-dark">{store.phone}</a>
        </p>
        <p className="mb-3 text-dark" style={{ fontSize: '0.9rem' }}>
          <i className="fa fa-envelope-o text-muted me-2"></i>
          <strong>Email:</strong> <a href={`mailto:${store.email}`} className="text-decoration-none text-dark">{store.email}</a>
        </p>
      </div>

      <div className="mt-auto pt-2">
        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="fa fa-compass"></i> Get Directions
        </a>
      </div>
    </div>
  );
};

export default StoreCard;
