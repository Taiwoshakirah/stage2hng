import React from "react";
import bag from "../../assets/images/bag.png";
import profile from "../../assets/images/profile.png";
import search from "../../assets/images/search.png";
import "./NavbarMobile.css";
import Sidebar from "../sidebar/SideBar"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="d-flex flex-column mobile pt-4 px-4 navbarr gap-0 navbarr d-lg-none">
      <div className="d-flex justify-content-between align-items-center upperline">
        <Sidebar className="d-lg-none"/>
        <Link to="/"><h2 className="text-white logo">AfriChic</h2></Link>
        <div className="d-flex gap-3">
          <img src={bag} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
      <div class="input-group mb-3">
            <input
              type="text"
              className="form-control cc-search"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
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
