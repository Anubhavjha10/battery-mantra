import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const WarrantyClaim = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('File Warranty Claim', 'Register your warranty claim, submit battery diagnostics, and request replacements online.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!fullName || !phone || !email || !orderId || !serialNumber || !description) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMsg('Your warranty claim has been filed successfully! Reference ID: BTM-W' + Math.floor(10000 + Math.random() * 90000) + '. Our support team will contact you within 24 hours to schedule an inspection.');
      setFullName('');
      setPhone('');
      setEmail('');
      setOrderId('');
      setSerialNumber('');
      setDescription('');
    } catch (err) {
      setErrorMsg('Failed to file warranty claim. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Warranty Claim" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Warranty Claim' }]} />

      <div className="warranty-claim-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-4 pb-2 border-bottom text-charcoal">Submit a Warranty Claim</h3>
                <p className="text-muted mb-6">Please fill out this form to request replacement or testing under warranty. Make sure to provide the exact battery serial number from the sticker on top of your battery casing.</p>

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
                      <label className="form-label text-charcoal font-weight-bold">Original Order ID *</label>
                      <input
                        type="text"
                        placeholder="e.g. BTM-12345"
                        className="form-control rounded-0"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Battery Serial Number *</label>
                      <input
                        type="text"
                        placeholder="Look for the barcode sticker on the battery casing"
                        className="form-control rounded-0"
                        value={serialNumber}
                        onChange={(e) => setSerialNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Describe the Issue *</label>
                      <textarea
                        rows="4"
                        placeholder="e.g. Sluggish startup, not retaining charge, terminal leakage, clicking sound"
                        className="form-control rounded-0"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold mt-4"
                  >
                    {submitting ? 'Submitting Claim...' : 'File Warranty Claim'}
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

export default WarrantyClaim;
