import { offersData } from '../data/placeholderData';

export const offerService = {
  getOffers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return offersData;
  },

  getOfferByCode: async (code) => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const offer = offersData.find((o) => o.code.toLowerCase() === code.toLowerCase());
    if (!offer) throw new Error('Offer code not valid');
    return offer;
  }
};
