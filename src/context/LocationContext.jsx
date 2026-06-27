import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { indianStatesCities } from '../data/indianStatesCities';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [country, setCountry] = useState('India');
  const [selectedState, setSelectedState] = useState(() => {
    return localStorage.getItem('location_state') || '';
  });
  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem('location_city') || '';
  });
  const [isDetecting, setIsDetecting] = useState(false);

  const selectState = useCallback((stateName) => {
    if (indianStatesCities[stateName]) {
      setSelectedState(stateName);
      setSelectedCity('');
      localStorage.setItem('location_state', stateName);
      localStorage.removeItem('location_city');
    } else {
      setSelectedState('');
      setSelectedCity('');
      localStorage.removeItem('location_state');
      localStorage.removeItem('location_city');
    }
  }, []);

  const selectCity = useCallback((cityName) => {
    setSelectedCity(cityName);
    localStorage.setItem('location_city', cityName);
  }, []);

  const detectLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser.');
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Use OpenStreetMap Nominatim reverse geocoding API (free, open source, no keys required)
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                'Accept-Language': 'en'
              }
            }
          );
          if (!res.ok) throw new Error('Geocoding service error');
          const data = await res.json();
          
          if (data && data.address) {
            const detectedState = data.address.state;
            const detectedCity = data.address.city || data.address.town || data.address.village || data.address.county || data.address.state_district;
            
            // Match against our list of states
            if (detectedState) {
              const matchedState = Object.keys(indianStatesCities).find(
                (s) => s.toLowerCase() === detectedState.toLowerCase() || 
                       detectedState.toLowerCase().includes(s.toLowerCase()) ||
                       s.toLowerCase().includes(detectedState.toLowerCase())
              );
              
              if (matchedState) {
                setSelectedState(matchedState);
                localStorage.setItem('location_state', matchedState);
                
                const citiesList = indianStatesCities[matchedState] || [];
                if (detectedCity) {
                  const matchedCity = citiesList.find(
                    (c) => c.toLowerCase() === detectedCity.toLowerCase() ||
                           detectedCity.toLowerCase().includes(c.toLowerCase()) ||
                           c.toLowerCase().includes(detectedCity.toLowerCase())
                  );
                  if (matchedCity) {
                    setSelectedCity(matchedCity);
                    localStorage.setItem('location_city', matchedCity);
                  } else if (citiesList.length > 0) {
                    // fallback to first city in list
                    setSelectedCity(citiesList[0]);
                    localStorage.setItem('location_city', citiesList[0]);
                  }
                } else if (citiesList.length > 0) {
                  setSelectedCity(citiesList[0]);
                  localStorage.setItem('location_city', citiesList[0]);
                }
              }
            }
          }
        } catch (err) {
          console.warn('Location detection failed:', err);
        } finally {
          setIsDetecting(false);
        }
      },
      (err) => {
        console.warn('Geolocation permission denied or timed out:', err);
        setIsDetecting(false);
      },
      { timeout: 10000 }
    );
  }, []);

  // Run auto-detection on first visit only if no location is stored
  useEffect(() => {
    const hasPrompted = localStorage.getItem('geolocation_prompted');
    const storedState = localStorage.getItem('location_state');
    
    if (!storedState && !hasPrompted) {
      localStorage.setItem('geolocation_prompted', 'true');
      detectLocation();
    }
  }, [detectLocation]);

  const availableCities = indianStatesCities[selectedState] || [];

  return (
    <LocationContext.Provider value={{
      country,
      selectedState,
      selectedCity,
      selectState,
      selectCity,
      availableStates: Object.keys(indianStatesCities),
      availableCities,
      detectLocation,
      isDetecting
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
export default LocationContext;
