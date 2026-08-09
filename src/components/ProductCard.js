// src/components/ProductCard.js
import React from 'react';

/**
 * ProductCard Component
 * Displays individual product details (image, title, category, price, description)
 * and provides an "Add to Cart" button that triggers a callback function passed from the parent.
 *
 * Props:
 * - product: Object containing product details (id, name, price, image, category, description)
 * - handleAddToCart: Function called when the user clicks the "Add to Cart" button
 */
const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          loading="lazy"
        />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom-row">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-button" 
            onClick={() => handleAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
