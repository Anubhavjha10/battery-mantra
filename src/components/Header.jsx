import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLocation } from '../context/LocationContext';
import { useTranslation } from 'react-i18next';
import { categoryService } from '../services/categoryService';

const Header = ({ onOpenCart, onOpenMenu, onOpenSearch }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { cartCount } = useCart();
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

  const [categories, setCategories] = useState([]);

  const languageNames = {
    en: 'English',
    fr: 'French',
    it: 'Italian',
    es: 'Spanish'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="main-header-area">
      {/* Header Top Area */}
      <div className="header-top border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="header-top-left">
                <ul className="dropdown-wrap text-matterhorn">
                  <li className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle ht-btn"
                      type="button"
                      id="languageButton"
                      data-bs-toggle="dropdown"
                      aria-label="language"
                      aria-expanded="false"
                    >
                      {languageNames[currentLanguage] || 'English'}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="languageButton">
                      <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('en'); }}>English</a></li>
                      <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('fr'); }}>French</a></li>
                      <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('it'); }}>Italian</a></li>
                      <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); changeLanguage('es'); }}>Spanish</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle ht-btn"
                      type="button"
                      id="currencyButton"
                      data-bs-toggle="dropdown"
                      aria-label="currency"
                      aria-expanded="false"
                    >
                      {selectedCurrency}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="currencyButton">
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
                  <li className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle ht-btn"
                      type="button"
                      id="locationButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="pe-7s-map-marker"></i> {selectedState ? `${selectedState}${selectedCity ? ', ' + selectedCity : ''}` : 'India'}
                    </button>
                    <div className="dropdown-menu p-3" aria-labelledby="locationButton" style={{ minWidth: '280px', color: '#666', zIndex: 9999 }}>
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
                    {t('common.callUs')} <a href="tel://3965410">3965410</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="header-top-right text-matterhorn">
                <p className="shipping mb-0">
                  {t('common.freeDelivery')} <span>{formatPrice(200)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Middle Area */}
      <div className={`header-middle header-sticky py-6 py-lg-0 ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                {/* Logo */}
                <Link to="/" className="header-logo">
                  <img src={getAssetUrl('assets/images/logo/dark.png')} alt="Battery Mantra Logo" />
                </Link>
 
                 {/* Main Navigation */}
                 <div className="main-menu d-none d-lg-block">
                   <nav className="main-nav">
                     <ul>
                       <li>
                         <Link to="/">{t('nav.home')}</Link>
                       </li>
                       <li className="dropdown-holder">
                         <Link to="/shop">
                           {t('nav.shop')} <i className="pe-7s-angle-down"></i>
                         </Link>
                         <ul className="drop-menu">
                           {categories.length > 0 ? (
                             categories.map((cat) => (
                               <li key={cat.id || cat.name}>
                                 <Link to={`/category/${cat.slug || cat.name.toLowerCase()}`}>{cat.name}</Link>
                               </li>
                             ))
                           ) : (
                             <li>
                               <span className="p-3 text-muted" style={{ fontSize: '13px', display: 'block' }}>
                                 No categories available.
                                </span>
                             </li>
                           )}
                         </ul>
                       </li>
                       <li>
                         <Link to="/about">{t('nav.about')}</Link>
                       </li>
                       <li>
                         <Link to="/faq">{t('nav.faq')}</Link>
                       </li>
                       <li>
                         <Link to="/contact">{t('nav.contact')}</Link>
                       </li>
                     </ul>
                   </nav>
                 </div>

                {/* Header Actions */}
                <div className="header-right">
                  <ul>
                    <li className="dropdown d-none d-lg-block">
                      <button
                        className="btn btn-link dropdown-toggle ht-btn p-0"
                        type="button"
                        id="settingButton"
                        data-bs-toggle="dropdown"
                        aria-label="setting"
                        aria-expanded="false"
                      >
                        <i className="pe-7s-user"></i>
                      </button>
                      <ul className="dropdown-menu right-side" aria-labelledby="settingButton">
                        <li>
                          <Link className="dropdown-item" to="/my-account">{t('nav.myAccount')}</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/login-register">{t('nav.loginRegister')}</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="search-btn bt" onClick={(e) => { e.preventDefault(); onOpenSearch(); }}>
                        <i className="pe-7s-search"></i>
                      </a>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link to="/wishlist">
                        <i className="pe-7s-like"></i>
                      </Link>
                    </li>
                    <li className="minicart-wrap me-3 me-lg-0">
                      <a href="#" className="minicart-btn toolbar-btn" onClick={(e) => { e.preventDefault(); onOpenCart(); }}>
                        <i className="pe-7s-shopbag"></i>
                        <span className="quantity">{cartCount}</span>
                      </a>
                    </li>
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <a href="#" className="mobile-menu_btn toolbar-btn pl-0" onClick={(e) => { e.preventDefault(); onOpenMenu(); }}>
                        <i className="pe-7s-menu"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
