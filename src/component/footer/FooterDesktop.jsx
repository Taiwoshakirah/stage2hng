import React from "react";
import mailLogo from "../../assets/images/mail.png";
import locateLogo from "../../assets/images/locate.png";
import callLogo from "../../assets/images/call.png";
import facebookLogo from "../../assets/images/facelogo.png";
import instaLogo from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import copyrightLogo from "../../assets/images/copy.png";
import "../footer/FooterDesktop.css";

const FooterDesktop = () => {
  return (
    <div className="maincontainer">
      <div className=" container">
        <div className="innercontainer ">
          <div className="contact d-flex flex-column gap-2">
            <h4 className="d-flex align-items-start">Contact</h4>
            <div className="contact-info d-flex align-items-center gap-2">
              <img src={mailLogo} alt="" />
              <small>hello@tedible.com</small>
            </div>
            <div className="contact-info d-flex align-items-center gap-2">
              <img src={callLogo} alt="" />
              <small>+234 813 383 8283</small>
            </div>
            <div className="contact-info d-flex align-items-center gap-2">
              <img src={locateLogo} alt="" />
              <small>NO 4, White House, Lagos</small>
            </div>
          </div>
          <div className="quicklinks d-flex flex-column gap-1 align-items-start">
            <h4>Quick Links</h4>
            <small>Home</small>
            <small>Categories</small>
            <small>About </small>
            <small>Contact </small>
          </div>

          <div className="followUs">
            <h4 className="d-flex align-items-start">Follow Us</h4>
            <div className="socialmedia">
              <img src={facebookLogo} alt="" />
              <small>Facebook</small>
            </div>
            <div className="socialmedia">
              <img src={twitter} alt="" />
              <small>Twitter</small>
            </div>
            <div className="socialmedia">
              <img src={instaLogo} alt="" />
              <small>Instagram </small>
            </div>
          </div>
          <div className="resources d-flex flex-column align-items-start">
            <h4>Resources</h4>
            <small>News Update</small>
          </div>
          <div className="terms d-flex flex-column align-items-start gap-2">
            <small>Terms & Conditions</small>
            <small>Cookies Policy </small>
            <small>Privacy Policy</small>
            <small>Compliance </small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="subscribe d-flex justify-content-start w-75 g-0 p-4">
            <form className="newsletter">
              <p className="d-flex justify-content-start">
                Subscribe to our Newsletter
              </p>
              <div className="input-group">
                <input type="text" placeholder="Email" />
                <button>Subscribe</button>
              </div>
            </form>
          </div>
          <div className="copyright d-flex align-items-center justify-content-center">
            <img src={copyrightLogo} alt="" />
            <small>2024 Africhic. All Right Reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
