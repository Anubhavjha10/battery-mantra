import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const ProductCard = ({ product, layout = 'grid' }) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const isListView = layout === 'list';

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const productRating = product.rating || 5;

  if (isListView) {
    return (
      <div className="product-list-item">
        <div className="product-list-img img-zoom-effect position-relative">
          <Link to="/single-product">
            <img
              className="img-full main-img"
              src={getAssetUrl(product.image)}
              alt={product.name}
            />
            {product.hoverImage && (
              <img
                className="img-full hover-img position-absolute top-0 start-0 opacity-0"
                src={getAssetUrl(product.hoverImage)}
                alt={product.name}
                style={{ transition: 'opacity 0.3s ease' }}
              />
            )}
          </Link>
          {product.isSale && (
            <div className="product-badge bg-danger text-white position-absolute top-0 start-0 m-3 px-2 py-1" style={{ fontSize: '12px' }}>
              Sale
            </div>
          )}
        </div>
        <div className="product-list-content">
          <Link className="product-name pb-2" to="/single-product">
            {product.name}
          </Link>
          <div className="price-box pb-1">
            <span className="new-price text-primary">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="old-price text-muted text-decoration-line-through ms-2">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
          <div className="rating-box pb-2">
            <ul>
              {Array.from({ length: productRating }).map((_, idx) => (
                <li key={idx} className="d-inline-block text-warning me-1">
                  <i className="fa fa-star"></i>
                </li>
              ))}
            </ul>
          </div>
          <p className="short-desc mb-4">{product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
          <div className="product-add-action">
            <ul className="d-flex align-items-center gap-2 list-unstyled">
              <li>
                <a
                  href="#"
                  className="btn btn-custom-size btn-primary"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </a>
              </li>
              <li>
                <Link
                  className="border rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  to="/wishlist"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="pe-7s-like" style={{ fontSize: '18px' }}></i>
                </Link>
              </li>
              <li>
                <Link
                  className="border rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  to="/compare"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="pe-7s-shuffle" style={{ fontSize: '18px' }}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="product-item">
      <div className="product-img img-zoom-effect position-relative">
        <Link to="/single-product">
          <img
            className="img-full"
            src={getAssetUrl(product.image)}
            alt={product.name}
          />
        </Link>
        {product.isSale && (
          <div className="product-badge bg-danger text-white position-absolute top-0 start-0 m-3 px-2 py-1" style={{ fontSize: '12px' }}>
            Sale
          </div>
        )}
      </div>
      <div className="product-content">
        <Link className="product-name pb-1" to="/single-product">
          {product.name}
        </Link>
        <div className="price-box">
          <div className="price-box-holder">
            <span>Price:</span>
            <span className="new-price text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="old-price text-muted text-decoration-line-through ms-2">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
        </div>
        <div className="product-add-action">
          <ul>
            <li>
              <a
                href="#"
                onClick={handleAddToCart}
                data-tippy="Add to cart"
              >
                <i className="pe-7s-cart"></i>
              </a>
            </li>
            <li>
              <Link
                to="/wishlist"
                data-tippy="Add to wishlist"
              >
                <i className="pe-7s-like"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/compare"
                data-tippy="Add to compare"
              >
                <i className="pe-7s-shuffle"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
