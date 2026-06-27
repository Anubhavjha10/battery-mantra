import { brandsData } from '../data/placeholderData';

export const brandService = {
  getBrands: async () => {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return brandsData;
  },

  getBrandBySlug: async (slug) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const brand = brandsData.find((b) => b.slug === slug);
    if (!brand) throw new Error('Brand not found');
    return brand;
  }
};
