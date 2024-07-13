import React, { useEffect, useState } from "react";
import bag from "../../assets/images/bag.png";
import profile from "../../assets/images/profile.png";
import search from "../../assets/images/search.png";
import "./NavbarMobile.css";
import Sidebar from "../sidebar/SideBar"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarMobile = () => {
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
    <div className="d-flex flex-column mobile pt-4 px-4 navbarr gap-0 navbarr d-lg-none">
      <div className="d-flex justify-content-between align-items-center upperline">
        <Sidebar className="d-lg-none"/>
        <Link to="/"><h2 className="text-white logo">AfriChic</h2></Link>
        <div className="d-flex align-items-center gap-2">
            <Link to="/cart" className="position-relative">
            <img src={bag} alt="" />
            <span className="position-absolute spanzero">{totalQuantity}</span>
            </Link>
            <img src={profile} alt="" />
          </div>
      </div>
      <div class="input-group mb-3">
            <input
              type="text"
              className="form-control cc-search"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <Icon icon="teenyicons:search-outline"/>
            </span>
          </div>
    </div>
  );
};

export default NavbarMobile;
