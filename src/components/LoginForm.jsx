import React, { useState } from 'react';
import { authService } from '../services/authService';

const LoginForm = ({ onToggleRegister, onLoginSuccess }) => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!emailOrMobile || !password) {
      setErrorMsg('Please enter both credentials.');
      return;
    }

    setSubmitting(true);
    try {
      // Mock login check (accepts demo account or any basic values for testing)
      let result;
      if (emailOrMobile.includes('@')) {
        result = await authService.login(emailOrMobile, password);
      } else {
        // Fallback simulate login
        await new Promise((resolve) => setTimeout(resolve, 800));
        result = { success: true, token: 'mock-token' };
      }
      
      setSuccessMsg('Successfully logged in! Redirecting...');
      if (onLoginSuccess) {
        setTimeout(() => onLoginSuccess(result), 1000);
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid email or password.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-form bg-white p-6 rounded shadow-sm">
      <h4 className="login-title mb-4 font-weight-bold" style={{ fontSize: '24px', color: '#1a1a1a' }}>Login</h4>
      
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
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Email / Mobile Number*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email address or mobile number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              required
              style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div className="col-12">
            <label className="form-label text-charcoal font-weight-bold" style={{ fontSize: '13px' }}>Password*</label>
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
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

          <div className="col-12 d-flex justify-content-between align-items-center mt-3">
            <div className="check-box d-flex align-items-center gap-2">
              <input
                type="checkbox"
                id="remember_me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-check-input mt-0"
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <label htmlFor="remember_me" className="form-check-label mb-0 text-charcoal" style={{ fontSize: '13px', cursor: 'pointer' }}>Remember me</label>
            </div>
            <div className="forgotton-password_info">
              <a href="#" className="text-primary text-decoration-none font-weight-bold" style={{ fontSize: '13px' }} onClick={(e) => { e.preventDefault(); alert('Reset link simulated!'); }}>
                Forgot Password?
              </a>
            </div>
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
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </div>

          <div className="col-12 text-center mt-4 pt-2 border-top">
            <span className="text-muted" style={{ fontSize: '14px' }}>New to Battery Mantra? </span>
            <button
              type="button"
              className="btn btn-link text-primary p-0 border-0 font-weight-bold text-decoration-none"
              style={{ fontSize: '14px' }}
              onClick={onToggleRegister}
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
