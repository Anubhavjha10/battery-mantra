import { productsData } from '../data/placeholderData';

export const productService = {
  getProducts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return productsData;
  },

  getProductBySlug: async (slug) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const product = productsData.find((p) => p.slug === slug);
    if (!product) throw new Error('Product not found');
    return product;
  },

  getProductsByCategory: async (categorySlug) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return productsData.filter((p) => p.categorySlug === categorySlug);
  },

  getProductsByBrand: async (brandSlug) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return productsData.filter((p) => p.brandSlug === brandSlug);
  },

  getProductsByVehicle: async (brand, model) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const vehicleKey = `${brand} ${model}`.toLowerCase();
    return productsData.filter((p) => 
      p.vehicles.some((v) => v.toLowerCase().includes(vehicleKey) || vehicleKey.includes(v.toLowerCase()))
    );
  },

  searchProducts: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return productsData.filter((p) => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.desc.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery)
    );
  }
};
