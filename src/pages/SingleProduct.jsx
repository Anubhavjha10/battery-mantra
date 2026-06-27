import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const SingleProduct = ({ style = 'default' }) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 999,
    name: 'Auto Clutch & Brake',
    price: 440.0,
    image: 'assets/images/product/medium-size/shop/1-1-290x350.jpg',
    images: [
      'assets/images/product/large-size/2-1-618x578.jpg',
      'assets/images/product/large-size/2-2-618x578.jpg',
      'assets/images/product/large-size/2-3-618x578.jpg',
      'assets/images/product/large-size/2-4-618x578.jpg'
    ],
    rating: 5,
    category: 'Accessories',
    tags: ['Furniture', 'Auto Parts'],
    desc: 'Lorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com consequat. Duis aute irure dolor in reprehend in voluptate velit esse cillum dolore'
  };

  const handleAddToCart = () => {
    // Add multiple quantities to cart
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} x ${product.name} added to cart!`);
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
                <h2 className="breadcrumb-heading">Product Style ({style})</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Single Product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Area */}
      <div className="single-product-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-product-img">
                <div className="swiper-container single-product-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="#" className="single-img gallery-popup">
                        <img className="img-full" src={getAssetUrl(product.images[0])} alt="Product Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-thumb-wrap pt-5 row">
                <div className="col-12">
                  <div className="thumbs-arrow-holder p-0">
                    <div className="d-flex gap-3">
                      {product.images.map((img, idx) => (
                        <div key={idx} style={{ width: '80px', height: '80px', border: '1px solid #eee', cursor: 'pointer' }}>
                          <img className="img-full" src={getAssetUrl(img)} alt="Product Thumbnail" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-9 pt-lg-0">
              <div className="single-product-content">
                <h2 className="title mb-3">{product.name}</h2>
                <div className="price-box pb-3">
                  <span className="new-price text-danger">{formatPrice(product.price)}</span>
                </div>
                <div className="rating-box-wrap pb-3">
                  <div className="rating-box">
                    <ul>
                      {Array.from({ length: product.rating }).map((_, idx) => (
                        <li key={idx}>
                          <i className="fa fa-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="review-status ps-4">
                    <a href="#reviews" onClick={() => setActiveTab('reviews')}>
                      ( 5 Customer Review )
                    </a>
                  </div>
                </div>
                <p className="short-desc mb-3">{product.desc}</p>
                <ul className="quantity-with-btn pb-5 d-flex align-items-center gap-3 list-unstyled">
                  <li className="quantity">
                    <div className="cart-plus-minus d-flex align-items-center">
                      <button
                        type="button"
                        className="dec qtybutton btn btn-link text-charcoal border-0 p-2"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        className="cart-plus-minus-box text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                        type="text"
                        style={{ width: '50px', border: 'none', background: 'transparent' }}
                      />
                      <button
                        type="button"
                        className="inc qtybutton btn btn-link text-charcoal border-0 p-2"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </li>
                  <li className="add-to-cart">
                    <button
                      type="button"
                      className="btn btn-custom-size lg-size btn-primary"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </li>
                  <li className="wishlist-btn-wrap">
                    <Link className="custom-circle-btn border rounded-circle p-3 d-inline-flex justify-content-center align-items-center" to="/wishlist" style={{ width: '50px', height: '50px' }}>
                      <i className="pe-7s-like" style={{ fontSize: '20px' }}></i>
                    </Link>
                  </li>
                  <li className="compare-btn-wrap">
                    <Link className="custom-circle-btn border rounded-circle p-3 d-inline-flex justify-content-center align-items-center" to="/compare" style={{ width: '50px', height: '50px' }}>
                      <i className="pe-7s-refresh-2" style={{ fontSize: '20px' }}></i>
                    </Link>
                  </li>
                </ul>
                <div className="product-category pb-3">
                  <span className="title">Categories : </span>
                  <Link to="/shop" className="text-charcoal ms-2">
                    {product.category}
                  </Link>
                </div>
                <div className="product-category product-tags pb-3">
                  <span className="title">Tags : </span>
                  {product.tags.map((tag) => (
                    <Link key={tag} to="/shop" className="text-charcoal ms-2">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Area */}
      <div className="product-tab-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav product-tab-nav mb-10 d-flex justify-content-center gap-4 list-unstyled" role="tablist">
                <li className="nav-item">
                  <button
                    className={`tab-btn btn btn-link text-uppercase text-decoration-none border-0 ${activeTab === 'information' ? 'active text-primary' : 'text-charcoal'}`}
                    onClick={() => setActiveTab('information')}
                  >
                    Information
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`tab-btn btn btn-link text-uppercase text-decoration-none border-0 ${activeTab === 'description' ? 'active text-primary' : 'text-charcoal'}`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`tab-btn btn btn-link text-uppercase text-decoration-none border-0 ${activeTab === 'reviews' ? 'active text-primary' : 'text-charcoal'}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews(5)
                  </button>
                </li>
              </ul>
              <div className="tab-content product-tab-content">
                {activeTab === 'information' && (
                  <div className="tab-pane fade show active">
                    <div className="product-information-body">
                      <h4 className="title">Shipping</h4>
                      <p className="short-desc mb-4">
                        The item will be shipped from China. So it need 15-20 days to deliver. Our product is good with reasonable price and we believe you will worth it. So please wait for it patiently! Thanks.Any question please kindly to contact us and we promise to work hard to help you to solve the problem
                      </p>
                      <h4 class="title">About return request</h4>
                      <p class="short-desc mb-4">If you don't need the item with worry, you can contact us then we will help you to solve the problem, so please close the return request! Thanks</p>
                      <h4 class="title">Guarantee</h4>
                      <p class="short-desc mb-0">If it is the quality question, we will resend or refund to you; If you receive damaged or wrong items, please contact us and attach some pictures about product, we will exchange a new correct item to you after the confirmation.</p>
                    </div>
                  </div>
                )}
                {activeTab === 'description' && (
                  <div className="tab-pane fade show active">
                    <div className="product-description-body">
                      <p className="short-desc mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintdjrufoksk occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="tab-pane fade show active">
                    <div className="product-review-body">
                      <div className="blog-comment">
                        <h4 className="heading mb-7">3 Comments</h4>
                        <div className="blog-comment-item mb-8 d-flex gap-4">
                          <div className="blog-comment-img" style={{ width: '80px', height: '80px' }}>
                            <img src={getAssetUrl('assets/images/blog/avatar/3-1-101x101.png')} className="rounded-circle" alt="User Image" />
                          </div>
                          <div className="blog-comment-content pb-8">
                            <div className="user-meta">
                              <span><strong>Aidyn Cody -</strong> Jul 21,2022 at 15 hours ago</span>
                            </div>
                            <p className="user-comment mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci labore et dol magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                          </div>
                        </div>
                      </div>
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

export default SingleProduct;
