import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { CurrencyProvider } from './context/CurrencyContext.jsx';
import { LocationProvider } from './context/LocationContext.jsx';
import './utils/i18n.js';

// CSS stylesheets are now loaded via <link> tags in index.html

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

