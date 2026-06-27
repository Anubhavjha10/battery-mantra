import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { productService } from '../services/productService';
import { useSEO } from '../utils/useSEO';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  useSEO(`Search Results for "${query}"`, `Browse search results matching query "${query}" on Battery Mantra store.`);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await productService.searchProducts(query);
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <main className="main-content">
      <PageBanner title={`Search: "${query}"`} breadcrumbs={[{ label: 'Search Results' }]} />

      <div className="search-results-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h3 className="mb-0 font-weight-bold">
                {loading ? 'Searching products...' : `${products.length} products found for "${query}"`}
              </h3>
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
              title="No Products Found"
              message={`We couldn't find any products matching "${query}". Please check spelling or try a different term.`}
              actionText="Browse Shop"
              actionPath="/shop"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchResults;
