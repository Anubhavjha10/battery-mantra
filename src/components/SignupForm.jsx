import React, { useState } from 'react';
import { authService } from '../services/authService';

const SignupForm = ({ onToggleLogin, onSignupSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Input Validations
    if (!fullName || !mobileNumber || !email || !password || !confirmPassword) {
      setErrorMsg('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    // Basic Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await authService.register({
        fullName,
        phone: mobileNumber,
        email,
        password
      });

      setSuccessMsg('Account created successfully! Auto-logging in...');
      if (onSignupSuccess) {
        setTimeout(() => onSignupSuccess(result), 1000);
      }
    } catch (err) {
      setErrorMsg(err.message || 'Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-form bg-white p-6 rounded shadow-sm">
      <h4 className="login-title mb-4 font-weight-bold" style={{ fontSize: '24px', color: '#1a1a1a' }}>Create Account</h4>

      {errorMsg && (
        <div className="alert alert-danger py-2" role="alert" style={{ fontSize: '13px' }}>
          <i className="fa fa-exclamation-circle me-2"></i>{errorMsg}
        </div>
      )}
      {successMsg && (
        <div className="alert alert-success py-2" role="alert" style={{ fontSize: '13px' }}>
          <i className="fa fa-check-circle me-2"></i>{successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Full Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div className="col-md-6 col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Mobile Number*</label>
            <input
              type="tel"
              className="form-control"
              placeholder="10-digit mobile"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div className="col-md-6 col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Email Address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div className="col-md-6 col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Password*</label>
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Min 6 chars"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: '10px 45px 10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <button
                type="button"
                className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-decoration-none text-charcoal border-0 p-2 me-1"
                onClick={() => setShowPassword(!showPassword)}
                style={{ zIndex: 10 }}
              >
                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Confirm Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div className="col-12 pt-4">
            <button
              type="submit"
              className="btn btn-primary w-100 py-3 text-white text-uppercase font-weight-bold"
              style={{ letterSpacing: '1px', borderRadius: '4px' }}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Creating...
                </>
              ) : (
                'Register'
              )}
            </button>
          </div>

          <div className="col-12 text-center mt-4 pt-2 border-top">
            <span className="text-muted" style={{ fontSize: '14px' }}>Already have an account? </span>
            <button
              type="button"
              className="btn btn-link text-primary p-0 border-0 font-weight-bold text-decoration-none"
              style={{ fontSize: '14px' }}
              onClick={onToggleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
