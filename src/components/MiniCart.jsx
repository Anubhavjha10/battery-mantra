import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const MiniCart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, cartSubtotal } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <>
      <div className={`offcanvas-minicart_wrapper ${isOpen ? 'open' : ''}`} id="miniCart">
        <div className="tromic-offcanvas-body">
          <div className="minicart-content">
            <div className="minicart-heading">
              <h4 className="mb-0">Shopping Cart</h4>
              <a href="#" className="button-close" onClick={(e) => { e.preventDefault(); onClose(); }}>
                <i
                  className="pe-7s-close"
                  data-tippy="Close"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                ></i>
              </a>
            </div>
            {cartItems.length > 0 ? (
              <ul className="minicart-list">
                {cartItems.map((item) => (
                  <li className="minicart-product" key={item.id}>
                    <a
                      className="product-item_remove"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(item.id);
                      }}
                    >
                      <i
                        className="pe-7s-trash"
                        data-tippy="Wanna Remove?"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </a>
                    <Link to="/shop" className="product-item_img" onClick={onClose}>
                      <img
                        className="img-full"
                        src={getAssetUrl(item.image)}
                        alt={item.name}
                      />
                    </Link>
                    <div className="product-item_content">
                      <Link className="product-item_title" to="/shop" onClick={onClose}>
                        {item.name}
                      </Link>
                      <span className="product-item_quantity">
                        {item.quantity} x {formatPrice(item.price)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-5">
                <p className="text-silver">Your cart is empty.</p>
              </div>
            )}
          </div>
          <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">{formatPrice(cartSubtotal)}</span>
          </div>
          <div className="group-btn_wrap d-grid gap-2">
            <Link to="/cart" className="btn btn-dark btn-primary-hover" onClick={onClose}>
              View Cart
            </Link>
            <Link to="/checkout" className="btn btn-dark btn-primary-hover" onClick={onClose}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <div className="global-overlay overlay-open" onClick={onClose}></div>}
    </>
  );
};

export default MiniCart;
