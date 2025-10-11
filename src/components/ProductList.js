// src/components/ProductList.js

import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
  );

  if (loading) {
    return <div className="status-message">🔄 Loading...</div>;
  }

  if (error) {
    return <div className="status-message error">❌ Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="grid">
        {products && products.map((product) => (
          <div key={product.id} className="card">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/300"; }}
            />
            <div className="card-body">
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;