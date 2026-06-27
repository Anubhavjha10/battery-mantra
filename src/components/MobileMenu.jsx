import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLocation } from '../context/LocationContext';
import { useTranslation } from 'react-i18next';

const MobileMenu = ({ isOpen, onClose }) => {
  // States for accordion submenus
  const [expandedMenus, setExpandedMenus] = useState({});

  const { currentLanguage, changeLanguage } = useLanguage();
  const { selectedCurrency, changeCurrency, formatPrice } = useCurrency();
  const { 
    selectedState, 
    selectedCity, 
    selectState, 
    selectCity, 
    availableStates, 
    availableCities, 
    detectLocation, 
    isDetecting 
  } = useLocation();
  const { t } = useTranslation();

  const languageNames = {
    en: 'English',
    fr: 'French',
    it: 'Italian',
    es: 'Spanish'
  };

  const toggleSubmenu = (menuName, e) => {
    e.preventDefault();
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div className={`mobile-menu_wrapper ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="tromic-offcanvas-body">
          <div className="inner-body">
            <div className="tromic-offcanvas-top">
              <a href="#" className="button-close" onClick={(e) => { e.preventDefault(); onClose(); }}>
                <i className="pe-7s-close"></i>
              </a>
            </div>
            
            <div className="offcanvas-user-info text-center px-6 pb-5">
              <div className="text-silver">
                <p className="shipping mb-0">
                  {t('common.freeDelivery')} <span className="text-primary">{formatPrice(200)}</span>
                </p>
              </div>
              <ul className="dropdown-wrap justify-content-center text-silver">
                <li className="dropdown dropup">
                  <button
                    className="btn btn-link dropdown-toggle ht-btn"
                    type="button"
                    id="languageButtonTwo"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {languageNames[currentLanguage] || 'English'}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="languageButtonTwo">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('en'); }}>English</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('fr'); }}>French</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('it'); }}>Italian</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('es'); }}>Spanish</a></li>
                  </ul>
                </li>
                <li className="dropdown dropup">
                  <button
                    className="btn btn-link dropdown-toggle ht-btn usd-dropdown"
                    type="button"
                    id="currencyButtonTwo"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedCurrency}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="currencyButtonTwo">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('INR'); }}>INR (₹)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('USD'); }}>USD ($)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('EUR'); }}>EUR (€)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('GBP'); }}>GBP (£)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('AED'); }}>AED (د.إ)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('SGD'); }}>SGD (S$)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('AUD'); }}>AUD (A$)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('CAD'); }}>CAD (C$)</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeCurrency('JPY'); }}>JPY (¥)</a></li>
                  </ul>
                </li>
                <li className="dropdown dropup">
                  <button
                    className="btn btn-link dropdown-toggle ht-btn"
                    type="button"
                    id="locationButtonTwo"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="pe-7s-map-marker"></i> {selectedState ? selectedState : 'Location'}
                  </button>
                  <div className="dropdown-menu dropdown-menu-end p-3" aria-labelledby="locationButtonTwo" style={{ minWidth: '250px', color: '#666', zIndex: 9999 }}>
                    <div className="mb-2">
                      <label className="form-label small fw-bold">State / UT</label>
                      <select 
                        className="form-select form-select-sm" 
                        value={selectedState} 
                        onChange={(e) => selectState(e.target.value)}
                      >
                        <option value="">Select State</option>
                        {availableStates.map(st => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                    {selectedState && (
                      <div className="mb-2">
                        <label className="form-label small fw-bold">District / City</label>
                        <select 
                          className="form-select form-select-sm" 
                          value={selectedCity} 
                          onChange={(e) => selectCity(e.target.value)}
                        >
                          <option value="">Select City</option>
                          {availableCities.map(ct => (
                            <option key={ct} value={ct}>{ct}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className="mt-2 border-top pt-2 text-center">
                      <button 
                        className="btn btn-sm btn-primary w-100 py-1 text-white"
                        style={{ fontSize: '12px' }}
                        onClick={(e) => { e.preventDefault(); detectLocation(); }}
                        disabled={isDetecting}
                      >
                        {isDetecting ? 'Detecting...' : 'Detect Location'}
                      </button>
                    </div>
                  </div>
                </li>
                <li className="dropdown dropup">
                  <button
                    className="btn btn-link dropdown-toggle ht-btn p-0"
                    type="button"
                    id="settingButtonTwo"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="pe-7s-users"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="settingButtonTwo">
                    <li>
                      <Link className="dropdown-item" to="/my-account" onClick={handleLinkClick}>{t('nav.myAccount')}</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login-register" onClick={handleLinkClick}>{t('nav.loginRegister')}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/wishlist" onClick={handleLinkClick}>
                    <i className="pe-7s-like"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="offcanvas-menu_area">
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  {/* Home */}
                  <li>
                    <Link to="/" onClick={handleLinkClick}>
                      <span className="mm-text">{t('nav.home')}</span>
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link to="/about" onClick={handleLinkClick}>
                      <span className="mm-text">{t('nav.about')}</span>
                    </Link>
                  </li>

                  {/* Shop */}
                  <li className={`menu-item-has-children ${expandedMenus.shop ? 'menu-open' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubmenu('shop', e)}>
                      <span className="mm-text">
                        {t('nav.shop')} <i className="pe-7s-angle-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu" style={{ display: expandedMenus.shop ? 'block' : 'none' }}>
                      {/* Shop Layout */}
                      <li className={`menu-item-has-children ${expandedMenus.shopLayout ? 'menu-open' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubmenu('shopLayout', e)}>
                          <span className="mm-text">
                            Shop Layout <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu" style={{ display: expandedMenus.shopLayout ? 'block' : 'none' }}>
                          <li>
                            <Link to="/shop" onClick={handleLinkClick}>Shop Default</Link>
                          </li>
                          <li>
                            <Link to="/shop-grid-fullwidth" onClick={handleLinkClick}>Shop Grid Fullwidth</Link>
                          </li>
                          <li>
                            <Link to="/shop-right-sidebar" onClick={handleLinkClick}>Shop Right Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/shop-list-fullwidth" onClick={handleLinkClick}>Shop List Fullwidth</Link>
                          </li>
                          <li>
                            <Link to="/shop-list-left-sidebar" onClick={handleLinkClick}>Shop List Left Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/shop-list-right-sidebar" onClick={handleLinkClick}>Shop List Right Sidebar</Link>
                          </li>
                        </ul>
                      </li>

                      {/* Product Style */}
                      <li className={`menu-item-has-children ${expandedMenus.productStyle ? 'menu-open' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubmenu('productStyle', e)}>
                          <span className="mm-text">
                            Product Style <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu" style={{ display: expandedMenus.productStyle ? 'block' : 'none' }}>
                          <li>
                            <Link to="/single-product" onClick={handleLinkClick}>Single Product Default</Link>
                          </li>
                          <li>
                            <Link to="/single-product-group" onClick={handleLinkClick}>Single Product Group</Link>
                          </li>
                          <li>
                            <Link to="/single-product-variable" onClick={handleLinkClick}>Single Product Variable</Link>
                          </li>
                          <li>
                            <Link to="/single-product-sale" onClick={handleLinkClick}>Single Product Sale</Link>
                          </li>
                          <li>
                            <Link to="/single-product-sticky" onClick={handleLinkClick}>Single Product Sticky</Link>
                          </li>
                          <li>
                            <Link to="/single-product-affiliate" onClick={handleLinkClick}>Single Product Affiliate</Link>
                          </li>
                        </ul>
                      </li>

                      {/* Product Related */}
                      <li className={`menu-item-has-children ${expandedMenus.productRelated ? 'menu-open' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubmenu('productRelated', e)}>
                          <span className="mm-text">
                            Product Related <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu" style={{ display: expandedMenus.productRelated ? 'block' : 'none' }}>
                          <li>
                            <Link to="/my-account" onClick={handleLinkClick}>{t('nav.myAccount')}</Link>
                          </li>
                          <li>
                            <Link to="/login-register" onClick={handleLinkClick}>{t('nav.loginRegister')}</Link>
                          </li>
                          <li>
                            <Link to="/cart" onClick={handleLinkClick}>{t('nav.cart')}</Link>
                          </li>
                          <li>
                            <Link to="/wishlist" onClick={handleLinkClick}>{t('nav.wishlist')}</Link>
                          </li>
                          <li>
                            <Link to="/compare" onClick={handleLinkClick}>{t('nav.compare')}</Link>
                          </li>
                          <li>
                            <Link to="/checkout" onClick={handleLinkClick}>{t('nav.checkout')}</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Pages */}
                  <li className={`menu-item-has-children ${expandedMenus.pages ? 'menu-open' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubmenu('pages', e)}>
                      <span className="mm-text">
                        {t('nav.pages')} <i className="pe-7s-angle-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu" style={{ display: expandedMenus.pages ? 'block' : 'none' }}>
                      <li>
                        <Link to="/faq" onClick={handleLinkClick}>{t('nav.faq')}</Link>
                      </li>
                      <li>
                        <Link to="/404" onClick={handleLinkClick}>{t('nav.error404')}</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Blog */}
                  <li className={`menu-item-has-children ${expandedMenus.blog ? 'menu-open' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubmenu('blog', e)}>
                      <span className="mm-text">
                        {t('nav.blog')} <i className="pe-7s-angle-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu" style={{ display: expandedMenus.blog ? 'block' : 'none' }}>
                      <li className={`menu-item-has-children ${expandedMenus.blogHolder ? 'menu-open' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubmenu('blogHolder', e)}>
                          <span className="mm-text">
                            Blog Holder <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu" style={{ display: expandedMenus.blogHolder ? 'block' : 'none' }}>
                          <li>
                            <Link to="/blog" onClick={handleLinkClick}>Blog Default</Link>
                          </li>
                          <li>
                            <Link to="/blog-listview" onClick={handleLinkClick}>Blog List View</Link>
                          </li>
                          <li>
                            <Link to="/blog-detail" onClick={handleLinkClick}>Blog Detail</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Contact */}
                  <li>
                    <Link to="/contact" onClick={handleLinkClick}>
                      <span className="mm-text">{t('nav.contact')}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="global-overlay overlay-open" onClick={onClose}></div>}
    </>
  );
};

export default MobileMenu;
