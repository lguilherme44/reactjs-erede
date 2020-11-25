import React, { createContext, useState } from 'react';

const CartContext = createContext({});

function Cart({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, settotalItems] = useState(0);

  function addCart(value) {
    const existsProduct = cart.findIndex((product) => product.id === value.id);

    if (existsProduct >= 0) {
      const products = cart;

      products[existsProduct].amount = products[existsProduct].amount + 1;

      setCart(products);

      const items = cart.map((product) => product.amount);
      if (items.length > 0) {
        const total = items.reduce((a, b) => a + b);

        settotalItems(total);
      }
    } else {
      setCart((data) => [...data, { ...value, amount: 1 }]);
    }

    console.log(cart);
  }

  function removeCart(id) {
    const filteredProducts = cart.filter((product) => product.id !== id);
    setCart(filteredProducts);
  }

  return (
    <CartContext.Provider value={{ cart, addCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, Cart };
