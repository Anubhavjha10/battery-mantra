import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CurrencyContext = createContext();

const FALLBACK_RATES = {
  INR: 83.5,
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  SGD: 1.35,
  AUD: 1.50,
  CAD: 1.37,
  JPY: 155.0
};

const CURRENCY_CONFIGS = {
  INR: { locale: 'en-IN' },
  USD: { locale: 'en-US' },
  EUR: { locale: 'de-DE' },
  GBP: { locale: 'en-GB' },
  AED: { locale: 'en-AE' }, // use en-AE for readable spacing with AED prefix
  SGD: { locale: 'en-SG' },
  AUD: { locale: 'en-AU' },
  CAD: { locale: 'en-CA' },
  JPY: { locale: 'ja-JP' }
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'INR';
  });

  const [rates, setRates] = useState(() => {
    try {
      const cached = localStorage.getItem('exchange_rates');
      return cached ? JSON.parse(cached) : FALLBACK_RATES;
    } catch {
      return FALLBACK_RATES;
    }
  });

  const fetchRates = useCallback(async () => {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!res.ok) throw new Error('API response not ok');
      const data = await res.json();
      
      const newRates = { ...FALLBACK_RATES };
      Object.keys(FALLBACK_RATES).forEach(code => {
        if (data.rates && data.rates[code]) {
          newRates[code] = data.rates[code];
        }
      });

      setRates(newRates);
      localStorage.setItem('exchange_rates', JSON.stringify(newRates));
      localStorage.setItem('rates_last_updated', Date.now().toString());
    } catch (err) {
      console.warn('Using cached or fallback exchange rates:', err);
    }
  }, []);

  useEffect(() => {
    const lastUpdated = localStorage.getItem('rates_last_updated');
    const dayInMs = 24 * 60 * 60 * 1000;
    
    if (!lastUpdated || (Date.now() - parseInt(lastUpdated, 10) > dayInMs)) {
      fetchRates();
    }
  }, [fetchRates]);

  const changeCurrency = useCallback((currencyCode) => {
    if (FALLBACK_RATES[currencyCode] !== undefined) {
      setSelectedCurrency(currencyCode);
      localStorage.setItem('currency', currencyCode);
    }
  }, []);

  // Format a price given in USD (the internal base currency of product data)
  const formatPrice = useCallback((amountInUSD) => {
    const rate = rates[selectedCurrency] || FALLBACK_RATES[selectedCurrency] || 1;
    const converted = amountInUSD * rate;
    const config = CURRENCY_CONFIGS[selectedCurrency] || { locale: 'en-US' };
    
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: selectedCurrency,
      maximumFractionDigits: selectedCurrency === 'JPY' || selectedCurrency === 'INR' ? 0 : 2
    }).format(converted);
  }, [selectedCurrency, rates]);

  return (
    <CurrencyContext.Provider value={{
      selectedCurrency,
      changeCurrency,
      formatPrice,
      currencies: Object.keys(FALLBACK_RATES)
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
export default CurrencyContext;
