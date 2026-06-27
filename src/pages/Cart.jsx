import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    updateQuantityExact,
    cartSubtotal
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(10.0);
      alert('Coupon Applied: $10.00 discount!');
    } else {
      alert('Invalid Coupon Code!');
    }
  };

  const handleUpdateCart = (e) => {
    e.preventDefault();
    alert('Cart updated successfully!');
  };

  const finalTotal = Math.max(0, cartSubtotal - discount);

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
                <h2 className="breadcrumb-heading">Cart Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Area */}
      <div className="cart-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cartItems.length > 0 ? (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product_remove">remove</th>
                          <th className="product-thumbnail">images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product_remove">
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeFromCart(item.id);
                                }}
                              >
                                <i
                                  className="pe-7s-trash"
                                  data-tippy="Remove"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay="50"
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                ></i>
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <Link to="/shop">
                                <img
                                  src={getAssetUrl(item.image)}
                                  alt={item.name}
                                  style={{ width: '112px', height: '112px', objectFit: 'contain' }}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to="/shop">{item.name}</Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">{formatPrice(item.price)}</span>
                            </td>
                            <td className="quantity">
                              <div className="cart-plus-minus mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button
                                  type="button"
                                  className="dec qtybutton btn btn-link p-0 border-0 text-charcoal"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  style={{ width: '30px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  className="cart-plus-minus-box text-center"
                                  value={item.quantity}
                                  type="text"
                                  readOnly
                                  style={{ width: '50px', border: 'none', background: 'transparent' }}
                                />
                                <button
                                  type="button"
                                  className="inc qtybutton btn btn-link p-0 border-0 text-charcoal"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  style={{ width: '30px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Coupon code"
                            type="text"
                          />
                          <button
                            className="button mt-xxs-30"
                            onClick={handleApplyCoupon}
                            type="submit"
                          >
                            Apply coupon
                          </button>
                        </div>
                        <div className="coupon2">
                          <button className="button" onClick={handleUpdateCart} type="submit">
                            Update cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul>
                          <li>
                            Subtotal <span>{formatPrice(cartSubtotal)}</span>
                          </li>
                          {discount > 0 && (
                            <li>
                              Discount <span>-{formatPrice(discount)}</span>
                            </li>
                          )}
                          <li>
                            Total <span>{formatPrice(finalTotal)}</span>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-link p-0 border-0 w-100 text-start"
                          onClick={() => navigate('/checkout')}
                          style={{ textDecoration: 'none' }}
                        >
                          Proceed to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <h3 className="mb-4">Your Shopping Cart is Empty</h3>
                  <p className="mb-6">Add products to your cart to see them here.</p>
                  <Link to="/shop" className="btn btn-custom-size lg-size btn-primary btn-primary-hover">
                    Go To Shop
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
