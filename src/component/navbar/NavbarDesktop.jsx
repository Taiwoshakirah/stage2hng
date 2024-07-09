import React from "react";
import searchIcon from "../../assets/images/search.png";
import bag from "../../assets/images/bag.png";
import profile from "../../assets/images/profile.png";
import "./NavbarDesktop.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarDesktop = () => {
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
            <img src={bag} alt="" />
            <img src={profile} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavbarDesktop;
