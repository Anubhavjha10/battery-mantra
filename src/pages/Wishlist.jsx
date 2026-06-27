import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Wishlist = () => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 101,
      name: 'Tail Light',
      price: 80.0,
      image: 'assets/images/product/small-size/2-1-112x112.png',
      stockStatus: 'in stock'
    },
    {
      id: 102,
      name: 'Wiper Blades',
      price: 80.0,
      image: 'assets/images/product/small-size/2-2-112x112.png',
      stockStatus: 'out stock'
    },
    {
      id: 103,
      name: 'Suspension',
      price: 80.0,
      image: 'assets/images/product/small-size/2-3-112x112.png',
      stockStatus: 'in stock'
    }
  ]);

  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
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
                <h2 className="breadcrumb-heading">Wishlist Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Area */}
      <div className="wishlist-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {wishlistItems.length > 0 ? (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product_remove">remove</th>
                          <th className="product-thumbnail">images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-stock-status">Stock Status</th>
                          <th className="cart_btn">add to cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product_remove">
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemove(item.id);
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
                            <td className="product-stock-status">
                              <span className={`in-stock ${item.stockStatus === 'out stock' ? 'text-danger' : ''}`}>
                                {item.stockStatus}
                              </span>
                            </td>
                            <td className="cart_btn">
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAddToCart(item);
                                }}
                              >
                                add to cart
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <h3 className="mb-4">Your Wishlist is Empty</h3>
                  <p className="mb-6">Explore our store and add items to your wishlist!</p>
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

export default Wishlist;
