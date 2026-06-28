import React, { useState, useEffect } from 'react';
import { vehicleService } from '../services/vehicleService';

const VehicleSelector = ({ onSearch, isLoading }) => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  const [variants, setVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState('');

  const [fuelTypes, setFuelTypes] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState('');

  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  // Initial loads
  useEffect(() => {
    const initData = async () => {
      const typeList = await vehicleService.getVehicleTypes();
      setTypes(typeList);
      
      const fuels = await vehicleService.getFuelTypes();
      setFuelTypes(fuels);

      const yearsList = await vehicleService.getYears();
      setYears(yearsList);
    };
    initData();
  }, []);

  // Cascade Company when Type changes
  useEffect(() => {
    const loadCompanies = async () => {
      setSelectedCompany('');
      setSelectedModel('');
      setSelectedVariant('');
      setCompanies([]);
      setModels([]);
      setVariants([]);

      if (selectedType) {
        const companyList = await vehicleService.getCompanies(selectedType);
        setCompanies(companyList);
      }
    };
    loadCompanies();
  }, [selectedType]);

  // Cascade Model when Company changes
  useEffect(() => {
    const loadModels = async () => {
      setSelectedModel('');
      setSelectedVariant('');
      setModels([]);
      setVariants([]);

      if (selectedCompany) {
        const modelList = await vehicleService.getModels(selectedType, selectedCompany);
        setModels(modelList);
      }
    };
    loadModels();
  }, [selectedCompany]);

  // Cascade Variant when Model changes
  useEffect(() => {
    const loadVariants = async () => {
      setSelectedVariant('');
      setVariants([]);

      if (selectedModel) {
        const variantList = await vehicleService.getVariants(selectedModel);
        setVariants(variantList);
      }
    };
    loadVariants();
  }, [selectedModel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedType || !selectedCompany || !selectedModel) {
      alert('Please select Vehicle Type, Company, and Model.');
      return;
    }

    onSearch({
      vehicleType: selectedType,
      company: selectedCompany,
      model: selectedModel,
      variant: selectedVariant,
      fuelType: selectedFuel,
      year: selectedYear
    });
  };

  return (
    <div className="card border-0 shadow rounded-lg p-5 bg-white">
      <h5 className="font-weight-bold mb-4 text-night-rider d-flex align-items-center" style={{ fontSize: '18px' }}>
        <i className="pe-7s-car me-2 text-primary" style={{ fontSize: '24px' }}></i>
        Select Your Vehicle
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Vehicle Type */}
          <div className="col-12 col-md-6 col-lg-12">
            <label className="form-label small fw-bold text-charcoal">Vehicle Type*</label>
            <select
              className="form-select py-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              required
              style={{ borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Choose Type</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Company */}
          <div className="col-12 col-md-6 col-lg-12">
            <label className="form-label small fw-bold text-charcoal">Company / Brand*</label>
            <select
              className="form-select py-2"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              disabled={!selectedType}
              required
              style={{ borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Select Brand</option>
              {companies.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Vehicle Model */}
          <div className="col-12 col-md-6 col-lg-12">
            <label className="form-label small fw-bold text-charcoal">Vehicle Model*</label>
            <select
              className="form-select py-2"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!selectedCompany}
              required
              style={{ borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Select Model</option>
              {models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Vehicle Variant */}
          <div className="col-12 col-md-6 col-lg-12">
            <label className="form-label small fw-bold text-charcoal">Model Variant (Optional)</label>
            <select
              className="form-select py-2"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              disabled={!selectedModel}
              style={{ borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Any Variant</option>
              {variants.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          {/* Fuel Type & Year in same row */}
          <div className="col-6">
            <label className="form-label small fw-bold text-charcoal">Fuel Type (Opt)</label>
            <select
              className="form-select py-2"
              value={selectedFuel}
              onChange={(e) => setSelectedFuel(e.target.value)}
              style={{ borderRadius: '4px', border: '1px solid #ddd', fontSize: '13px' }}
            >
              <option value="">Any</option>
              {fuelTypes.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className="col-6">
            <label className="form-label small fw-bold text-charcoal">Year (Opt)</label>
            <select
              className="form-select py-2"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{ borderRadius: '4px', border: '1px solid #ddd', fontSize: '13px' }}
            >
              <option value="">Any</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="col-12 pt-3">
            <button
              type="submit"
              className="btn btn-primary w-100 py-3 text-white text-uppercase font-weight-bold"
              style={{ letterSpacing: '1px', borderRadius: '4px' }}
              disabled={isLoading || !selectedModel}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Searching...
                </>
              ) : (
                'Search Batteries'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleSelector;
