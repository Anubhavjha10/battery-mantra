
/**
 * Resolves local assets dynamically for Vite.
 * If the path is a logo path (dark.png or light.png), it automatically returns the Battery Mantra logo.
 * 
 * @param {string} path - The path of the asset (e.g. 'assets/images/product/1.jpg')
 * @returns {string} - The resolved asset URL
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  
  // Clean path to remove leading slash or relative prefix
  let cleanPath = path;
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(2);
  } else if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  // Intercept logo image paths to swap with the Battery Mantra logo
  if (
    cleanPath.includes('logo/dark.png') || 
    cleanPath.includes('logo/light.png') || 
    cleanPath.includes('logo/logo.png') ||
    cleanPath === 'logo.png'
  ) {
    return '/assets/images/logo/logo.png';
  }

  // Resolve assets relative to the root of the project
  return '/' + cleanPath;
};

/**
 * Helper to replace occurrences of "Tromic" with "Battery Mantra" in content
 * @param {string} text - The input text
 * @returns {string} - The branded text
 */
export const brandText = (text) => {
  if (!text) return '';
  return text.replace(/Tromic/g, 'Battery Mantra');
};
