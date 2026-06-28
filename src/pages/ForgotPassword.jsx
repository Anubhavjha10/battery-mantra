import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('Forgot Password', 'Request a password reset link to access your account.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    setSubmitting(true);
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMsg('A password reset link has been sent to your email address!');
      setEmail('');
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Forgot Password" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Forgot Password' }]} />

      <div className="forgot-password-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="border rounded bg-white p-8">
                <h3 className="widgets-title mb-4 pb-2 border-bottom text-charcoal">Reset Your Password</h3>
                <p className="text-muted mb-6">Enter your email address below and we will send you a link to reset your password.</p>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="form-label text-charcoal font-weight-bold">Email Address</label>
                    <input
                      type="email"
                      className="form-control rounded-0"
                      style={{ height: '50px' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-custom-size btn-primary w-100 font-weight-bold mb-4"
                  >
                    {submitting ? 'Sending Link...' : 'Send Reset Link'}
                  </button>
                  <div className="text-center">
                    <Link to="/login-register" className="text-primary font-weight-bold">Back to Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
