import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';
import { useSEO } from '../utils/useSEO';

const CategoryListing = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useSEO(category ? category.name : 'Category Products', category ? category.desc : 'Browse product listings in category.');

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const catData = await categoryService.getCategoryBySlug(slug);
        setCategory(catData);
        
        const productsData = await productService.getProductsByCategory(catData.name);
        setProducts(productsData);
      } catch (err) {
        setError(err.message || 'Failed to load category products');
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryDetails();
  }, [slug]);

  if (error) {
    return (
      <main className="main-content">
        <PageBanner title="Error" breadcrumbs={[{ label: 'Category' }]} />
        <div className="section-space-y-axis-100 container">
          <EmptyState title="Category Not Found" message={error} />
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <PageBanner
        title={category ? category.name : 'Loading Category...'}
        breadcrumbs={[{ label: category ? category.name : 'Category' }]}
      />

      <div className="category-listing-area section-space-y-axis-100">
        <div className="container">
          {category && (
            <div className="row mb-7">
              <div className="col-12 text-center">
                <p className="lead text-muted max-width-600 mx-auto">{category.desc}</p>
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
              title="No Products in Category"
              message="We currently do not have products listed under this category. Please check back later!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryListing;
