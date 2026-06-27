import React from 'react';

const AddressCard = ({ address, onEdit, onDelete, onSelect, isSelected = false }) => {
  return (
    <div
      className={`card address-card h-100 p-4 border rounded ${isSelected ? 'border-primary' : ''}`}
      style={{ cursor: onSelect ? 'pointer' : 'default', backgroundColor: isSelected ? '#fcf8f2' : '#ffffff' }}
      onClick={() => onSelect && onSelect(address)}
    >
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h5 className="mb-0 font-weight-bold">{address.fullName}</h5>
        {address.isDefault && (
          <span className="badge bg-primary text-white" style={{ fontSize: '0.75rem' }}>Default</span>
        )}
      </div>
      <p className="text-muted mb-1">{address.street}</p>
      <p className="text-muted mb-1">{address.city}, {address.state} - {address.zipCode}</p>
      <p className="text-muted mb-3"><i className="fa fa-phone me-2 text-primary"></i>{address.phone}</p>
      
      {(onEdit || onDelete) && (
        <div className="d-flex gap-2 border-top pt-3 mt-auto">
          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(address);
              }}
              className="btn btn-sm btn-outline-secondary d-flex align-items-center"
              style={{ fontSize: '0.85rem' }}
            >
              <i className="fa fa-edit me-1"></i> Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(address.id);
              }}
              className="btn btn-sm btn-outline-danger d-flex align-items-center"
              style={{ fontSize: '0.85rem' }}
            >
              <i className="fa fa-trash me-1"></i> Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressCard;
