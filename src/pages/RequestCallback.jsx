import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const RequestCallback = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('Sales & Battery Recommendation');
  const [preferredTime, setPreferredTime] = useState('Immediate (Within 15 Mins)');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Request Callback', 'Submit a quick callback request to get sales assistance or product support on Battery Mantra.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!fullName || !phone) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMsg('Callback request submitted! Our executive will call you back within your selected time preference.');
      setFullName('');
      setPhone('');
      setReason('Sales & Battery Recommendation');
      setPreferredTime('Immediate (Within 15 Mins)');
    } catch (err) {
      setErrorMsg('Failed to request callback. Please try calling us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Request Callback" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Request Callback' }]} />

      <div className="request-callback-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-4 pb-2 border-bottom text-charcoal">Quick Callback Request</h3>
                <p className="text-muted mb-6">Don't have time to browse or need immediate phone assistance? Submit your phone number and we will connect you to an expert.</p>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Reason for Callback *</label>
                    <select
                      className="form-select rounded-0"
                      style={{ height: '50px' }}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    >
                      <option>Sales & Battery Recommendation</option>
                      <option>Warranty Claim Assistance</option>
                      <option>Technician Service Scheduling</option>
                      <option>Bulk / Corporate Inquiries</option>
                      <option>Order Status & Tracking Support</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="form-label text-charcoal font-weight-bold">Preferred Call Window *</label>
                    <select
                      className="form-select rounded-0"
                      style={{ height: '50px' }}
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                    >
                      <option>Immediate (Within 15 Mins)</option>
                      <option>Within 2 Hours</option>
                      <option>Morning (10:00 AM - 1:00 PM)</option>
                      <option>Afternoon (1:00 PM - 5:00 PM)</option>
                      <option>Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold"
                  >
                    {submitting ? 'Submitting Request...' : 'Call Me Back'}
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

export default RequestCallback;
