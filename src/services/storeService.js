import { storesData } from '../data/placeholderData';

export const storeService = {
  getStores: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return storesData;
  },

  getStoresByLocation: async (state, city) => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    let stores = storesData;
    if (state) {
      stores = stores.filter((s) => s.state.toLowerCase() === state.toLowerCase());
    }
    if (city) {
      stores = stores.filter((s) => s.city.toLowerCase() === city.toLowerCase());
    }
    return stores;
  }
};
