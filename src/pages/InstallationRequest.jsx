import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const InstallationRequest = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [batteryCategory, setBatteryCategory] = useState('Car Battery');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (9 AM - 12 PM)');
  const [address, setAddress] = useState('');
  const [exchangeOld, setExchangeOld] = useState(false);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Book Battery Installation', 'Schedule doorstep battery installation services by certified engineers on Battery Mantra.');

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
      setSuccessMsg('Your doorstep installation has been scheduled! Reference ID: BTM-INS' + Math.floor(10000 + Math.random() * 90000) + '. Our service executive will reach out shortly.');
      setFullName('');
      setPhone('');
      setEmail('');
      setBatteryCategory('Car Battery');
      setPreferredDate('');
      setPreferredSlot('Morning (9 AM - 12 PM)');
      setAddress('');
      setExchangeOld(false);
      setNotes('');
    } catch (err) {
      setErrorMsg('Failed to book installation. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Installation Request" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Installation Request' }]} />

      <div className="installation-request-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-4 pb-2 border-bottom text-charcoal">Schedule Doorstep Battery Installation</h3>
                <p className="text-muted mb-6">Bought a battery elsewhere or need our expert engineers to install your existing unit? Provide the scheduling details below.</p>

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
                      <label className="form-label text-charcoal font-weight-bold">Battery Category *</label>
                      <select
                        className="form-select rounded-0"
                        style={{ height: '50px' }}
                        value={batteryCategory}
                        onChange={(e) => setBatteryCategory(e.target.value)}
                      >
                        <option>Car Battery</option>
                        <option>Two-Wheeler Battery</option>
                        <option>Inverter / Tubular Battery</option>
                        <option>Other / Solar Battery</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Preferred Installation Date *</label>
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
                      <label className="form-label text-charcoal font-weight-bold">Installation Address *</label>
                      <input
                        type="text"
                        placeholder="Complete address details where battery needs to be installed"
                        className="form-control rounded-0"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4 d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        id="exchange-old-checkbox"
                        checked={exchangeOld}
                        onChange={(e) => setExchangeOld(e.target.checked)}
                      />
                      <label htmlFor="exchange-old-checkbox" className="mb-0 text-charcoal">
                        Yes, I have an old battery of the same size to exchange for discount buyback.
                      </label>
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Additional Notes / Battery Model Details</label>
                      <textarea
                        rows="3"
                        placeholder="Mention the battery model number or brand if purchased from elsewhere"
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
                    {submitting ? 'Scheduling Setup...' : 'Schedule Installation'}
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

export default InstallationRequest;
