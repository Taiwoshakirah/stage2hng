import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQuantity }) => {
  const handleChange = (e) => {
    updateQuantity(item.id, parseInt(e.target.value));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>NGN {item.price.toLocaleString()}</div>
      <div>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CartItem;
