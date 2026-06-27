import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCurrency } from '../context/CurrencyContext';
import StatusBadge from './StatusBadge';

const OrderCard = ({ order }) => {
  const { formatPrice } = useCurrency();

  return (
    <div className="card order-card mb-4 border rounded p-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="row align-items-center mb-3">
        <div className="col-md-3">
          <span className="text-muted d-block" style={{ fontSize: '0.85rem' }}>ORDER ID</span>
          <strong className="text-dark">{order.id}</strong>
        </div>
        <div className="col-md-3">
          <span className="text-muted d-block" style={{ fontSize: '0.85rem' }}>DATE PLACED</span>
          <span className="text-dark">{order.date}</span>
        </div>
        <div className="col-md-3">
          <span className="text-muted d-block" style={{ fontSize: '0.85rem' }}>TOTAL</span>
          <strong className="text-primary">{formatPrice(order.total)}</strong>
        </div>
        <div className="col-md-3 text-md-end">
          <span className="text-muted d-block d-md-none mb-1" style={{ fontSize: '0.85rem' }}>STATUS</span>
          <StatusBadge status={order.status} />
        </div>
      </div>

      <div className="border-top pt-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          {order.items.map((item, idx) => (
            <div key={idx} className="border rounded p-1 bg-white" style={{ width: '60px', height: '60px' }}>
              <img
                src={getAssetUrl(item.image)}
                alt={item.name}
                className="img-fluid"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
          <div className="ms-2">
            <p className="mb-0 text-dark font-weight-bold" style={{ fontSize: '0.95rem' }}>
              {order.items[0].name} {order.items.length > 1 ? `+ ${order.items.length - 1} more items` : ''}
            </p>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Qty: {order.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
        </div>
        <div>
          <Link
            to={`/order-details/${order.id}`}
            className="btn btn-sm btn-outline-primary px-3 py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
