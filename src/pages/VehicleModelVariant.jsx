import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { productService } from '../services/productService';
import { useSEO } from '../utils/useSEO';

const VehicleModelVariant = () => {
  const { brand, model, variant } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const formatParam = (str) => {
    if (!str) return '';
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const cleanBrand = formatParam(brand);
  const cleanModel = formatParam(model);
  const cleanVariant = formatParam(variant);
  const vehicleName = `${cleanBrand} ${cleanModel} (${cleanVariant})`;

  useSEO(`${vehicleName} Batteries`, `Find high-performance, long-lasting replacement batteries compatible with your ${vehicleName}.`);

  useEffect(() => {
    const fetchCompatibleProducts = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        // Query products by vehicle info
        const data = await productService.getProductsByVehicle(cleanBrand, cleanModel);
        setProducts(data || []);
      } catch (err) {
        setErrorMsg('Failed to query compatible batteries.');
      } finally {
        setLoading(false);
      }
    };
    fetchCompatibleProducts();
  }, [brand, model, variant]);

  return (
    <main className="main-content">
      <PageBanner
        title={`${cleanBrand} ${cleanModel}`}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Battery Finder', url: '/battery-finder' },
          { label: cleanModel }
        ]}
      />

      <div className="vehicle-model-variant-area section-space-y-axis-100">
        <div className="container">
          <div className="border rounded bg-light p-6 mb-8 d-flex justify-content-between align-items-center flex-wrap gap-4">
            <div>
              <h4 className="text-charcoal font-weight-bold mb-1">Selected Automobile Profile</h4>
              <p className="text-muted mb-0">
                <strong>Make:</strong> {cleanBrand} | <strong>Model:</strong> {cleanModel} | <strong>Variant/Trim:</strong> {cleanVariant}
              </p>
            </div>
            <Link to="/battery-finder" className="btn btn-outline-primary">
              Change Selection
            </Link>
          </div>

          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          {loading ? (
            <LoadingSkeleton type="product" count={3} />
          ) : products.length > 0 ? (
            <div>
              <h3 className="text-charcoal mb-6">Compatible Battery Options ({products.length})</h3>
              <div className="row g-4">
                {products.map((product) => (
                  <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <EmptyState
              title="No Compatible Batteries Found"
              message={`We currently do not have matching batteries indexed for the ${cleanBrand} ${cleanModel} ${cleanVariant}. Please contact our helpline for manual assistance.`}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default VehicleModelVariant;
