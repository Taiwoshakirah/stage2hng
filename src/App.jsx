
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from "./products/product";

import LandingPage from "./component/landingPage/LandingPage";
import Cart from "./pages/cart/Cart";
import RootLayOut from "./layouts/RootLayOut";
import Checkout from "./pages/checkout/checkouPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RootLayOut/>}>
          <Route path="/" element={<LandingPage product={productData}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
