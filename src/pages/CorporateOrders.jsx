import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const CorporateOrders = () => {
  useSEO('Corporate & Bulk Orders', 'Request bulk pricing for corporate offices, warehouses, and vehicle fleets from Battery Mantra.');

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    batteryCategory: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid Phone is required';
    if (!formData.batteryCategory.trim()) newErrors.batteryCategory = 'Please select a battery category';
    if (!formData.quantity.trim() || isNaN(formData.quantity) || parseInt(formData.quantity) <= 0) {
      newErrors.quantity = 'Please enter a valid positive quantity';
    }
    
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
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      batteryCategory: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <main className="main-content">
      <PageBanner title="Corporate & Bulk Orders" breadcrumbs={[{ label: 'Corporate Orders' }]} />

      <div className="corporate-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-7 mb-8 mb-lg-0">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-3">Request a Bulk Quote</h3>
                <p className="text-muted mb-4">Request special discount pricing for commercial fleets, data centers, UPS systems, or office backup batteries.</p>
                
                {success && (
                  <div className="alert alert-success p-4 mb-4">
                    <h5 className="alert-heading font-weight-bold"><i className="fa fa-check-circle me-2"></i>Inquiry Submitted!</h5>
                    <p className="mb-0">Your bulk request was successfully recorded. A corporate relationship manager will email your customized invoice quote in 24 business hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Company / Organization *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.companyName ? 'is-invalid' : ''}`}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                    {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Contact Name *</label>
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
                    <label className="form-label font-weight-bold">Required Category *</label>
                    <select
                      className={`form-select w-100 p-3 border rounded ${errors.batteryCategory ? 'is-invalid' : ''}`}
                      value={formData.batteryCategory}
                      onChange={(e) => setFormData({ ...formData, batteryCategory: e.target.value })}
                    >
                      <option value="">-- Select Battery Type --</option>
                      <option value="automotive">Automotive / Fleet Batteries</option>
                      <option value="inverter">Inverter & Home UPS Batteries</option>
                      <option value="online-ups">Data Center Online UPS Batteries</option>
                      <option value="industrial">Heavy Machinery / Industrial Batteries</option>
                    </select>
                    {errors.batteryCategory && <div className="invalid-feedback">{errors.batteryCategory}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Est. Quantity Required *</label>
                    <input
                      type="number"
                      className={`form-control p-3 border rounded ${errors.quantity ? 'is-invalid' : ''}`}
                      placeholder="e.g. 20"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                    {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label font-weight-bold">Detailed Requirements (Models, SLA, Timeline)</label>
                    <textarea
                      className="form-control p-3 border rounded"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary py-3 px-5 font-weight-bold w-100" disabled={loading}>
                      {loading ? 'Submitting Quote Request...' : 'Submit Quote Request'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Corporate details Section */}
            <div className="col-lg-5">
              <div className="p-5 border rounded bg-light h-100">
                <h4 className="font-weight-bold mb-4"><i className="fa fa-building-o text-primary me-2"></i>B2B Client Advantages</h4>
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-shield text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Dedicated Account Manager</h6>
                      <p className="text-muted mb-0">Single point of contact for priority assistance, claims, and invoice billing.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-percent text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">Volume Discounts</h6>
                      <p className="text-muted mb-0">Custom tier wholesale prices lower than consumer retail rates.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-truck text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">GST Invoicing</h6>
                      <p className="text-muted mb-0">Official tax invoices containing your business GSTIN for tax credits input claims.</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-2">
                    <i className="fa fa-calendar-check-o text-primary mt-1" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <h6 className="font-weight-bold mb-1">SLA Commitments</h6>
                      <p className="text-muted mb-0">Guaranteed service response and doorstep checks for your corporate office power storage systems.</p>
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

export default CorporateOrders;
