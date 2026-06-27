import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { productService } from '../services/productService';
import { brandService } from '../services/brandService';
import { useSEO } from '../utils/useSEO';

const BrandListing = () => {
  const { slug } = useParams();
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useSEO(brand ? `${brand.name} Batteries` : 'Manufacturer Products', brand ? brand.desc : 'Browse product listings by battery manufacturer brand.');

  useEffect(() => {
    const fetchBrandDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const brandData = await brandService.getBrandBySlug(slug);
        setBrand(brandData);
        
        const productsData = await productService.getProductsByBrand(brandData.name);
        setProducts(productsData);
      } catch (err) {
        setError(err.message || 'Failed to load brand products');
      } finally {
        setLoading(false);
      }
    };
    fetchBrandDetails();
  }, [slug]);

  if (error) {
    return (
      <main className="main-content">
        <PageBanner title="Error" breadcrumbs={[{ label: 'Brand' }]} />
        <div className="section-space-y-axis-100 container">
          <EmptyState title="Brand Not Found" message={error} />
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <PageBanner
        title={brand ? `${brand.name} Batteries` : 'Loading Brand...'}
        breadcrumbs={[{ label: brand ? brand.name : 'Brand' }]}
      />

      <div className="brand-listing-area section-space-y-axis-100">
        <div className="container">
          {brand && (
            <div className="row mb-7">
              <div className="col-12 text-center">
                <p className="lead text-muted max-width-600 mx-auto">{brand.desc}</p>
              </div>
            </div>
          )}

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
              title="No Products Found"
              message="We currently do not have products listed under this manufacturer. Please check back later!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default BrandListing;
