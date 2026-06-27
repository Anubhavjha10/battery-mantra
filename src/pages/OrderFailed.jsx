import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useSEO } from '../utils/useSEO';

const OrderFailed = () => {
  useSEO('Payment Failed', 'Your Battery Mantra order checkout or payment process failed.');

  return (
    <main className="main-content">
      <PageBanner title="Order Failed" breadcrumbs={[{ label: 'Checkout', path: '/checkout' }, { label: 'Payment Failed' }]} />

      <div className="order-status-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="p-5 border rounded bg-white shadow-sm">
                <div className="mb-4">
                  <i className="fa fa-times-circle text-danger" style={{ fontSize: '5rem' }}></i>
                </div>
                <h2 className="mb-2 font-weight-bold">Payment Unsuccessful</h2>
                <p className="lead text-muted mb-4">We were unable to process your payment transaction. Your bank did not authorize the charge.</p>
                
                <div className="bg-light p-3 border rounded mb-4 text-start">
                  <h5 className="font-weight-bold mb-2">Troubleshooting Steps:</h5>
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Verify that your card details (number, expiry, CVV) are correct.</li>
                    <li className="mb-1">Check if international usage or online transactions are disabled on your card.</li>
                    <li className="mb-0">Try checking out again with another payment method (UPI, NetBanking, COD).</li>
                  </ul>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                  <Link to="/checkout" className="btn btn-primary px-4 py-3">
                    Retry Payment
                  </Link>
                  <Link to="/contact" className="btn btn-outline-secondary px-4 py-3">
                    Contact Helpline
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

export default OrderFailed;
