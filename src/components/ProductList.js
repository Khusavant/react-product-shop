import React from 'react';
import ProductCard from './ProductCard';

/**
 * ProductList
 * Renders grid layout of product items.
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