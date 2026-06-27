import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Timeline from '../components/Timeline';
import StatusBadge from '../components/StatusBadge';
import { orderService } from '../services/orderService';
import { useSEO } from '../utils/useSEO';

const TrackOrder = () => {
  useSEO('Track Order', 'Track the status and delivery progress of your Battery Mantra order online.');

  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!orderId.trim()) {
      setError('Please enter a valid Order ID');
      return;
    }
    setError('');
    setLoading(true);
    setTrackingInfo(null);

    try {
      const data = await orderService.trackOrder(orderId.trim());
      setTrackingInfo(data);
    } catch (err) {
      setError(err.message || 'Order not found. Please verify the ID and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-content">
      <PageBanner title="Track Your Order" breadcrumbs={[{ label: 'Track Order' }]} />

      <div className="track-order-area section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-5 border rounded bg-white shadow-sm mb-6">
                <h3 className="text-center mb-4">Track Order Status</h3>
                <form onSubmit={handleTrack} className="row g-3 align-items-center">
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control p-3 border rounded w-100"
                      placeholder="Enter your Order ID (e.g., BTM-78901)"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 font-weight-bold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Tracking...
                        </>
                      ) : (
                        'Track Order'
                      )}
                    </button>
                  </div>
                </form>
                {error && <div className="text-danger mt-3 font-weight-bold">{error}</div>}
              </div>

              {trackingInfo && (
                <div className="p-5 border rounded bg-white shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom flex-wrap gap-2">
                    <div>
                      <h4 className="mb-1 font-weight-bold">Order ID: {trackingInfo.id}</h4>
                      <span className="text-muted" style={{ fontSize: '0.9rem' }}>Tracking Reference: {trackingInfo.trackingNumber}</span>
                    </div>
                    <div>
                      <StatusBadge status={trackingInfo.status} />
                    </div>
                  </div>

                  <h5 className="font-weight-bold mb-3">Delivery Timeline</h5>
                  <Timeline events={trackingInfo.timeline} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;
