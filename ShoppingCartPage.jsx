// ShoppingCartPage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  // Assuming your cart state is structured as { items: [{ id, name, price, quantity, ... }, ...] }
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total number of plants by summing the quantity of each item.
  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total number of plants in the cart: {totalPlants}</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="cart-thumbnail" />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
