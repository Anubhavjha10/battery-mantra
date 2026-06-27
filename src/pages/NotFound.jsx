import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const NotFound = () => {
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
                <h2 className="breadcrumb-heading">Error 404</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error 404 Area */}
      <div className="error-404-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="error-404-content">
                <h1 className="title mb-5">404</h1>
                <h2 className="sub-title mb-4">
                  <span>Sorry,</span> this page not found!
                </h2>
                <p className="short-desc mb-7">
                  Seems like nothing was found at this location. Try something else or you can go back to the homepage
                  following the button below!
                </p>
                <div className="button-wrap">
                  <Link
                    className="btn btn-custom-size lg-size btn-primary btn-secondary-hover rounded-0"
                    to="/"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-404-img">
                <div className="scene fill">
                  <div className="layer expand-width" data-depth="0.2"></div>
                </div>
                <div className="scene fill">
                  <div className="single-img expand-width" data-depth="0.2">
                    <img src={getAssetUrl('assets/images/error-404/1.png')} alt="Error Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Area */}
      <div
        className="banner-area banner-style-2 section-border-y-axis section-space-y-axis-100"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/background-img/1-3-1920x208.png')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <span className="sub-title mb-2">30% Limited Time Offer</span>
                <h2 className="title mb-5">car Parts for short people</h2>
                <div className="button-wrap">
                  <Link className="btn btn-custom-size lg-size btn-primary" to="/shop">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
