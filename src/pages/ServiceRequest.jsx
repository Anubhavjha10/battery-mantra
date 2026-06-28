import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const ServiceRequest = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Diagnostic Check');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (9 AM - 12 PM)');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Schedule Service Request', 'Book professional battery jumpstarts, diagnostic check-ups, and watering services on Battery Mantra.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!fullName || !phone || !email || !preferredDate || !address) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMsg('Service request successfully booked! Reference ID: BTM-SR' + Math.floor(10000 + Math.random() * 90000) + '. Our executive will call to confirm the details and technician assignment.');
      setFullName('');
      setPhone('');
      setEmail('');
      setServiceType('Diagnostic Check');
      setPreferredDate('');
      setPreferredSlot('Morning (9 AM - 12 PM)');
      setAddress('');
      setNotes('');
    } catch (err) {
      setErrorMsg('Failed to schedule service. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Service Request" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Service Request' }]} />

      <div className="service-request-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-4 pb-2 border-bottom text-charcoal">Schedule Battery Diagnostics & Support</h3>
                <p className="text-muted mb-6">Book a door-step diagnostic test, voltage check-up, jumpstart support, or electrolyte water top-up by filling out the details below.</p>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Full Name *</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control rounded-0"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Email Address *</label>
                      <input
                        type="email"
                        className="form-control rounded-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Service Type Required *</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                      >
                        <option>Diagnostic Check & Voltage Testing</option>
                        <option>Distilled Water Top-Up</option>
                        <option>Emergency Jumpstart Support</option>
                        <option>Battery Health Certification</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Preferred Service Date *</label>
                      <input
                        type="date"
                        className="form-control rounded-0"
                        style={{ height: '50px' }}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Preferred Time Slot *</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Service Address *</label>
                      <input
                        type="text"
                        placeholder="House/Plot No, Street, Landmark, City"
                        className="form-control rounded-0"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Additional Notes / Symptoms</label>
                      <textarea
                        rows="3"
                        placeholder="Mention any specific issue or instructions for the technician"
                        className="form-control rounded-0"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold mt-4"
                  >
                    {submitting ? 'Booking Request...' : 'Book Service Visit'}
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

export default ServiceRequest;
