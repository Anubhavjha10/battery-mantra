import React, { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import StoreCard from '../components/StoreCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { storeService } from '../services/storeService';
import { locationService } from '../services/locationService';
import { useSEO } from '../utils/useSEO';

const StoreLocator = () => {
  useSEO('Store Locator', 'Find Battery Mantra dealers and service stations near you for quick battery replacement and support.');

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stores, setStores] = useState([]);
  
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingStores, setLoadingStores] = useState(false);

  // Load States
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await locationService.getStates();
        setStates(data);
      } catch (err) {
        console.error('Error loading states:', err);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  // Fetch initial stores
  useEffect(() => {
    const fetchInitialStores = async () => {
      setLoadingStores(true);
      try {
        const data = await storeService.getStores();
        setStores(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingStores(false);
      }
    };
    fetchInitialStores();
  }, []);

  // Handle State selection
  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity('');
    setCities([]);
    
    if (state) {
      try {
        const data = await locationService.getCitiesByState(state);
        setCities(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Handle Search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoadingStores(true);
    try {
      const data = await storeService.getStoresByLocation(selectedState, selectedCity);
      setStores(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingStores(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Store & Dealer Locator" breadcrumbs={[{ label: 'Store Locator' }]} />

      <div className="store-locator-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center mb-8">
            <div className="col-lg-10">
              <div className="search-form-wrap p-5 border rounded" style={{ backgroundColor: '#fcfcfc' }}>
                <h3 className="mb-4 text-center">Find a Dealer Near You</h3>
                <form onSubmit={handleSearch} className="row g-3 align-items-end">
                  <div className="col-md-5">
                    <label className="form-label font-weight-bold">Select State</label>
                    <select
                      className="form-select w-100 p-3 border rounded"
                      value={selectedState}
                      onChange={handleStateChange}
                      disabled={loadingStates}
                    >
                      <option value="">-- Select State --</option>
                      {states.map((st, idx) => (
                        <option key={idx} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="col-md-5">
                    <label className="form-label font-weight-bold">Select City</label>
                    <select
                      className="form-select w-100 p-3 border rounded"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedState}
                    >
                      <option value="">-- Select City --</option>
                      {cities.map((ct, idx) => (
                        <option key={idx} value={ct}>{ct}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-2">
                    <button type="submit" className="btn btn-primary w-100 py-3 font-weight-bold">
                      <i className="fa fa-search me-2"></i> Find
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="row mt-5">
            {loadingStores ? (
              <div className="col-12">
                <LoadingSkeleton type="list" count={3} />
              </div>
            ) : stores.length > 0 ? (
              stores.map((store) => (
                <div key={store.id} className="col-lg-4 col-md-6 col-sm-12">
                  <StoreCard store={store} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <EmptyState
                  title="No Stores Found"
                  message="We currently don't have listed outlets in this specific location. Please select another city or state."
                  actionText="Clear Filters"
                  actionPath="#"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StoreLocator;
