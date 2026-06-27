import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { productService } from '../services/productService';
import { useSEO } from '../utils/useSEO';

const VehicleListing = () => {
  const { brand, model } = useParams();
  const title = model ? `${brand} ${model} Batteries` : `${brand} Batteries`;
  
  useSEO(title, `Browse compatible replacement car batteries designed specifically for your ${brand} ${model || ''} vehicle.`);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompatibleProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getProductsByVehicle(brand, model);
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompatibleProducts();
  }, [brand, model]);

  return (
    <main className="main-content">
      <PageBanner title={title} breadcrumbs={[{ label: 'Vehicle Search' }, { label: brand }]} />

      <div className="vehicle-listing-area section-space-y-axis-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="mb-0 font-weight-bold">
                {loading ? 'Finding compatible batteries...' : `${products.length} compatible batteries found for your ${brand} ${model || ''}`}
              </h3>
              <p className="text-muted mt-2">All batteries listed below are guaranteed to match original factory dimensions and terminal layout specifications.</p>
            </div>
          </div>

          {loading ? (
            <LoadingSkeleton type="product" count={3} />
          ) : products.length > 0 ? (
            <div className="row g-4">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Compatible Batteries Found"
              message={`We couldn't find listed replacement batteries matching vehicle model "${brand} ${model || ''}" in our database.`}
              actionText="Contact Support"
              actionPath="/contact"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default VehicleListing;
