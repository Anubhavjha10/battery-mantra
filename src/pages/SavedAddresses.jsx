import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import AddressCard from '../components/AddressCard';
import { userService } from '../services/userService';
import { useSEO } from '../utils/useSEO';

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useSEO('Saved Addresses', 'Manage your saved shipping and billing addresses on Battery Mantra.');

  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const data = await userService.getSavedAddresses();
      setAddresses(data);
    } catch (err) {
      setErrorMsg('Failed to load saved addresses.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this address?')) return;
    try {
      await userService.deleteAddress(id);
      setSuccessMsg('Address deleted successfully!');
      fetchAddresses();
    } catch (err) {
      setErrorMsg('Failed to delete address.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    if (!fullName || !phone || !street || !city || !state || !zipCode) {
      setErrorMsg('All fields are required.');
      setSubmitting(false);
      return;
    }

    try {
      await userService.addAddress({
        fullName,
        phone,
        street,
        city,
        state,
        zipCode,
        isDefault
      });
      setSuccessMsg('Address added successfully!');
      // Reset Form
      setFullName('');
      setPhone('');
      setStreet('');
      setCity('');
      setState('');
      setZipCode('');
      setIsDefault(false);
      setShowAddForm(false);
      fetchAddresses();
    } catch (err) {
      setErrorMsg('Failed to save address.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Saved Addresses" breadcrumbs={[{ label: 'My Account', url: '/my-account' }, { label: 'Addresses' }]} />

      <div className="saved-addresses-area section-space-y-axis-100">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-6">
            <h3 className="text-charcoal mb-0">Manage Addresses</h3>
            {!showAddForm && (
              <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>
                Add New Address
              </button>
            )}
          </div>

          {successMsg && <div className="alert alert-success">{successMsg}</div>}
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          {showAddForm && (
            <div className="border rounded bg-white p-6 mb-8 col-lg-8 mx-auto">
              <h4 className="font-weight-bold mb-4">Add a New Address</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Full Name</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control rounded-0"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Street Address</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">City</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">State</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Pincode</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12 mb-4 d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      id="default-address-checkbox"
                      checked={isDefault}
                      onChange={(e) => setIsDefault(e.target.checked)}
                    />
                    <label htmlFor="default-address-checkbox" className="mb-0 text-charcoal">
                      Set as default shipping address
                    </label>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-4">
                  <button type="submit" disabled={submitting} className="btn btn-primary">
                    {submitting ? 'Saving...' : 'Save Address'}
                  </button>
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {loading ? (
            <LoadingSkeleton type="address" count={2} />
          ) : addresses.length === 0 ? (
            <EmptyState
              title="No Addresses Saved"
              message="Add a shipping address to speed up checkout and start ordering!"
            />
          ) : (
            <div className="row g-4">
              {addresses.map((address) => (
                <div key={address.id} className="col-md-6 col-lg-4">
                  <AddressCard address={address} onDelete={handleDelete} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SavedAddresses;
