import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLocation } from '../context/LocationContext';
import { useTranslation } from 'react-i18next';
import { categoryService } from '../services/categoryService';

const MobileMenu = ({ isOpen, onClose }) => {
  // States for accordion submenus
  const [expandedMenus, setExpandedMenus] = useState({});
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const catData = await categoryService.getCategories();
        setCategories(catData || []);
      } catch (err) {
        console.error('Failed to load menu categories', err);
      }
    };
    fetchCategories();
  }, []);

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
                <li>
                  <Link to="/login-register" aria-label="Login or Register" onClick={handleLinkClick}>
                    <i className="pe-7s-users"></i>
                  </Link>
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

                  {/* Shop */}
                  <li className={`menu-item-has-children ${expandedMenus.shop ? 'menu-open' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubmenu('shop', e)}>
                      <span className="mm-text">
                        {t('nav.shop')} <i className="pe-7s-angle-down"></i>
                      </span>
                    </a>
                    <ul className="sub-menu" style={{ display: expandedMenus.shop ? 'block' : 'none' }}>
                      {categories.length > 0 ? (
                        categories.map((cat) => (
                          <li key={cat.id || cat.name}>
                            <Link to={`/category/${cat.slug || cat.name.toLowerCase()}`} onClick={handleLinkClick}>
                              {cat.name}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>
                          <span className="p-3 text-muted small d-block">No categories available.</span>
                        </li>
                      )}
                    </ul>
                  </li>

                  {/* About */}
                  <li>
                    <Link to="/about" onClick={handleLinkClick}>
                      <span className="mm-text">{t('nav.about')}</span>
                    </Link>
                  </li>

                  {/* FAQ */}
                  <li>
                    <Link to="/faq" onClick={handleLinkClick}>
                      <span className="mm-text">{t('nav.faq')}</span>
                    </Link>
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
