import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { CurrencyProvider } from './context/CurrencyContext.jsx';
import { LocationProvider } from './context/LocationContext.jsx';
import './utils/i18n.js';

// Import CSS stylesheets to be bundled by Vite
import '../assets/css/vendor/font-awesome.min.css';
import '../assets/css/vendor/Pe-icon-7-stroke.css';
import '../assets/css/plugins/animate.min.css';
import '../assets/css/plugins/jquery-ui.min.css';
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/nice-select.css';
import '../assets/css/plugins/magnific-popup.min.css';
import '../assets/css/plugins/ion.rangeSlider.min.css';
import '../assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <CurrencyProvider>
        <LocationProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </LocationProvider>
      </CurrencyProvider>
    </LanguageProvider>
  </React.StrictMode>
);

