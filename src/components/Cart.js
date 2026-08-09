import React from 'react';

/**
 * Cart Drawer
 * Displays active cart items, itemized quantities, and total order computations.
 */
const Cart = ({ cart, handleRemoveFromCart, handleClearCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="cart-container">
      <div className="cart-header">
        <h2>Your Cart ({totalItemCount})</h2>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear All
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>🛒 Your cart is currently empty.</p>
          <p className="empty-cart-subtext">Click "Add to Cart" on any product to get started!</p>
        </div>
      ) : (
        <div className="cart-body">
          <ul className="cart-item-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-price-info">
                    ${item.price.toFixed(2)} × {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                </div>
                <button 
                  className="remove-item-btn" 
                  onClick={() => handleRemoveFromCart(item.id)}
                  title="Remove item"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <div className="cart-total-row">
              <span>Total Price:</span>
              <span className="cart-total-amount">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn" 
              onClick={() => alert('Order Placed Successfully!')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Cart;
