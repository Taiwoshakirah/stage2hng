import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/images/search.png";
import bag from "../../assets/images/bag.png";
import profile from "../../assets/images/profile.png";
import "./NavbarDesktop.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";


const NavbarDesktop = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);
  return (
    <div className="d-none d-lg-flex nav-desk py-3">
      <div className="container d-none d-lg-flex gap-3 align-items-center justify-content-between">
        <Link to="/"><h2 className="text-white mb-0 text-decoration-none afric-font">AfriChic</h2></Link>
        <div className="d-flex text-white gap-5">
          <Link className="text-white text-decoration-none" to="/">
            Home
          </Link>
          <Link className="text-white text-decoration-none" to="/categories">
            Categories
          </Link>
          <Link className="text-white text-decoration-none" to="/about">
            About
          </Link>
          <Link className="text-white text-decoration-none" to="/contact">
            Contact
          </Link>
        </div>
        <section className="d-flex align-items-center gap-3">
          <div class="input-group align-items-center">
            <input
              type="text"
              className="form-control cc-search"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <Icon icon="teenyicons:search-outline" />
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Link to="/cart" className="position-relative">
            <img src={bag} alt="" />
            <span className="position-absolute spanzero">{totalQuantity}</span>
            </Link>
            <img src={profile} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavbarDesktop;
