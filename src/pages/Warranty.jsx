import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const Warranty = () => {
  useSEO('Warranty Registration', 'Register your product warranty online or review Battery Mantra battery warranty terms and claim policies.');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batteryModel: '',
    serialNumber: '',
    invoiceNumber: '',
    purchaseDate: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid Phone is required';
    if (!formData.batteryModel.trim()) newErrors.batteryModel = 'Battery model is required';
    if (!formData.serialNumber.trim()) newErrors.serialNumber = 'Battery serial number is required';
    if (!formData.invoiceNumber.trim()) newErrors.invoiceNumber = 'Invoice number is required';
    if (!formData.purchaseDate.trim()) newErrors.purchaseDate = 'Purchase date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Mock API submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      batteryModel: '',
      serialNumber: '',
      invoiceNumber: '',
      purchaseDate: ''
    });
  };

  return (
    <main className="main-content">
      <PageBanner title="Warranty Registration" breadcrumbs={[{ label: 'Warranty' }]} />

      <div className="warranty-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-7 mb-8 mb-lg-0">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-4">Register Your Warranty</h3>
                <p className="text-muted mb-4">Complete the form below within 30 days of purchase to activate and record your official manufacturer warranty.</p>
                
                {success && (
                  <div className="alert alert-success p-4 mb-4">
                    <h5 className="alert-heading font-weight-bold"><i className="fa fa-check-circle me-2"></i>Registration Successful!</h5>
                    <p className="mb-0">Your battery warranty has been successfully registered. A confirmation certificate has been sent to your email address.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Full Name *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.fullName ? 'is-invalid' : ''}`}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
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
                    <label className="form-label font-weight-bold">Battery Model / SKU *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.batteryModel ? 'is-invalid' : ''}`}
                      placeholder="e.g. Amaron FLO 42B20L"
                      value={formData.batteryModel}
                      onChange={(e) => setFormData({ ...formData, batteryModel: e.target.value })}
                    />
                    {errors.batteryModel && <div className="invalid-feedback">{errors.batteryModel}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Serial Number *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.serialNumber ? 'is-invalid' : ''}`}
                      placeholder="Printed on top of battery"
                      value={formData.serialNumber}
                      onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                    />
                    {errors.serialNumber && <div className="invalid-feedback">{errors.serialNumber}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Invoice Number *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.invoiceNumber ? 'is-invalid' : ''}`}
                      value={formData.invoiceNumber}
                      onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                    />
                    {errors.invoiceNumber && <div className="invalid-feedback">{errors.invoiceNumber}</div>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label font-weight-bold">Date of Purchase *</label>
                    <input
                      type="date"
                      className={`form-control p-3 border rounded ${errors.purchaseDate ? 'is-invalid' : ''}`}
                      value={formData.purchaseDate}
                      onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                    />
                    {errors.purchaseDate && <div className="invalid-feedback">{errors.purchaseDate}</div>}
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary py-3 px-5 font-weight-bold w-100" disabled={loading}>
                      {loading ? 'Submitting Registration...' : 'Register Warranty'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Guidelines/Policy Section */}
            <div className="col-lg-5">
              <div className="p-5 border rounded bg-light">
                <h4 className="font-weight-bold mb-3"><i className="fa fa-info-circle text-primary me-2"></i>Warranty Policy Rules</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-success mt-1"></i>
                    <span>Batteries carry a specific pro-rata replacement policy depending on the brand models.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-success mt-1"></i>
                    <span>Original invoice printout is required during physical warranty verification/claim.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-success mt-1"></i>
                    <span>Damaged casing, fire incidents, or dry cell conditions due to alternator malfunction are not covered.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <i className="fa fa-check-circle text-success mt-1"></i>
                    <span>Free replacement coverage will ship another fresh unit within 48 business hours.</span>
                  </li>
                </ul>

                <h4 className="font-weight-bold mt-5 mb-3"><i className="fa fa-phone text-primary me-2"></i>Warranty Claim Helpline</h4>
                <p className="mb-1">If you require immediate help regarding replacements, contact our toll-free customer support team:</p>
                <h4 className="text-primary font-weight-bold">1800 1200 3450</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Warranty;
