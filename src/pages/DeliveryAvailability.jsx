import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const DeliveryAvailability = () => {
  const [pincode, setPincode] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Check Delivery Availability', 'Check if doorstep battery delivery and installation is available in your area by entering your pincode.');

  const handleCheck = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setResult(null);

    if (!/^\d{6}$/.test(pincode)) {
      setErrorMsg('Please enter a valid 6-digit pincode.');
      return;
    }

    setChecking(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      // Simulated response logic
      const firstDigit = pincode[0];
      if (firstDigit === '0' || firstDigit === '9') {
        setResult({
          status: 'unavailable',
          message: 'Currently we do not service this pincode. We are expanding rapidly!'
        });
      } else {
        setResult({
          status: 'available',
          cod: firstDigit !== '4' && firstDigit !== '8',
          timeline: firstDigit === '1' || firstDigit === '2' ? 'Express Delivery (within 4 hours)' : 'Standard Delivery (24-48 hours)',
          charge: firstDigit === '1' ? 'Free Shipping & Installation' : '₹100 (Free for orders above ₹1,500)'
        });
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Delivery & Service Availability" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Check Availability' }]} />

      <div className="delivery-checker-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8 text-center shadow-sm">
                <h3 className="widgets-title mb-2 text-charcoal font-weight-bold">Verify Service Availability</h3>
                <p className="text-muted mb-6">Enter your 6-digit delivery pincode to check service availability, delivery charges, and cash-on-delivery options.</p>

                {errorMsg && <div className="alert alert-danger text-start">{errorMsg}</div>}

                <form onSubmit={handleCheck} className="mb-6">
                  <div className="input-group">
                    <input
                      type="text"
                      maxLength="6"
                      placeholder="e.g. 110001"
                      className="form-control rounded-0"
                      style={{ height: '55px', fontSize: '1.1rem' }}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      required
                    />
                    <button
                      type="submit"
                      disabled={checking || pincode.length !== 6}
                      className="btn btn-primary px-6 font-weight-bold"
                    >
                      {checking ? 'Checking...' : 'Check Pincode'}
                    </button>
                  </div>
                </form>

                {result && (
                  <div className="border rounded p-6 text-start" style={{ backgroundColor: result.status === 'available' ? '#f4fbf7' : '#fff5f5' }}>
                    {result.status === 'available' ? (
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-3 text-success">
                          <i className="fa fa-check-circle" style={{ fontSize: '1.5rem' }}></i>
                          <h5 className="font-weight-bold mb-0">Delivery & Installation Available!</h5>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2 text-charcoal">
                            <strong>Estimated Timeline:</strong> <span className="text-muted">{result.timeline}</span>
                          </li>
                          <li className="mb-2 text-charcoal">
                            <strong>COD Availability:</strong> <span className="text-muted">{result.cod ? 'Cash on Delivery Supported' : 'Online Payments Only'}</span>
                          </li>
                          <li className="text-charcoal">
                            <strong>Service Charge:</strong> <span className="text-muted">{result.charge}</span>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-2 text-danger">
                          <i className="fa fa-times-circle" style={{ fontSize: '1.5rem' }}></i>
                          <h5 className="font-weight-bold mb-0">Service Unavailable</h5>
                        </div>
                        <p className="text-muted mb-0">{result.message}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeliveryAvailability;
