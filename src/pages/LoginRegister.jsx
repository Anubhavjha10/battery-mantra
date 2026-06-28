import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import AuthenticationSlider from '../components/AuthenticationSlider';
import { useSEO } from '../utils/useSEO';

const LoginRegister = () => {
  useSEO('Login & Register | Battery Mantra', 'Access your Battery Mantra account to track orders and request diagnostic services.');
  const navigate = useNavigate();

  const handleAuthSuccess = (session) => {
    // Navigate to profile or dashboard page on successful login/signup
    navigate('/profile');
  };

  return (
    <main className="main-content">
      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item text-night-rider">
                <h2 className="breadcrumb-heading">Account Access</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Login & Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Register Slider Area */}
      <div className="login-register-area section-space-y-axis-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <AuthenticationSlider onAuthSuccess={handleAuthSuccess} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginRegister;
