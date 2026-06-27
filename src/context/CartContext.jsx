import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('battery_mantra_cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }
    return [
      {
        id: 101,
        name: 'Tail Light',
        price: 80.0,
        image: 'assets/images/product/small-size/1-1-70x70.png',
        quantity: 1
      },
      {
        id: 102,
        name: 'Wiper Blades',
        price: 80.0,
        image: 'assets/images/product/small-size/1-2-70x70.png',
        quantity: 1
      },
      {
        id: 103,
        name: 'Suspension',
        price: 80.0,
        image: 'assets/images/product/small-size/1-3-70x70.png',
        quantity: 1
      },
      {
        id: 104,
        name: 'Air Filter',
        price: 80.0,
        image: 'assets/images/product/small-size/1-4-70x70.png',
        quantity: 1
      },
      {
        id: 105,
        name: 'Car Brakes',
        price: 80.0,
        image: 'assets/images/product/small-size/1-5-70x70.png',
        quantity: 1
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('battery_mantra_cart', JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image || 'assets/images/product/small-size/1-1-70x70.png',
          quantity: 1
        }
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return { ...item, quantity: newQty > 0 ? newQty : 1 };
          }
          return item;
        })
    );
  };

  const updateQuantityExact = (id, qty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: qty > 0 ? qty : 1 } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateQuantityExact,
        clearCart,
        cartSubtotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
