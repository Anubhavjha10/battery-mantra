export const callbackService = {
  submitRequest: async (phone) => {
    // Simulate API request to backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Return mock success response
    return {
      success: true,
      message: 'Callback request submitted successfully!'
    };
  }
};
