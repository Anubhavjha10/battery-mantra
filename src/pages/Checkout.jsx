import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Checkout = () => {
  const { cartItems, cartSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  // Accordion Toggles
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [shipDifferentAddress, setShipDifferentAddress] = useState(false);

  // Form Fields
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Bangladesh',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    password: '',
    orderNotes: ''
  });

  const [shippingDetails, setShippingDetails] = useState({
    country: 'Bangladesh',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postcode: '',
    email: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('bank'); // 'bank', 'cheque', 'paypal'
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(10.0);
      alert('Coupon Applied: $10.00 discount!');
    } else {
      alert('Invalid Coupon Code!');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Validate required billing fields
    const { firstName, lastName, address, city, state, postcode, email, phone } = billingDetails;
    if (!firstName || !lastName || !address || !city || !state || !postcode || !email || !phone) {
      alert('Please fill out all required billing fields marked with *');
      return;
    }

    if (shipDifferentAddress) {
      const { firstName: sFirst, lastName: sLast, address: sAddr, city: sCity, state: sState, postcode: sPost, email: sEmail, phone: sPhone } = shippingDetails;
      if (!sFirst || !sLast || !sAddr || !sCity || !sState || !sPost || !sEmail || !sPhone) {
        alert('Please fill out all required shipping fields marked with *');
        return;
      }
    }

    alert('Thank you! Your order has been placed successfully.');
    clearCart();
    navigate('/');
  };

  const orderTotal = Math.max(0, cartSubtotal - discount);

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
                <h2 className="breadcrumb-heading">Checkout Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Area */}
      <div className="checkout-area section-space-y-axis-100">
        <div className="container text-charcoal">
          <div className="row">
            <div className="col-12">
              <div className="coupon-accordion">
                <h3>
                  Returning customer?{' '}
                  <span onClick={() => setShowLogin(!showLogin)} style={{ cursor: 'pointer' }}>
                    Click here to login
                  </span>
                </h3>
                {showLogin && (
                  <div className="coupon-content" style={{ display: 'block' }}>
                    <div className="coupon-info">
                      <p className="coupon-text mb-4">
                        Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet
                        ipsum luctus.
                      </p>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <p className="form-row-first">
                          <label className="mb-1">
                            Username or email <span className="required">*</span>
                          </label>
                          <input type="text" className="w-100 border p-2" />
                        </p>
                        <p className="form-row-last">
                          <label className="mb-1">
                            Password <span className="required">*</span>
                          </label>
                          <input type="password" className="w-100 border p-2" />
                        </p>
                        <p className="form-row d-flex align-items-center gap-2 mt-3">
                          <input type="checkbox" id="remember_me" />
                          <label htmlFor="remember_me" className="mb-0">
                            Remember me
                          </label>
                        </p>
                        <p className="lost-password mt-2">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            Lost your password?
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                )}

                <h3>
                  Have a coupon?{' '}
                  <span onClick={() => setShowCoupon(!showCoupon)} style={{ cursor: 'pointer' }}>
                    Click here to enter your code
                  </span>
                </h3>
                {showCoupon && (
                  <div className="coupon-checkout-content" style={{ display: 'block' }}>
                    <div className="coupon-info">
                      <form onSubmit={handleApplyCoupon}>
                        <p className="checkout-coupon d-flex gap-2">
                          <input
                            placeholder="Coupon code"
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="border p-2"
                          />
                          <input className="coupon-inner_btn" value="Apply Coupon" type="submit" />
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handlePlaceOrder}>
            <div className="row mt-6">
              {/* Billing Details */}
              <div className="col-lg-6 col-12">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix mb-4">
                        <label className="form-label mb-1">
                          Country <span className="required">*</span>
                        </label>
                        <select
                          className="form-select rounded-0"
                          value={billingDetails.country}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, country: e.target.value })
                          }
                          style={{ height: '45px' }}
                        >
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="uk">London</option>
                          <option value="rou">Romania</option>
                          <option value="fr">French</option>
                          <option value="de">Germany</option>
                          <option value="aus">Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.firstName}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, firstName: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.lastName}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, lastName: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">Company Name</label>
                        <input
                          type="text"
                          value={billingDetails.companyName}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, companyName: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Address <span className="required">*</span>
                        </label>
                        <input
                          placeholder="Street address"
                          type="text"
                          required
                          value={billingDetails.address}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, address: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="checkout-form-list">
                        <input
                          placeholder="Apartment, suite, unit etc. (optional)"
                          type="text"
                          value={billingDetails.apartment}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, apartment: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.city}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, city: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          State / County <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.state}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, state: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.postcode}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, postcode: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={billingDetails.email}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, email: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="checkout-form-list">
                        <label className="form-label mb-1">
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={billingDetails.phone}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, phone: e.target.value })
                          }
                          className="w-100 border p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="checkout-form-list create-acc d-flex align-items-center gap-2">
                        <input
                          id="cbox"
                          type="checkbox"
                          checked={createAccount}
                          onChange={() => setCreateAccount(!createAccount)}
                        />
                        <label htmlFor="cbox" className="mb-0">
                          Create an account?
                        </label>
                      </div>
                      {createAccount && (
                        <div className="checkout-form-list create-account mt-3">
                          <p className="text-silver mb-2">
                            Create an account by entering the information below. If you are a
                            returning customer please login at the top of the page.
                          </p>
                          <label className="form-label mb-1">
                            Account password <span className="required">*</span>
                          </label>
                          <input
                            placeholder="password"
                            type="password"
                            required={createAccount}
                            value={billingDetails.password}
                            onChange={(e) =>
                              setBillingDetails({ ...billingDetails, password: e.target.value })
                            }
                            className="w-100 border p-2"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="different-address mt-6">
                    <div className="ship-different-title mb-4">
                      <h3 className="d-flex align-items-center gap-2">
                        <input
                          id="ship-box"
                          type="checkbox"
                          checked={shipDifferentAddress}
                          onChange={() => setShipDifferentAddress(!shipDifferentAddress)}
                        />
                        <label htmlFor="ship-box" className="mb-0">
                          Ship to a different address?
                        </label>
                      </h3>
                    </div>
                    {shipDifferentAddress && (
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="country-select clearfix">
                            <label className="form-label mb-1">
                              Country <span className="required">*</span>
                            </label>
                            <select
                              className="form-select rounded-0"
                              value={shippingDetails.country}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, country: e.target.value })
                              }
                              style={{ height: '45px' }}
                            >
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="uk">London</option>
                              <option value="rou">Romania</option>
                              <option value="fr">French</option>
                              <option value="de">Germany</option>
                              <option value="aus">Australia</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              First Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.firstName}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, firstName: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Last Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.lastName}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, lastName: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">Company Name</label>
                            <input
                              type="text"
                              value={shippingDetails.companyName}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, companyName: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Address <span className="required">*</span>
                            </label>
                            <input
                              placeholder="Street address"
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.address}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, address: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <input
                              placeholder="Apartment, suite, unit etc. (optional)"
                              type="text"
                              value={shippingDetails.apartment}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, apartment: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Town / City <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.city}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, city: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              State / County <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.state}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, state: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Postcode / Zip <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.postcode}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, postcode: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Email Address <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              required={shipDifferentAddress}
                              value={shippingDetails.email}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, email: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="checkout-form-list">
                            <label className="form-label mb-1">
                              Phone <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required={shipDifferentAddress}
                              value={shippingDetails.phone}
                              onChange={(e) =>
                                setShippingDetails({ ...shippingDetails, phone: e.target.value })
                              }
                              className="w-100 border p-2"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="order-notes">
                      <div className="checkout-form-list checkout-form-list-2">
                        <label className="form-label mb-1">Order Notes</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          value={billingDetails.orderNotes}
                          onChange={(e) =>
                            setBillingDetails({ ...billingDetails, orderNotes: e.target.value })
                          }
                          className="w-100 border p-2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order and Payment */}
              <div className="col-lg-6 col-12 mt-6 mt-lg-0">
                <div className="your-order">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="cart-product-name">Product</th>
                          <th className="cart-product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length > 0 ? (
                          cartItems.map((item) => (
                            <tr className="cart_item" key={item.id}>
                              <td className="cart-product-name">
                                {item.name} <strong className="product-quantity">× {item.quantity}</strong>
                              </td>
                              <td className="cart-product-total">
                                <span className="amount">{formatPrice(item.price * item.quantity)}</span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="2" className="text-center py-4">
                              No items in the cart.
                            </td>
                          </tr>
                        )}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">{formatPrice(cartSubtotal)}</span>
                          </td>
                        </tr>
                        {discount > 0 && (
                          <tr className="cart-discount">
                            <th>Discount</th>
                            <td>
                              <span className="amount">-{formatPrice(discount)}</span>
                            </td>
                          </tr>
                        )}
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">{formatPrice(orderTotal)}</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="payment-accordion">
                      <div className="accordion" id="accordionPayment">
                        {/* Direct Bank Transfer */}
                        <div className="card border-0 mb-2">
                          <div className="card-header p-0 border-0 bg-transparent">
                            <h5 className="panel-title mb-0">
                              <button
                                type="button"
                                className="btn btn-link w-100 text-start text-charcoal py-2 px-3 border"
                                onClick={() => setPaymentMethod('bank')}
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: paymentMethod === 'bank' ? 'bold' : 'normal'
                                }}
                              >
                                Direct Bank Transfer.
                              </button>
                            </h5>
                          </div>
                          {paymentMethod === 'bank' && (
                            <div className="card-body border border-top-0 p-3 bg-light">
                              <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order
                                ID as the payment reference. Your order won't be shipped until the funds
                                have cleared in our account.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Cheque Payment */}
                        <div className="card border-0 mb-2">
                          <div className="card-header p-0 border-0 bg-transparent">
                            <h5 className="panel-title mb-0">
                              <button
                                type="button"
                                className="btn btn-link w-100 text-start text-charcoal py-2 px-3 border"
                                onClick={() => setPaymentMethod('cheque')}
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: paymentMethod === 'cheque' ? 'bold' : 'normal'
                                }}
                              >
                                Cheque Payment
                              </button>
                            </h5>
                          </div>
                          {paymentMethod === 'cheque' && (
                            <div className="card-body border border-top-0 p-3 bg-light">
                              <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order
                                ID as the payment reference. Your order won't be shipped until the funds
                                have cleared in our account.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* PayPal */}
                        <div className="card border-0 mb-2">
                          <div className="card-header p-0 border-0 bg-transparent">
                            <h5 className="panel-title mb-0">
                              <button
                                type="button"
                                className="btn btn-link w-100 text-start text-charcoal py-2 px-3 border"
                                onClick={() => setPaymentMethod('paypal')}
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: paymentMethod === 'paypal' ? 'bold' : 'normal'
                                }}
                              >
                                PayPal
                              </button>
                            </h5>
                          </div>
                          {paymentMethod === 'paypal' && (
                            <div className="card-body border border-top-0 p-3 bg-light">
                              <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order
                                ID as the payment reference. Your order won't be shipped until the funds
                                have cleared in our account.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="order-button-payment mt-4">
                        <input value="Place order" type="submit" className="w-100 py-3 text-uppercase font-weight-bold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
