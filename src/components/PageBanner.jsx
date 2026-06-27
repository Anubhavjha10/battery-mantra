import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const PageBanner = ({ title, breadcrumbs = [] }) => {
  return (
    <div
      className="breadcrumb-area breadcrumb-height"
      style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12">
            <div className="breadcrumb-item text-night-rider">
              <h1 className="breadcrumb-heading h2 mb-2">{title}</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx}>
                    <span className="mx-2">/</span>
                    {crumb.path ? (
                      <Link to={crumb.path}>{crumb.label}</Link>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
