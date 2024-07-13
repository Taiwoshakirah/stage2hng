import React from "react";
import "./CartItem.css";

const CartItem = ({ item, handleMinusQuantity, handlePlusQuantity, handleRemoveItem }) => {
  return (
    <div className="cart-item">
      <div className="product">
        <img src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </div>
      <div className="price">{item.price}</div>
      <div className="quantity">
        <button onClick={() => handleMinusQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handlePlusQuantity(item.id)}>+</button>
      </div>
      <div className="remove">
        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;