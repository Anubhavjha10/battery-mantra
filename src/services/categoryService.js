import { categoriesData } from '../data/placeholderData';

export const categoryService = {
  getCategories: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return categoriesData;
  },

  getCategoryBySlug: async (slug) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const cat = categoriesData.find((c) => c.slug === slug);
    if (!cat) throw new Error('Category not found');
    return cat;
  }
};
