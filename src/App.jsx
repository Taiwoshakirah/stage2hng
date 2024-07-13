import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./component/landingPage/LandingPage";
import Cart from "./pages/cart/Cart";
import RootLayOut from "./layouts/RootLayOut";
import Checkout from "./pages/checkout/checkouPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route element={<RootLayOut/>}>
            <Route path="/" element={<LandingPage addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart items={cartItems} addToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
