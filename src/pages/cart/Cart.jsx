import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../../stores/cart";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMinusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: -1 }));
  };

  const handlePlusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  if(cartItems.length === 0){
        return (
            <div className="text-center">
            <h2 className=''>Your cart is empty</h2>
              <Link to={'/'}>
                  <p>back to products</p>
              </Link>
            </div>
        );
      }

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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleMinusQuantity={handleMinusQuantity}
              handlePlusQuantity={handlePlusQuantity}
              handleRemoveItem={handleRemoveItem}
              
            />
          ))}
          <div className="cart-actions">
            <Link to="/"><button className="return">Return To Shop</button></Link>
            <button onClick={handleClearCart} className="updatenow">Clear Cart</button>
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
          <button className="checkout-btn rounded-3 mt-3" onClick={handleCheckout}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
