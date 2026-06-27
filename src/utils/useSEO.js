import { useEffect } from 'react';

export const useSEO = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | Battery Mantra` : 'Battery Mantra - Premium Car & Inverter Batteries';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Battery Mantra offers premium, long-lasting automotive and power backup battery solutions with doorstep delivery and installation.';
  }, [title, description]);
};
export default useSEO;
