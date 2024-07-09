import React from "react";
import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";
import FooterDesktop from "../component/footer/FooterDesktop";
import NavbarMobile from "../component/navbar/NavbarMobile";
import NavbarDesktop from "../component/navbar/NavbarDesktop";

const RootLayOut = () => {
  return (
    <div>
      <div className="position-sticky top-0 z-3">
        <NavbarMobile />
        <NavbarDesktop />
      </div>
      <Outlet />
      <Footer />
      <FooterDesktop />
    </div>
  );
};

export default RootLayOut;
