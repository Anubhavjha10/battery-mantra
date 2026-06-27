import React, { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import { locationService } from '../services/locationService';
import { useSEO } from '../utils/useSEO';

const BecomeDealer = () => {
  useSEO('Become a Dealer', 'Join India\'s fastest growing battery retail network. Partner with Battery Mantra today.');

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    dealerType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingStates, setLoadingStates] = useState(true);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await locationService.getStates();
        setStates(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  const handleStateChange = async (e) => {
    const selected = e.target.value;
    setFormData({ ...formData, state: selected, city: '' });
    setCities([]);
    
    if (selected) {
      try {
        const data = await locationService.getCitiesByState(selected);
        setCities(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid Phone is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.dealerType.trim()) newErrors.dealerType = 'Dealer type selection is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      dealerType: '',
      message: ''
    });
  };

  return (
    <main className="main-content">
      <PageBanner title="Become a Dealer / Partner" breadcrumbs={[{ label: 'Become a Dealer' }]} />

      <div className="dealer-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-7 mb-8 mb-lg-0">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-3">Partner Application Form</h3>
                <p className="text-muted mb-4">Provide details about your business and showroom capacity. Our business development manager will get in touch with you.</p>
                
                {success && (
                  <div className="alert alert-success p-4 mb-4">
                    <h5 className="alert-heading font-weight-bold"><i className="fa fa-check-circle me-2"></i>Application Received!</h5>
                    <p className="mb-0">Thank you for your interest. Our dealer operations team will review your application and contact you in 2-3 business days.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Business / Firm Name *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.businessName ? 'is-invalid' : ''}`}
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                    {errors.businessName && <div className="invalid-feedback">{errors.businessName}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Contact Person Name *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.contactName ? 'is-invalid' : ''}`}
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                    {errors.contactName && <div className="invalid-feedback">{errors.contactName}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Email Address *</label>
                    <input
                      type="email"
                      className={`form-control p-3 border rounded ${errors.email ? 'is-invalid' : ''}`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-control p-3 border rounded ${errors.phone ? 'is-invalid' : ''}`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">State *</label>
                    <select
                      className={`form-select w-100 p-3 border rounded ${errors.state ? 'is-invalid' : ''}`}
                      value={formData.state}
                      onChange={handleStateChange}
                      disabled={loadingStates}
                    >
                      <option value="">-- Select State --</option>
                      {states.map((st, idx) => (
                        <option key={idx} value={st}>{st}</option>
                      ))}
                    </select>
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">City *</label>
                    <select
                      className={`form-select w-100 p-3 border rounded ${errors.city ? 'is-invalid' : ''}`}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      disabled={!formData.state}
                    >
                      <option value="">-- Select City --</option>
                      {cities.map((ct, idx) => (
                        <option key={idx} value={ct}>{ct}</option>
                      ))}
                    </select>
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label font-weight-bold">Partnership Type *</label>
                    <select
                      className={`form-select w-100 p-3 border rounded ${errors.dealerType ? 'is-invalid' : ''}`}
                      value={formData.dealerType}
                      onChange={(e) => setFormData({ ...formData, dealerType: e.target.value })}
                    >
                      <option value="">-- Select Partnership Type --</option>
                      <option value="retail">Authorized Retail Shop / Franchise</option>
                      <option value="distributor">Regional Wholesale Distributor</option>
                      <option value="service">Service & Installation Partner</option>
                    </select>
                    {errors.dealerType && <div className="invalid-feedback">{errors.dealerType}</div>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label font-weight-bold">Additional Comments / Business History</label>
                    <textarea
                      className="form-control p-3 border rounded"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary py-3 px-5 font-weight-bold w-100" disabled={loading}>
                      {loading ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Program details Section */}
            <div className="col-lg-5">
              <div className="p-5 border rounded bg-light h-100">
                <h4 className="font-weight-bold mb-4"><i className="fa fa-handshake-o text-primary me-2"></i>Why Partner With Us?</h4>
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Excellent Margins</h6>
                      <p className="text-muted mb-0">High ROI margins on volume sales of Exide and Amaron products.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Marketing Support</h6>
                      <p className="text-muted mb-0">Free outdoor signage boards, retail counter designs, and flyer prints.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Digital Enquiries</h6>
                      <p className="text-muted mb-0">Direct customer leads forwarded to your shop location from our online store.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Stock Dispatch</h6>
                      <p className="text-muted mb-0">Priority bulk dispatch from closest regional warehouses within 24 hours.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BecomeDealer;
