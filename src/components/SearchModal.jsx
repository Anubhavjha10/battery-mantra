import React, { useState, useEffect } from 'react';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState('Search entire store here...');

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, route to search results or filter
    onClose();
  };

  return (
    <div
      className={`modal fade ${isOpen ? 'show' : ''}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModal"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? 'block' : 'none',
        backgroundColor: isOpen ? 'rgba(0,0,0,0.5)' : 'transparent',
        zIndex: 1050,
      }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-fullscreen" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-search">
              <span className="searchbox-info">Start typing and press Enter to search or ESC to close</span>
              <form onSubmit={handleSubmit} className="hm-searchbox">
                <input
                  type="text"
                  name="Search entire store here..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={() => {
                    if (searchValue === '') {
                      setSearchValue('Search entire store here...');
                    }
                  }}
                  onFocus={() => {
                    if (searchValue === 'Search entire store here...') {
                      setSearchValue('');
                    }
                  }}
                />
                <button className="search-btn" type="submit" aria-label="searchbtn">
                  <i className="pe-7s-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
