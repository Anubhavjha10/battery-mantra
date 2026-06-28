import React, { useState, useRef } from 'react';
import VehicleSelector from './VehicleSelector';
import VehicleResultGrid from './VehicleResultGrid';
import { vehicleService } from '../services/vehicleService';
import { getAssetUrl } from '../utils/helpers';

const SmartSearch = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const resultsRef = useRef(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setSearchResults(null);
    setSearchParams(params);

    try {
      const compatibleBatteries = await vehicleService.getCompatibleBatteries(params);
      setSearchResults(compatibleBatteries);

      // Smooth scroll to results
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err) {
      console.error('Search failed', err);
      alert('Error fetching matching batteries. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="smart-search-area section-space-top-100 bg-light py-10" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Visual/Copywriting */}
          <div className="col-lg-6 pr-lg-10 mb-8 mb-lg-0">
            <div className="smart-search-content">
              <span className="sub-title text-primary font-weight-bold d-block mb-3" style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Automotive Power Finder
              </span>
              <h2 className="title mb-4 font-weight-bold text-night-rider" style={{ fontSize: '38px', lineHeight: '1.2' }}>
                Smart Battery Search
              </h2>
              <p className="short-desc mb-6 text-charcoal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Find the perfect battery for your vehicle in seconds. Our smart database maps manufacturers, models, and fuel variants to ensure the absolute perfect fit.
              </p>

              {/* Feature Checkpoints */}
              <ul className="list-unstyled mb-8">
                <li className="d-flex align-items-center mb-3">
                  <span className="bg-primary-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(230, 46, 46, 0.1)' }}>
                    <i className="fa fa-check" style={{ fontSize: '12px' }}></i>
                  </span>
                  <span className="fw-semibold text-night-rider" style={{ fontSize: '15px' }}>100% Genuine Branded Batteries (Amaron, Exide, SF Sonic)</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span className="bg-primary-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(230, 46, 46, 0.1)' }}>
                    <i className="fa fa-check" style={{ fontSize: '12px' }}></i>
                  </span>
                  <span className="fw-semibold text-night-rider" style={{ fontSize: '15px' }}>Free Doorstep Delivery & Professional Installation</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span className="bg-primary-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(230, 46, 46, 0.1)' }}>
                    <i className="fa fa-check" style={{ fontSize: '12px' }}></i>
                  </span>
                  <span className="fw-semibold text-night-rider" style={{ fontSize: '15px' }}>Best Exchange Value / Buyback Discounts for Old Scrap</span>
                </li>
              </ul>

              {/* Product Illustration */}
              <div className="illustration-wrapper text-center mt-5">
                <img 
                  className="img-fluid rounded" 
                  src={getAssetUrl('assets/images/banner/2-1-407x529.png')} 
                  alt="Premium Battery Finder Illustration" 
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Search Card */}
          <div className="col-lg-6">
            <VehicleSelector onSearch={handleSearch} isLoading={loading} />
          </div>
        </div>

        {/* Compatible Batteries Results Section */}
        {searchResults !== null && (
          <VehicleResultGrid 
            batteries={searchResults} 
            vehicleDetails={searchParams} 
            resultsRef={resultsRef} 
          />
        )}
      </div>
    </div>
  );
};

export default SmartSearch;
