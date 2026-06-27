import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({
  title = 'No Items Found',
  message = 'We couldn\'t find any items matching your criteria.',
  icon = 'pe-7s-attention',
  actionText = 'Go to Shop',
  actionPath = '/shop'
}) => {
  return (
    <div className="text-center py-10 my-5">
      <div className="mb-4">
        <i className={`${icon} text-primary`} style={{ fontSize: '4rem' }}></i>
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="mb-6 text-muted max-width-500 mx-auto">{message}</p>
      {actionText && (
        <Link to={actionPath} className="btn btn-custom-size lg-size btn-primary btn-primary-hover">
          {actionText}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
