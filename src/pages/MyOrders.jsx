import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import OrderCard from '../components/OrderCard';
import { orderService } from '../services/orderService';
import { useSEO } from '../utils/useSEO';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useSEO('My Orders', 'Check your purchase history and order status details on Battery Mantra.');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.getOrders();
        setOrders(data || []);
      } catch (err) {
        setErrorMsg('Failed to load your orders.');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <main className="main-content">
      <PageBanner title="My Orders" breadcrumbs={[{ label: 'My Account', url: '/my-account' }, { label: 'Orders' }]} />

      <div className="my-orders-area section-space-y-axis-100">
        <div className="container">
          <h3 className="text-charcoal mb-6">Order History</h3>

          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          {loading ? (
            <LoadingSkeleton type="order" count={3} />
          ) : orders.length === 0 ? (
            <EmptyState
              title="No Orders Placed Yet"
              message="You haven't ordered any products. Browse our shop to find the best batteries!"
            />
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-9">
                {orders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyOrders;
