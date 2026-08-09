import React from 'react';

/**
 * ProductCard
 * Renders individual product details and handles add-to-cart user actions.
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
