import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '<https://via.placeholder.com/150>' },
    { id: 2, name: 'Product 2', price: 19.99, image: '<https://via.placeholder.com/150>' },
    { id: 3, name: 'Product 3', price: 39.99, image: '<https://via.placeholder.com/150>' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
      <div className="app">
        <header>
          <h1>Shopping Page</h1>
        </header>
        <main>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cartItems={cart} />
        </main>
      </div>
  );
};

export default App;

