import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const BatteryFinder = () => {
  const navigate = useNavigate();
  
  const [vehicleType, setVehicleType] = useState('Car');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [variant, setVariant] = useState('');

  useSEO('Battery Finder', 'Search for compatible batteries by selecting your vehicle make, model, and engine variant.');

  // Simulated Dependent dropdown structures
  const dataMap = {
    Car: {
      brands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda'],
      models: {
        'Maruti Suzuki': ['Swift', 'Baleno', 'Alto', 'Brezza'],
        Hyundai: ['i10', 'i20', 'Creta', 'Verna'],
        Tata: ['Nexon', 'Tiago', 'Altroz', 'Safari'],
        Mahindra: ['Scorpio', 'Thar', 'XUV700', 'Bolero'],
        Honda: ['City', 'Amaze', 'Civic', 'Jazz']
      },
      variants: {
        Swift: ['LXI Petrol', 'VXI Petrol', 'ZXI CNG'],
        Baleno: ['Delta 1.2', 'Zeta 1.2'],
        i10: ['Era 1.1', 'Magna 1.2', 'Sportz 1.2'],
        Creta: ['1.5 S Petrol', '1.5 SX Diesel'],
        Nexon: ['XM Petrol', 'XZ+ Diesel'],
        Scorpio: ['S5 Diesel', 'S11 Diesel']
      }
    },
    Motorcycle: {
      brands: ['Hero', 'Honda', 'Bajaj', 'Royal Enfield', 'TVS'],
      models: {
        Hero: ['Splendor+', 'HF Deluxe', 'Glamour'],
        Honda: ['Activa 6G', 'Shine', 'Unicorn'],
        Bajaj: ['Pulsar 150', 'Pulsar 220F', 'Platina'],
        'Royal Enfield': ['Classic 350', 'Bullet 350', 'Himalayan'],
        TVS: ['Apache RTR 160', 'Jupiter', 'Ntorq']
      },
      variants: {
        'Splendor+': ['Kick Start', 'Self Start'],
        'Activa 6G': ['Standard', 'Deluxe'],
        'Classic 350': ['Single Channel ABS', 'Dual Channel ABS'],
        'Pulsar 150': ['Neon', 'Single Disc', 'Twin Disc']
      }
    },
    Inverter: {
      brands: ['Luminous', 'Microtek', 'Exide', 'Livguard'],
      models: {
        Luminous: ['Eco Watt Neo 700', 'Zelio+ 1100', 'Cruze 2KVA'],
        Microtek: ['UPS EB 900', 'Luxe 1000'],
        Exide: ['Gee Plus 1000', 'Star 12V'],
        Livguard: ['LGS900', 'LGS1500']
      },
      variants: {
        'Eco Watt Neo 700': ['Standard Inverter Backup'],
        'Zelio+ 1100': ['Sine Wave Backup'],
        'UPS EB 900': ['Standard Home Backup']
      }
    }
  };

  const handleTypeChange = (e) => {
    setVehicleType(e.target.value);
    setBrand('');
    setModel('');
    setVariant('');
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel('');
    setVariant('');
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
    setVariant('');
  };

  const currentBrands = dataMap[vehicleType]?.brands || [];
  const currentModels = brand ? dataMap[vehicleType]?.models[brand] || [] : [];
  const currentVariants = model ? dataMap[vehicleType]?.variants[model] || ['Standard Variant'] : [];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!brand || !model) return;
    
    const cleanBrand = brand.toLowerCase().replace(/\s+/g, '-');
    const cleanModel = model.toLowerCase().replace(/\s+/g, '-');
    const cleanVariant = (variant || currentVariants[0]).toLowerCase().replace(/\s+/g, '-');
    
    navigate(`/vehicle/${cleanBrand}/${cleanModel}/${cleanVariant}`);
  };

  return (
    <main className="main-content">
      <PageBanner title="Battery Finder" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Battery Finder' }]} />

      <div className="battery-finder-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="border rounded bg-white p-8 p-md-10 text-center shadow-sm">
                <h3 className="widgets-title mb-2 text-charcoal font-weight-bold">Find the Perfect Battery for Your Vehicle</h3>
                <p className="text-muted mb-8">Select your vehicle details below to view compatible batteries with exact power and size requirements.</p>

                <form onSubmit={handleSearch}>
                  <div className="row g-4 text-start">
                    <div className="col-md-6 col-lg-3">
                      <label className="form-label text-charcoal font-weight-bold">1. Category</label>
                      <select className="form-select rounded-0" style={{ height: '50px' }} value={vehicleType} onChange={handleTypeChange}>
                        <option value="Car">Car / SUV</option>
                        <option value="Motorcycle">Two-Wheeler</option>
                        <option value="Inverter">Home Inverter</option>
                      </select>
                    </div>

                    <div className="col-md-6 col-lg-3">
                      <label className="form-label text-charcoal font-weight-bold">2. Brand / Manufacturer</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={brand}
                        onChange={handleBrandChange}
                        required
                      >
                        <option value="">Select Brand</option>
                        {currentBrands.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 col-lg-3">
                      <label className="form-label text-charcoal font-weight-bold">3. Model</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={model}
                        onChange={handleModelChange}
                        disabled={!brand}
                        required
                      >
                        <option value="">Select Model</option>
                        {currentModels.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 col-lg-3">
                      <label className="form-label text-charcoal font-weight-bold">4. Variant</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={variant}
                        onChange={(e) => setVariant(e.target.value)}
                        disabled={!model}
                      >
                        <option value="">Select Variant</option>
                        {currentVariants.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!brand || !model}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold mt-8"
                    style={{ height: '55px' }}
                  >
                    Find Recommended Batteries
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BatteryFinder;
