import React, { useState } from "react";
import copyrightLogo from "../../assets/images/copy.png";
import "./Footer.css"


import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="maincontainermobile">
      <div className="contactmobile d-flex flex-column gap-1">
        <div className="d-flex align-item-center justify-content-between">
          <h6>QUICK LINKS</h6>
          <IoIosArrowDown className="drop" />
        </div>
        <hr />
        <div className="d-flex align-item-center justify-content-between">
          <h6>CONTACT</h6>
          <IoIosArrowDown className="drop" />
        </div>
        <hr />
        <div className="d-flex align-item-center justify-content-between">
          <h6>PRIVACY POLICY</h6>
        </div>
        <hr />
        <div className="d-flex align-item-center justify-content-between">
          <h6>BACK TO TOP</h6>
        </div>
        <hr />
      </div>
      <div className="subscribe1">
        <div className="d-flex flex-column align-items-start newslettermobile w-100 ">
          <p>Subscribe to our Newsletter</p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email Address"
              className="text-black"
            />
            <button className="sub">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="hr1" />
      <div className="generalmedia">
        <div className="copyrightmobile align-items-center">
          <img className="mt-0" src={copyrightLogo} alt="" />
          <p className="mb-0">2024 Africhic All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
