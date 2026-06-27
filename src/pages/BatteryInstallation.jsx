import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const BatteryInstallation = () => {
  useSEO('Doorstep Battery Installation', 'Book quick professional doorstep battery delivery and installation services across India.');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleBrand: '',
    vehicleModel: '',
    address: '',
    preferredDate: '',
    preferredTimeSlot: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid Phone is required';
    if (!formData.vehicleBrand.trim()) newErrors.vehicleBrand = 'Vehicle brand is required';
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (!formData.address.trim()) newErrors.address = 'Installation address is required';
    if (!formData.preferredDate.trim()) newErrors.preferredDate = 'Installation date is required';
    if (!formData.preferredTimeSlot.trim()) newErrors.preferredTimeSlot = 'Preferred time slot is required';
    
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
      fullName: '',
      phone: '',
      vehicleBrand: '',
      vehicleModel: '',
      address: '',
      preferredDate: '',
      preferredTimeSlot: ''
    });
  };

  return (
    <main className="main-content">
      <PageBanner title="Doorstep Battery Installation" breadcrumbs={[{ label: 'Battery Installation' }]} />

      <div className="installation-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-7 mb-8 mb-lg-0">
              <div className="p-5 border rounded bg-white shadow-sm">
                <h3 className="mb-3">Schedule Installation Service</h3>
                <p className="text-muted mb-4">Book a certified technician to deliver and fit your battery at your home or office. Free installation on new battery purchases.</p>
                
                {success && (
                  <div className="alert alert-success p-4 mb-4">
                    <h5 className="alert-heading font-weight-bold"><i className="fa fa-check-circle me-2"></i>Booking Confirmed!</h5>
                    <p className="mb-0">Your doorstep battery installation is successfully scheduled. A service technician will contact you shortly to confirm details.</p>
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
                    <label className="form-label font-weight-bold">Vehicle Brand / Make *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.vehicleBrand ? 'is-invalid' : ''}`}
                      placeholder="e.g. Maruti Suzuki"
                      value={formData.vehicleBrand}
                      onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                    />
                    {errors.vehicleBrand && <div className="invalid-feedback">{errors.vehicleBrand}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Vehicle Model *</label>
                    <input
                      type="text"
                      className={`form-control p-3 border rounded ${errors.vehicleModel ? 'is-invalid' : ''}`}
                      placeholder="e.g. Swift Petrol"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    />
                    {errors.vehicleModel && <div className="invalid-feedback">{errors.vehicleModel}</div>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label font-weight-bold">Installation Address *</label>
                    <textarea
                      className={`form-control p-3 border rounded ${errors.address ? 'is-invalid' : ''}`}
                      rows="3"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    ></textarea>
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Preferred Date *</label>
                    <input
                      type="date"
                      className={`form-control p-3 border rounded ${errors.preferredDate ? 'is-invalid' : ''}`}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                    {errors.preferredDate && <div className="invalid-feedback">{errors.preferredDate}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label font-weight-bold">Preferred Time Slot *</label>
                    <select
                      className={`form-select w-100 p-3 border rounded ${errors.preferredTimeSlot ? 'is-invalid' : ''}`}
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    >
                      <option value="">-- Select Time Slot --</option>
                      <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                      <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                      <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                      <option value="6pm-9pm">6:00 PM - 9:00 PM</option>
                    </select>
                    {errors.preferredTimeSlot && <div className="invalid-feedback">{errors.preferredTimeSlot}</div>}
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary py-3 px-5 font-weight-bold w-100" disabled={loading}>
                      {loading ? 'Booking Appointment...' : 'Schedule Doorstep Service'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Service details Section */}
            <div className="col-lg-5">
              <div className="p-5 border rounded bg-light h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="font-weight-bold mb-3"><i className="fa fa-wrench text-primary me-2"></i>What\'s Included?</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start gap-2">
                      <i className="fa fa-check text-primary mt-1"></i>
                      <span><strong>Fast Delivery:</strong> Under normal circumstances, our technician will arrive in 2-4 hours.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start gap-2">
                      <i className="fa fa-check text-primary mt-1"></i>
                      <span><strong>Safe Disposal:</strong> Environmental friendly disposal of your old lead-acid battery.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start gap-2">
                      <i className="fa fa-check text-primary mt-1"></i>
                      <span><strong>Terminal Greasing:</strong> Free petroleum jelly application to prevent terminal corrosion.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start gap-2">
                      <i className="fa fa-check text-primary mt-1"></i>
                      <span><strong>Electrical Checkup:</strong> Free checking of your alternator charging current levels.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-top pt-4 mt-4">
                  <h5 className="font-weight-bold text-dark mb-2">Need Emergency Support?</h5>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>If you are stranded on the road and need jumpstart or emergency service, call us directly:</p>
                  <h3 className="text-primary font-weight-bold">+91 98765 43210</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BatteryInstallation;
