import React, { useState } from 'react';
import { callbackService } from '../services/callbackService';

const CallbackSection = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic mobile validation (10 to 12 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 12) {
      setErrorMsg('Please enter a valid mobile number (10-12 digits).');
      return;
    }

    setLoading(true);
    try {
      const response = await callbackService.submitRequest(cleanPhone);
      if (response.success) {
        setSuccess(true);
        setPhone('');
        // Reset success state after 5 seconds to allow subsequent requests
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
    } catch (err) {
      setErrorMsg('Failed to submit request. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="callback-section-area section-space-y-axis-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="premium-callback-card">
              {/* Decorative Battery Graphic */}
              <div className="battery-deco-icon">
                <i className="fa fa-bolt"></i>
              </div>

              {/* Card Contents */}
              {!success ? (
                <div className="callback-card-body row align-items-center">
                  <div className="col-lg-6 mb-6 mb-lg-0 text-center text-lg-start">
                    <h3 className="callback-title">Request a CallBack</h3>
                    <p className="callback-subtitle">
                      Enter your mobile number and our team will call you as soon as possible.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <form onSubmit={handleSubmit} className="callback-form">
                      <div className="callback-input-wrapper">
                        <span className="callback-input-icon">
                          <i className="fa fa-mobile-phone"></i>
                        </span>
                        <input
                          type="tel"
                          className="callback-field"
                          placeholder="Your Mobile No."
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errorMsg) setErrorMsg('');
                          }}
                          disabled={loading}
                          required
                        />
                      </div>
                      
                      {errorMsg && (
                        <div className="callback-error-text">
                          <i className="fa fa-warning"></i> {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="callback-submit-btn mt-3"
                        disabled={loading || !phone.trim()}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Scheduling Call...
                          </>
                        ) : (
                          <>
                            Send Request <i className="fa fa-arrow-right ms-2 animate-arrow"></i>
                          </>
                        )}
                      </button>
                    </form>

                    <div className="callback-divider-line">
                      <span>OR</span>
                    </div>

                    <div className="text-center">
                      <p className="call-now-label mb-1">Call us now</p>
                      <a href="tel:09200920051" className="call-now-btn">
                        <i className="fa fa-phone"></i> 09200920051
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="callback-success-view text-center">
                  <div className="success-lottie-mock">
                    <div className="success-checkmark-circle">
                      <div className="success-checkmark-stem"></div>
                      <div className="success-checkmark-kick"></div>
                    </div>
                  </div>
                  <h4 className="success-title">Callback Scheduled!</h4>
                  <p className="success-text">
                    Thank you. Our executive will call you back on your number shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Styled inline classes */}
      <style>{`
        .callback-section-area {
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }
        
        .premium-callback-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 45px 40px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .premium-callback-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(230, 46, 46, 0.08);
          border-color: rgba(230, 46, 46, 0.2);
        }
        
        /* Bolt indicator */
        .battery-deco-icon {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 80px;
          height: 80px;
          background: rgba(230, 46, 46, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e62e2e;
          font-size: 28px;
          transform: rotate(15deg);
          transition: all 0.4s ease;
        }
        
        .premium-callback-card:hover .battery-deco-icon {
          transform: rotate(0deg) scale(1.1);
          background: rgba(230, 46, 46, 0.1);
        }
        
        .callback-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }
        
        .callback-subtitle {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 0;
        }
        
        .callback-input-wrapper {
          position: relative;
          width: 100%;
        }
        
        .callback-input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 20px;
        }
        
        .callback-field {
          width: 100%;
          padding: 14px 15px 14px 45px;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          background: #f8fafc;
          color: #1e293b;
        }
        
        .callback-field:focus {
          border-color: #e62e2e;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(230, 46, 46, 0.1);
        }
        
        .callback-error-text {
          color: #e62e2e;
          font-size: 0.8rem;
          margin-top: 6px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .callback-submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #e62e2e, #c51f1f);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(230, 46, 46, 0.2);
        }
        
        .callback-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(230, 46, 46, 0.3);
        }
        
        .callback-submit-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          box-shadow: none;
        }
        
        .animate-arrow {
          transition: transform 0.2s;
        }
        
        .callback-submit-btn:hover .animate-arrow {
          transform: translateX(4px);
        }
        
        .callback-divider-line {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 20px 0;
          color: #94a3b8;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        
        .callback-divider-line::before, .callback-divider-line::after {
          content: '';
          flex: 1;
          border-bottom: 1.5px solid #e2e8f0;
        }
        
        .callback-divider-line:not(:empty)::before { margin-right: 1em; }
        .callback-divider-line:not(:empty)::after { margin-left: 1em; }
        
        .call-now-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          font-weight: 600;
        }
        
        .call-now-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e62e2e;
          font-size: 1.35rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.25s;
        }
        
        .call-now-btn:hover {
          color: #c51f1f;
          transform: scale(1.03);
        }
        
        /* Success Animation */
        .callback-success-view {
          padding: 20px 0;
        }
        
        .success-lottie-mock {
          margin-bottom: 20px;
        }
        
        .success-checkmark-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(40, 167, 69, 0.12);
          border: 2px solid #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
        }
        
        .success-checkmark-circle::after {
          content: '✓';
          color: #28a745;
          font-size: 32px;
          font-weight: bold;
          animation: checkmark-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards;
        }
        
        @keyframes checkmark-pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .success-text {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .premium-callback-card {
            padding: 35px 25px;
          }
          .callback-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CallbackSection;
