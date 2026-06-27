import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const OrderSuccess = () => {
  useSEO('Order Confirmed', 'Thank you for your purchase. Your Battery Mantra order is being processed.');
  const location = useLocation();
  const orderId = location.state?.orderId || 'BTM-78902'; // fallback or mock

  return (
    <main className="main-content">
      <PageBanner title="Order Success" breadcrumbs={[{ label: 'Checkout', path: '/checkout' }, { label: 'Success' }]} />

      <div className="order-status-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="p-5 border rounded bg-white shadow-sm">
                <div className="mb-4">
                  <i className="fa fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                </div>
                <h2 className="mb-2 font-weight-bold">Thank You For Your Order!</h2>
                <p className="lead text-muted mb-4">Your order has been successfully placed and is now being prepared for shipping.</p>
                
                <div className="bg-light p-3 border rounded mb-4 text-start">
                  <p className="mb-2"><strong>Order Reference:</strong> {orderId}</p>
                  <p className="mb-2"><strong>Status:</strong> Processing</p>
                  <p className="mb-0"><strong>Estimated Delivery:</strong> Within 2-4 hours (Doorstep Installation)</p>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                  <Link to={`/order-details/${orderId}`} className="btn btn-outline-primary px-4 py-3">
                    View Order Details
                  </Link>
                  <Link to="/shop" className="btn btn-primary px-4 py-3">
                    Continue Shopping
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

export default OrderSuccess;
