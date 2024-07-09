import React, { useState } from "react";
import CartItem from "./CartItem";
import twopiece from "../../assets/images/twopiece.png";
import twopiece2 from "../../assets/images/twopiece2.png";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const initialItems = [
    {
      id: 1,
      price: 25000,
      quantity: 1,
      image: twopiece,
    },
    {
      id: 2,
      price: 18000,
      quantity: 1,
      image: twopiece2,
    },
  ];

  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container container">
      <h1>Cart</h1>
      <div className="d-lg-flex cartbox">
        <div className="cartwith">
          <div className="cart-header">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
          </div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="cart-actions">
            <button
              className="return"
              onClick={() => console.log("Return to shop")}
            >
              Return To Shop
            </button>
            <button
              className="updatenow"
              onClick={() => console.log("Update cart")}
            >
              Update Cart
            </button>
          </div>
        </div>
        <div className="cart-total w-sm-100">
          <h2>Cart Total</h2>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>NGN {subtotal.toLocaleString()}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="total-row">
            <span>Total:</span>
            <span>NGN {subtotal.toLocaleString()}</span>
          </div>
          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button className="w-sm-100">Apply Coupon</button>
          </div>
          <Link to="/check">
            <button className="checkout-btn rounded-3 mt-3">Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
