// src/App.js
import React, { useState } from 'react';
import productsData from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

/**
 * Main App Component
 * Serves as the central state manager and layout container for the product shop.
 *
 * State:
 * - cart: Array of items added to the shopping cart, each containing product info + quantity
 * - isCartOpen: Boolean controlling whether the cart drawer/panel is visible on mobile screens
 */
function App() {
  // Primary application state holding array of items in shopping cart
  const [cart, setCart] = useState([]);
  // State for toggling mobile cart view visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Function: handleAddToCart
   * Adds a product to the cart state.
   * If the product is already in the cart, it increments the item's quantity.
   * If it is new, it appends the product with a quantity of 1.
   *
   * @param {Object} productToAdd - The product object selected by user
   */
  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      // Check if product already exists in cart state
      const existingItemIndex = prevCart.findIndex((item) => item.id === productToAdd.id);

      if (existingItemIndex > -1) {
        // Create a shallow copy of previous cart and update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        // Add new item to cart array with initial quantity of 1
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  /**
   * Function: handleRemoveFromCart
   * Removes or decrements a product from the cart state by its ID.
   * If item quantity is greater than 1, reduces quantity by 1.
   * If quantity is 1, completely removes the item from cart array.
   *
   * @param {number} productId - The unique ID of the product to remove
   */
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity by 1
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Filter out item completely if quantity is 1
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  /**
   * Function: handleClearCart
   * Clears all items from cart state.
   */
  const handleClearCart = () => {
    setCart([]);
  };

  // Compute total item count for header badge
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Navigation Header */}
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

      {/* Hero Banner */}
      <section className="hero-banner">
        <h2>Premium Tech & Lifestyle Gear</h2>
        <p>Explore our curated collection. State-managed with React Hooks for a modern shopping experience.</p>
      </section>

      {/* Main Content Layout */}
      <main className="main-content">
        <div className="content-layout">
          {/* Product Listing Area */}
          <div className="product-column">
            <ProductList 
              products={productsData} 
              handleAddToCart={handleAddToCart} 
            />
          </div>

          {/* Cart Section / Drawer */}
          <div className={`cart-column ${isCartOpen ? 'open' : ''}`}>
            <Cart 
              cart={cart} 
              handleRemoveFromCart={handleRemoveFromCart} 
              handleClearCart={handleClearCart} 
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 TechStore React Project • Built with React useState & CSS Grid</p>
      </footer>
    </div>
  );
}

export default App;