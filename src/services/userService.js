import { mockUserData } from '../data/placeholderData';

let localUserData = { ...mockUserData };

export const userService = {
  getProfile: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { ...localUserData };
  },

  updateProfile: async (profileData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    localUserData = {
      ...localUserData,
      fullName: profileData.fullName || localUserData.fullName,
      email: profileData.email || localUserData.email,
      phone: profileData.phone || localUserData.phone
    };
    return { ...localUserData };
  },

  changePassword: async (currentPassword, newPassword) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    if (currentPassword !== 'password') {
      throw new Error('Current password is incorrect');
    }
    return { success: true };
  },

  getSavedAddresses: async () => {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return [...localUserData.addresses];
  },

  addAddress: async (addressData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newAddress = {
      id: `addr-${Math.floor(1000 + Math.random() * 9000)}`,
      ...addressData,
      isDefault: addressData.isDefault || false
    };

    if (newAddress.isDefault) {
      localUserData.addresses = localUserData.addresses.map((addr) => ({
        ...addr,
        isDefault: false
      }));
    }

    localUserData.addresses.push(newAddress);
    return newAddress;
  },

  updateAddress: async (id, addressData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (addressData.isDefault) {
      localUserData.addresses = localUserData.addresses.map((addr) => ({
        ...addr,
        isDefault: false
      }));
    }
    localUserData.addresses = localUserData.addresses.map((addr) => 
      addr.id === id ? { ...addr, ...addressData } : addr
    );
    return localUserData.addresses.find((addr) => addr.id === id);
  },

  deleteAddress: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    localUserData.addresses = localUserData.addresses.filter((addr) => addr.id !== id);
    return { success: true };
  }
};
