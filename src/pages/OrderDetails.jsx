import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import StatusBadge from '../components/StatusBadge';
import Timeline from '../components/Timeline';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { orderService } from '../services/orderService';
import { useCurrency } from '../context/CurrencyContext';
import { getAssetUrl } from '../utils/helpers';
import { useSEO } from '../utils/useSEO';

const OrderDetails = () => {
  const { id } = useParams();
  useSEO(`Order Details #${id}`, `View details for order reference #${id} on Battery Mantra.`);
  
  const { formatPrice } = useCurrency();
  const [order, setOrder] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const orderData = await orderService.getOrderById(id);
        setOrder(orderData);
        
        const trackData = await orderService.trackOrder(id);
        setTimeline(trackData.timeline);
      } catch (err) {
        setError(err.message || 'Order details not found');
      } finally {
        setLoading(false);
      }
    };
    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return (
      <main className="main-content">
        <PageBanner title="Loading Order..." breadcrumbs={[{ label: 'My Account', path: '/my-account' }, { label: 'Order Details' }]} />
        <div className="section-space-y-axis-100 container">
          <LoadingSkeleton type="list" count={2} />
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="main-content">
        <PageBanner title="Error" breadcrumbs={[{ label: 'My Account', path: '/my-account' }, { label: 'Order Details' }]} />
        <div className="section-space-y-axis-100 container">
          <EmptyState title="Order Not Found" message={error} actionText="Back to Account" actionPath="/my-account" />
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <PageBanner title={`Order Details #${order.id}`} breadcrumbs={[{ label: 'My Account', path: '/my-account' }, { label: `Order #${order.id}` }]} />

      <div className="order-details-area section-space-y-axis-100">
        <div className="container">
          <div className="row g-4">
            {/* Left side: status & items */}
            <div className="col-lg-8">
              <div className="p-4 border rounded bg-white shadow-sm mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
                  <div>
                    <h5 className="mb-0 font-weight-bold">Order Placement Date: {order.date}</h5>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>Shipping Reference: {order.trackingNumber}</span>
                  </div>
                  <StatusBadge status={order.status} />
                </div>

                <h5 className="font-weight-bold mb-3">Order Items</h5>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="border rounded p-1 bg-white" style={{ width: '50px', height: '50px' }}>
                                <img
                                  src={getAssetUrl(item.image)}
                                  alt={item.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                              </div>
                              <span className="text-dark font-weight-bold">{item.name}</span>
                            </div>
                          </td>
                          <td className="text-center">{formatPrice(item.price)}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-end font-weight-bold text-dark">{formatPrice(item.price * item.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Delivery Progress Timeline */}
              <div className="p-4 border rounded bg-white shadow-sm">
                <h5 className="font-weight-bold mb-4">Delivery Timeline</h5>
                <Timeline events={timeline} />
              </div>
            </div>

            {/* Right side: Address and invoice totals summary */}
            <div className="col-lg-4">
              {/* Shipping Address */}
              <div className="p-4 border rounded bg-white shadow-sm mb-4">
                <h5 className="font-weight-bold mb-3"><i className="fa fa-truck text-primary me-2"></i>Delivery Address</h5>
                <p className="mb-1 text-dark font-weight-bold">{order.shippingAddress.fullName}</p>
                <p className="mb-1 text-muted">{order.shippingAddress.street}</p>
                <p className="mb-1 text-muted">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.zipCode}</p>
                <p className="mb-0 text-muted"><i className="fa fa-phone me-1"></i> {order.shippingAddress.phone}</p>
              </div>

              {/* Order Invoice Summary */}
              <div className="p-4 border rounded bg-white shadow-sm">
                <h5 className="font-weight-bold mb-3"><i className="fa fa-file-text-o text-primary me-2"></i>Invoice Details</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-dark">{formatPrice(order.total)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="d-flex justify-content-between border-top pt-2 mt-2 font-weight-bold">
                  <span className="text-dark">Total</span>
                  <span className="text-primary" style={{ fontSize: '1.2rem' }}>{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
