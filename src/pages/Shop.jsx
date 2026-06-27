import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';

const Shop = ({ layout = 'default' }) => {
  const { addToCart } = useCart();
  const isListLayoutDefault = layout.startsWith('list');
  const hasSidebar = !layout.includes('fullwidth');
  const isSidebarRight = layout.includes('right-sidebar');

  const [isGridView, setIsGridView] = useState(!isListLayoutDefault);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(350);
  const [sortOption, setSortOption] = useState('default');

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShopData = async () => {
      setLoading(true);
      try {
        const [prodData, catData] = await Promise.all([
          productService.getProducts(),
          categoryService.getCategories()
        ]);
        setProducts(prodData || []);
        setCategories(catData || []);
      } catch (err) {
        console.error('Failed to load shop page data', err);
      } finally {
        setLoading(false);
      }
    };
    loadShopData();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price <= priceRange;
    const matchesColors =
      selectedColors.length > 0
        ? product.colors && product.colors.some((c) => selectedColors.includes(c))
        : true;
    const matchesSizes =
      selectedSizes.length > 0
        ? product.sizes && product.sizes.some((s) => selectedSizes.includes(s))
        : true;

    return matchesSearch && matchesCategory && matchesPrice && matchesColors && matchesSizes;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.price - b.price;
    if (sortOption === 'price-high-low') return b.price - a.price;
    if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
    return 0; // Default sorting
  });

  // Render Sidebar
  const renderSidebarContent = () => (
    <div className="sidebar-area style-2">
      {/* Search Widget */}
      <div className="widgets-searchbox widgets-area py-6 mb-9">
        <form id="widgets-searchbox" onSubmit={handleSearchSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="widgets-searchbox-btn" type="submit">
            <i className="pe-7s-search"></i>
          </button>
        </form>
      </div>

      {/* Category Widget */}
      <div className="widgets-area mb-9">
        <h2 className="widgets-title mb-5">Product Categories</h2>
        <div className="widgets-item">
          <ul className="widgets-category">
            <li>
              <button
                className={`btn btn-link p-0 text-start w-100 border-0 ${!selectedCategory ? 'text-primary' : 'text-charcoal'}`}
                onClick={() => setSelectedCategory('')}
              >
                All Categories <span>({products.length})</span>
              </button>
            </li>
            {categories.length > 0 ? (
              categories.map((cat) => {
                const categoryName = cat.name;
                const count = products.filter((p) => p.category === categoryName).length;
                return (
                  <li key={categoryName}>
                    <button
                      className={`btn btn-link p-0 text-start w-100 border-0 ${selectedCategory === categoryName ? 'text-primary' : 'text-charcoal'}`}
                      onClick={() => setSelectedCategory(categoryName)}
                    >
                      {categoryName} <span>({count})</span>
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="text-muted p-2">No categories available.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Price Filter Widget */}
      <div className="widgets-area widgets-filter mb-9">
        <h2 className="widgets-title mb-5">Price Filter</h2>
        <div className="price-filter">
          <label htmlFor="priceRangeSlider" className="form-label text-charcoal mb-2">
            Max Price: <span className="text-primary font-weight-bold">${priceRange}</span>
          </label>
          <input
            type="range"
            className="form-range"
            id="priceRangeSlider"
            min="50"
            max="350"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="d-flex justify-content-between text-silver mt-1">
            <span>$50</span>
            <span>$350</span>
          </div>
        </div>
      </div>

      {/* Color Filter Widget */}
      <div className="widgets-area mb-9">
        <h2 className="widgets-title mb-5">Color</h2>
        <div className="widgets-item">
          <ul className="widgets-checkbox">
            {['Red', 'Light Black', 'Dark Blue', 'Gray'].map((color, index) => (
              <li key={color}>
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id={`color-selection-${index}`}
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorToggle(color)}
                />
                <label className="label-checkbox mb-0" htmlFor={`color-selection-${index}`}>
                  {color}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Size Filter Widget */}
      <div className="widgets-area mb-9">
        <h2 className="widgets-title mb-5">Size</h2>
        <div className="widgets-item">
          <ul className="widgets-checkbox">
            {['M', 'L', 'XL', 'XXL'].map((size, index) => (
              <li key={size}>
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id={`size-selection-${index}`}
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeToggle(size)}
                />
                <label className="label-checkbox mb-0" htmlFor={`size-selection-${index}`}>
                  {size}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tags Widget */}
      <div className="widgets-area">
        <h2 className="widgets-title mb-5">Tag</h2>
        <div className="widgets-item">
          <ul className="widgets-tags">
            {['Auto Parts', 'Car Parts', 'Automobil Parts', 'Car', 'Cat Parts'].map((tag) => (
              <li key={tag}>
                <button
                  className="btn btn-link p-2 text-start border rounded-0 text-charcoal bg-transparent"
                  onClick={() => setSearchQuery(tag)}
                  style={{ fontSize: '14px', textDecoration: 'none' }}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

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
                <h2 className="breadcrumb-heading">Shop Layout</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Main Content Area */}
      <div className="shop-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* Sidebar Left */}
            {hasSidebar && !isSidebarRight && (
              <div className="col-xl-3 col-lg-4 order-lg-1 order-2 pt-10 pt-lg-0">
                {renderSidebarContent()}
              </div>
            )}

            {/* Main Product Area */}
            <div
              className={`${
                hasSidebar ? 'col-xl-9 col-lg-8' : 'col-xl-12 col-lg-12'
              } ${hasSidebar && !isSidebarRight ? 'order-lg-2 order-1' : 'order-1'}`}
            >
              {/* Product Topbar */}
              <div className="product-topbar">
                <ul>
                  <li className="page-count">
                    <span>{sortedProducts.length}</span> Product Found of{' '}
                    <span>{products.length}</span>
                  </li>
                  <li className="product-view-wrap">
                    <ul className="nav" role="tablist">
                      <li className="grid-view" role="presentation">
                        <button
                          className={`btn btn-link p-0 ${isGridView ? 'active text-primary' : 'text-charcoal'}`}
                          onClick={() => setIsGridView(true)}
                          aria-label="Grid View"
                        >
                          <i className="fa fa-th" style={{ fontSize: '18px' }}></i>
                        </button>
                      </li>
                      <li className="list-view" role="presentation">
                        <button
                          className={`btn btn-link p-0 ${!isGridView ? 'active text-primary' : 'text-charcoal'}`}
                          onClick={() => setIsGridView(false)}
                          aria-label="List View"
                        >
                          <i className="fa fa-th-list" style={{ fontSize: '18px' }}></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="short">
                    <select
                      className="form-select rounded-0"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      style={{ height: '40px', padding: '5px 10px' }}
                    >
                      <option value="default">Sort by Default</option>
                      <option value="price-low-high">Sort by Price: Low to High</option>
                      <option value="price-high-low">Sort by Price: High to Low</option>
                      <option value="name-asc">Sort by Name: A-Z</option>
                    </select>
                  </li>
                </ul>
              </div>

              {/* Product Layout container */}
              <div className="tab-content text-charcoal pt-8">
                {loading ? (
                  <LoadingSkeleton type="product" count={3} />
                ) : products.length === 0 ? (
                  <EmptyState
                    title="No Products Available"
                    message="Products will appear after backend integration."
                  />
                ) : (
                  <>
                    {isGridView ? (
                      // Grid View
                      <div className="product-grid-view row">
                        {sortedProducts.length > 0 ? (
                          sortedProducts.map((product) => (
                            <div key={product.id} className="col-xl-4 col-sm-6 mb-6">
                              <ProductCard product={product} layout="grid" />
                            </div>
                          ))
                        ) : (
                          <div className="col-12 text-center py-5">
                            <p className="lead">No products found matching your filter options.</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      // List View
                      <div className="product-list-view row">
                        {sortedProducts.length > 0 ? (
                          sortedProducts.map((product) => (
                            <div key={product.id} className="col-12 mb-6">
                              <ProductCard product={product} layout="list" />
                            </div>
                          ))
                        ) : (
                          <div className="col-12 text-center py-5">
                            <p className="lead">No products found matching your filter options.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Sidebar Right */}
            {hasSidebar && isSidebarRight && (
              <div className="col-xl-3 col-lg-4 order-2 pt-10 pt-lg-0">
                {renderSidebarContent()}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
