import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { userService } from '../services/userService';
import { useSEO } from '../utils/useSEO';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Change Password', 'Update your password settings to protect your account.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMsg('All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg('New password and confirm password do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setErrorMsg('New password must be at least 6 characters.');
      return;
    }

    setSubmitting(true);
    try {
      await userService.changePassword(currentPassword, newPassword);
      setSuccessMsg('Your password has been changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setErrorMsg(err.message || 'Failed to change password. Please verify current password.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Change Password" breadcrumbs={[{ label: 'My Account', url: '/my-account' }, { label: 'Change Password' }]} />

      <div className="change-password-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-6 pb-2 border-bottom text-charcoal">Update Password</h3>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">Current Password</label>
                    <input
                      type="password"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">New Password</label>
                    <input
                      type="password"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="form-label text-charcoal font-weight-bold">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold"
                  >
                    {submitting ? 'Updating...' : 'Change Password'}
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

export default ChangePassword;
