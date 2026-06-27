import { mockUserData } from '../data/placeholderData';

export const authService = {
  login: async (email, password) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (email === 'anubhav@example.com' && password === 'password') {
      return { success: true, user: mockUserData, token: 'mock-jwt-token-12345' };
    }
    throw new Error('Invalid email or password');
  },

  register: async (userData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, user: { ...mockUserData, ...userData }, token: 'mock-jwt-token-67890' };
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { success: true };
  },

  getCurrentUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return mockUserData;
  }
};
