import { ordersData } from '../data/placeholderData';

export const orderService = {
  getOrders: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return ordersData;
  },

  getOrderById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const order = ordersData.find((o) => o.id === id);
    if (!order) throw new Error('Order not found');
    return order;
  },

  trackOrder: async (orderId) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const order = ordersData.find((o) => o.id.toLowerCase() === orderId.toLowerCase());
    if (!order) throw new Error('Order not found');
    return {
      id: order.id,
      status: order.status,
      trackingNumber: order.trackingNumber,
      date: order.date,
      timeline: [
        { title: 'Order Placed', date: order.date, status: 'completed' },
        { title: 'Processing', date: order.date, status: 'completed' },
        { title: 'Shipped', date: order.date, status: order.status === 'Delivered' || order.status === 'Shipped' ? 'completed' : 'pending' },
        { title: 'Out for Delivery', date: '', status: order.status === 'Delivered' ? 'completed' : 'pending' },
        { title: 'Delivered', date: '', status: order.status === 'Delivered' ? 'completed' : 'pending' }
      ]
    };
  },

  createOrder: async (orderData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newOrder = {
      id: `BTM-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      trackingNumber: 'TRK-PENDING',
      ...orderData
    };
    return newOrder;
  }
};
