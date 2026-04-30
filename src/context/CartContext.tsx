import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Pizza = {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  description: string;
};

interface CartContextType {
  cart: Pizza[];
  addToCart: (pizza: Pizza) => void;
  removeFromCart: (pizzaId: number) => void;
  totalSum: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Pizza[]>([]);

  const addToCart = (pizza: Pizza) => {
    setCart((prev) => [...prev, pizza]);
  };

  const removeFromCart = (pizzaId: number) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === pizzaId);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  const totalSum = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalSum }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart повинен використовуватись всередині CartProvider');
  }
  return context;
};