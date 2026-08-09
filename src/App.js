import React, { useState } from 'react';
import productsData from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

/**
 * App Container
 * Central layout and application state coordinator.
 */
function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Adds product to cart or increments existing quantity.
   * @param {Object} productToAdd
   */
  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === productToAdd.id);

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  /**
   * Decrements product quantity or removes item if quantity equals 1.
   * @param {number} productId
   */
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  /**
   * Resets shopping cart state.
   */
  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="brand-logo">
            <span className="logo-icon">🛍️</span>
            <h1>TechStore React</h1>
          </div>
          <button 
            className="cart-toggle-btn"
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Toggle Shopping Cart"
          >
            🛒 Cart <span className="cart-badge">{totalCartCount}</span>
          </button>
        </div>
      </header>

      <section className="hero-banner">
        <h2>Premium Tech & Lifestyle Gear</h2>
        <p>Explore our curated collection. State-managed with React Hooks for a seamless shopping experience.</p>
      </section>

      <main className="main-content">
        <div className="content-layout">
          <div className="product-column">
            <ProductList 
              products={productsData} 
              handleAddToCart={handleAddToCart} 
            />
          </div>

          <div className={`cart-column ${isCartOpen ? 'open' : ''}`}>
            <Cart 
              cart={cart} 
              handleRemoveFromCart={handleRemoveFromCart} 
              handleClearCart={handleClearCart} 
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 TechStore React • Built with React 19 & CSS Grid</p>
      </footer>
    </div>
  );
}

export default App;