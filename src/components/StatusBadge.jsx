import React from 'react';

const StatusBadge = ({ status }) => {
  const getBadgeStyle = () => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
          borderColor: '#c3e6cb'
        };
      case 'shipped':
        return {
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          borderColor: '#bee5eb'
        };
      case 'pending':
        return {
          backgroundColor: '#fff3cd',
          color: '#856404',
          borderColor: '#ffeeba'
        };
      case 'cancelled':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderColor: '#f5c6cb'
        };
      default:
        return {
          backgroundColor: '#e2e3e5',
          color: '#383d41',
          borderColor: '#d6d8db'
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <span
      className="badge px-3 py-2 border rounded-pill d-inline-block"
      style={{
        ...style,
        fontSize: '0.85rem',
        fontWeight: '600',
        textTransform: 'capitalize'
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
