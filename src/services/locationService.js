import { indianStatesCities } from '../data/indianStatesCities';

export const locationService = {
  getStates: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return Object.keys(indianStatesCities);
  },

  getCitiesByState: async (state) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return indianStatesCities[state] || [];
  }
};
