import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const Footer = () => {
  return (
    <div className="footer-area">
      <div
        className="footer-top section-space-y-axis-100 text-lavender bg-midnight-express"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/background-img/1-4-1920x419.png')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="widget-item">
                <div className="footer-logo pb-4">
                  <Link to="/" className="d-inline-block bg-white rounded p-2">
                    <img src={getAssetUrl('assets/images/logo/light.png')} alt="Battery Mantra Logo" style={{ maxHeight: '45px' }} />
                  </Link>
                </div>
                <p className="short-desc mb-2">
                  Battery Mantra is your one-stop solution for all automotive battery and car accessories needs. We supply high-quality and durable products for all vehicles.
                </p>
                <div className="social-link pt-2">
                  <ul>
                    <li>
                      <a href="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tippy="Tumblr" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                        <i className="fa fa-tumblr"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tippy="Facebook" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tippy="Instagram" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-sm-4 pt-8 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">Quick Links</h3>
                <ul className="widget-list-item">
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Helpline</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Event</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Subject</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 pt-8 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">Company</h3>
                <ul className="widget-list-item">
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Speakers</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Ticket</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Seminar</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 pt-8 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">About Battery Mantra</h3>
                <ul className="widget-list-item">
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">How to Shop</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/wishlist">My Wishlist</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/login-register">Log in</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/faq">Help</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 pt-8 pt-lg-0">
              <div className="widget-item">
                <h3 className="widget-title mb-5">Store Information.</h3>
              </div>
              <div className="widget-contact-info pb-2">
                <ul>
                  <li>
                    2005 Stokes Isle Apartment. 896, Washington 10010, USA,
                  </li>
                  <li>
                    <a href="mailto://info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <a href="tel://+68-120034509">(+68) 120034509</a>
                  </li>
                </ul>
              </div>
              <div className="payment-method">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <img src={getAssetUrl('assets/images/payment/1.png')} alt="Payment Method" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom bg-midnight-express py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <span className="copyright-text">
                  © 2022 Battery Mantra Made with <i className="fa fa-heart text-danger"></i> by{' '}
                  <a href="https://themeforest.net/user/codecarnival/portfolio" rel="noopener" target="_blank">
                    CodeCarnival
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
