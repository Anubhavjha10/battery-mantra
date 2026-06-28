import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Reset Password', 'Choose a new password to secure your account.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!password || !confirmPassword) {
      setErrorMsg('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMsg('Your password has been successfully reset. You can now login.');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setErrorMsg('Failed to reset password. Please try requesting a new link.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Reset Password" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Reset Password' }]} />

      <div className="reset-password-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-6 pb-2 border-bottom text-charcoal">Choose New Password</h3>

                {successMsg && (
                  <div className="alert alert-success">
                    {successMsg}{' '}
                    <Link to="/login-register" className="alert-link font-weight-bold text-decoration-underline">
                      Login here
                    </Link>
                  </div>
                )}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label text-charcoal font-weight-bold">New Password</label>
                    <input
                      type="password"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    {submitting ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;
