import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Compare = () => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const productsToCompare = [
    {
      id: 101,
      name: 'Tail Light',
      price: 80.0,
      image: 'assets/images/product/small-size/2-1-112x112.png',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.',
      color: 'Black',
      size: 'Medium',
      stock: 'In Stock',
      rating: 5
    },
    {
      id: 102,
      name: 'Wiper Blades',
      price: 70.0,
      image: 'assets/images/product/small-size/2-2-112x112.png',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.',
      color: 'Red',
      size: 'Large',
      stock: 'Stock Out',
      rating: 5
    }
  ];

  return (
    <main className="main-content">
      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item text-night-rider">
                <h2 className="breadcrumb-heading">Compare Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Compare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Area */}
      <div className="compare-area section-space-y-axis-100">
        <div className="container">
          <div className="compare-table table-responsive">
            <table className="table table-bordered table-hover mb-0">
              <tbody>
                <tr>
                  <th className="compare-column-titles">Image</th>
                  {productsToCompare.map((prod) => (
                    <td className="compare-column-productinfo" key={prod.id}>
                      <div className="compare-pdoduct-image">
                        <Link to="/shop">
                          <img src={getAssetUrl(prod.image)} alt={prod.name} />
                        </Link>
                        <button
                          type="button"
                          className="btn btn-custom-size lg-size btn-primary w-100 mt-3 border-0"
                          onClick={() => {
                            addToCart(prod);
                            alert(`${prod.name} added to cart!`);
                          }}
                        >
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>Product Name</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id}>
                      <h5 className="compare-product-name text-charcoal">
                        <Link to="/shop">{prod.name}</Link>
                      </h5>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>Description</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id} className="text-charcoal">{prod.description}</td>
                  ))}
                </tr>
                <tr>
                  <th>Price</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id} className="text-charcoal">{formatPrice(prod.price)}</td>
                  ))}
                </tr>
                <tr>
                  <th>Color</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id} className="text-charcoal">{prod.color}</td>
                  ))}
                </tr>
                <tr>
                  <th>Size</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id} className="text-charcoal">{prod.size}</td>
                  ))}
                </tr>
                <tr>
                  <th>Stock</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id}>
                      <span className={prod.stock === 'In Stock' ? 'text-success' : 'text-danger'}>
                        {prod.stock}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>Rating</th>
                  {productsToCompare.map((prod) => (
                    <td key={prod.id}>
                      <div className="rating-box justify-content-center">
                        <ul>
                          {Array.from({ length: prod.rating }).map((_, idx) => (
                            <li key={idx}>
                              <i className="fa fa-star"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Compare;
