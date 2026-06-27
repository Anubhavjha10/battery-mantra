import { blogsData } from '../data/placeholderData';

export const blogService = {
  getBlogs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return blogsData;
  },

  getBlogBySlug: async (slug) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const blog = blogsData.find((b) => b.slug === slug);
    if (!blog) throw new Error('Blog post not found');
    return blog;
  }
};
