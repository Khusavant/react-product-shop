// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

/**
 * ProductList Component
 * Accepts an array of products and maps through them, rendering a ProductCard for each item.
 *
 * Props:
 * - products: Array of product objects
 * - handleAddToCart: Function passed down to ProductCard for handling item additions to cart
 */
const ProductList = ({ products, handleAddToCart }) => {
  return (
    <section className="product-list-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            handleAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;