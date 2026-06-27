import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const LoginRegister = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${loginEmail}`);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registering user: ${registerFirstName} ${registerLastName}`);
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
                <h2 className="breadcrumb-heading">Login & Register Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Login | Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Register Area */}
      <div className="login-register-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Login form */}
            <div className="col-lg-6">
              <form onSubmit={handleLoginSubmit}>
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input
                          type="checkbox"
                          id="remember_me"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4 pt-1 mt-md-0">
                      <div className="forgotton-password_info">
                        <a href="#">Forgotten password?</a>
                      </div>
                    </div>
                    <div className="col-lg-12 pt-5">
                      <button className="btn btn-custom-size lg-size btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Register form */}
            <div className="col-lg-6 pt-10 pt-lg-0">
              <form onSubmit={handleRegisterSubmit}>
                <div className="login-form">
                  <h4 className="login-title">Register</h4>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={registerFirstName}
                        onChange={(e) => setRegisterFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={registerLastName}
                        onChange={(e) => setRegisterLastName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-custom-size lg-size btn-primary">Register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginRegister;
