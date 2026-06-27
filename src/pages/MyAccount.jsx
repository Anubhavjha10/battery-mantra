import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl, brandText } from '../utils/helpers';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert('Changes saved successfully!');
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
                <h2 className="breadcrumb-heading">My Account Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Page Area */}
      <div className="account-page-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link w-100 text-left border-0 ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                    style={{ background: 'transparent' }}
                  >
                    Dashboard
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link w-100 text-left border-0 ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                    style={{ background: 'transparent' }}
                  >
                    Orders
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link w-100 text-left border-0 ${activeTab === 'addresses' ? 'active' : ''}`}
                    onClick={() => setActiveTab('addresses')}
                    style={{ background: 'transparent' }}
                  >
                    Addresses
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link w-100 text-left border-0 ${activeTab === 'details' ? 'active' : ''}`}
                    onClick={() => setActiveTab('details')}
                    style={{ background: 'transparent' }}
                  >
                    Account Details
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login-register">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
                {activeTab === 'dashboard' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="myaccount-dashboard">
                      <p>
                        Hello <b>{brandText('Battery Mantra')} User</b> (not you?{' '}
                        <Link to="/login-register">Sign out</Link>)
                      </p>
                      <p>
                        From your account dashboard you can view your recent orders, manage your shipping and billing
                        addresses and <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('details'); }}>edit your password and account details</a>.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="myaccount-orders">
                      <h4 className="small-title">MY ORDERS</h4>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th>ORDER</th>
                              <th>DATE</th>
                              <th>STATUS</th>
                              <th>TOTAL</th>
                              <th></th>
                            </tr>
                            <tr>
                              <td>
                                <a className="account-order-id" href="#" onClick={(e) => e.preventDefault()}>
                                  #5364
                                </a>
                              </td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>$162.00 for 2 items</td>
                              <td>
                                <a href="#" className="btn btn-dark btn-primary-hover" onClick={(e) => e.preventDefault()}>
                                  <span>View</span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a className="account-order-id" href="#" onClick={(e) => e.preventDefault()}>
                                  #5356
                                </a>
                              </td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>$162.00 for 2 items</td>
                              <td>
                                <a href="#" className="btn btn-dark btn-primary-hover" onClick={(e) => e.preventDefault()}>
                                  <span>View</span>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="myaccount-address">
                      <p>The following addresses will be used on the checkout page by default.</p>
                      <div className="row">
                        <div className="col">
                          <h4 className="small-title">BILLING ADDRESS</h4>
                          <address>1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem</address>
                        </div>
                        <div className="col">
                          <h4 className="small-title">SHIPPING ADDRESS</h4>
                          <address>1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem</address>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="myaccount-details">
                      <form onSubmit={handleSaveChanges} className="myaccount-form">
                        <div className="myaccount-form-inner">
                          <div className="single-input single-input-half">
                            <label>First Name*</label>
                            <input
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="single-input single-input-half">
                            <label>Last Name*</label>
                            <input
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="single-input">
                            <label>Email*</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="single-input">
                            <label>Current Password (leave blank to leave unchanged)</label>
                            <input
                              type="password"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                          </div>
                          <div className="single-input">
                            <label>New Password (leave blank to leave unchanged)</label>
                            <input
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                          <div className="single-input">
                            <label>Confirm New Password</label>
                            <input
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                          <div className="single-input">
                            <button className="btn btn-custom-size lg-size btn-primary" type="submit">
                              <span>SAVE CHANGES</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
