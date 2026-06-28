import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { userService } from '../services/userService';
import { useSEO } from '../utils/useSEO';

const Profile = () => {
  const [profile, setProfile] = useState({ fullName: '', email: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('My Profile', 'Manage your personal account profile details on Battery Mantra.');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await userService.getProfile();
        setProfile(data);
      } catch (err) {
        setErrorMsg('Failed to load profile details.');
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    if (!profile.fullName || !profile.email || !profile.phone) {
      setErrorMsg('All fields are required.');
      setSubmitting(false);
      return;
    }

    try {
      const updated = await userService.updateProfile(profile);
      setProfile(updated);
      setSuccessMsg('Profile updated successfully!');
    } catch (err) {
      setErrorMsg('Failed to save profile changes.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="My Profile" breadcrumbs={[{ label: 'My Account', url: '/my-account' }, { label: 'Profile' }]} />

      <div className="profile-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-6 pb-2 border-bottom text-charcoal">Profile Details</h3>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                {loading ? (
                  <LoadingSkeleton type="profile" count={1} />
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control rounded-0"
                        style={{ height: '50px' }}
                        value={profile.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-charcoal font-weight-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-0"
                        style={{ height: '50px' }}
                        value={profile.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="form-label text-charcoal font-weight-bold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control rounded-0"
                        style={{ height: '50px' }}
                        value={profile.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-custom-size btn-primary w-100 font-weight-bold"
                    >
                      {submitting ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
