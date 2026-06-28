import React from 'react';
import ProductCard from './ProductCard';

const VehicleResultGrid = ({ batteries, vehicleDetails, resultsRef }) => {
  if (!batteries) return null;

  return (
    <div ref={resultsRef} className="vehicle-results-section mt-10 pt-5 border-top">
      <div className="section-title text-center mb-9">
        <span className="sub-title text-primary d-block mb-2">Compatible Batteries Found</span>
        <h2 className="title mb-0" style={{ fontSize: '28px' }}>
          Best Fit for {vehicleDetails.company} {vehicleDetails.model}
        </h2>
        {vehicleDetails.variant && (
          <p className="text-muted mt-2">
            Variant: {vehicleDetails.variant} | {vehicleDetails.fuelType || 'Any Fuel'} | Year: {vehicleDetails.year || 'Any'}
          </p>
        )}
      </div>

      {batteries.length === 0 ? (
        <div className="text-center py-5">
          <i className="pe-7s-info text-primary mb-3" style={{ fontSize: '48px' }}></i>
          <p className="text-muted" style={{ fontSize: '16px' }}>No direct matching batteries in current catalog. Contact support for help!</p>
        </div>
      ) : (
        <div className="row">
          {batteries.map((battery) => (
            <div key={battery.id} className="col-12 col-sm-6 col-lg-4 mb-6">
              <ProductCard product={battery} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleResultGrid;
