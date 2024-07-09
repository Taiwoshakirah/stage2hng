import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import ankaraimg from "../../assets/images/ankara.png";
import vibrance from "../../assets/images/vibrance.png";
import eko from "../../assets/images/eko.png";
import productData from "../../products/product";
import bagimg from "../../assets/images/bagimg.png";
import earing from "../../assets/images/earrings.png";
import Zipgown from "../../assets/images/kimon.png";
import redgown from "../../assets/images/mix.png";
import kimono from "../../assets/images/kimon.png";
import mixgown from "../../assets/images/mix.png";
import rate from "../../assets/images/rating.png";
import norate from "../../assets/images/ratingnone.png";
import mobile from "../../assets/images/mobile.png";
import GrommetIconsFormNextLink from "./GrommetIcon";

const LandingPage = () => {
  return (
    <div>
      <section>
        <header>
          <img className="d-lg-none" src={mobile} alt="" />
          <div className="d-lg-none flex-column text-center pt-4 africhic">
            <p>
              Welcome to AfriChic, your ultimate destination for authentic and
              stylish African printwear. Embrace the vibrant colors, bold
              patterns, and rich heritage of African fashion.
            </p>
            <Link>
              <button className="px-5 py-2 rounded-4 border-0 text-white">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="africhic1">
            <p className="text-white w-50 mx-auto text-center cc-hero-text">
              Welcome to AfriChic, your ultimate destination for authentic and
              stylish African printwear. Embrace the vibrant colors, bold
              patterns, and rich heritage of African fashion.
              <br />
              <Link className="mx-auto">
                <button className="px-5 py-2 rounded-4 border-0 text-white desktopbtn">
                  Shop Now
                </button>
              </Link>
            </p>
          </div>
        </header>
      </section>
      <section className="section2 d-lg-flex flex-column container">
        <h3 className="text-center mt-3 pt-3 new-collection">New Collection</h3>
        <div className="collection">
          <div className="ankara">
            <img src={ankaraimg} alt="ankara collection" />
            <p className="text-center">Ankara Naija Collection</p>
          </div>
          <div>
            <img src={vibrance} alt="naija vibrance" />
            <p className="text-center">Naija Vibrance Collection</p>
          </div>
          <div>
            <img src={eko} alt="Eko chic" />
            <p className="text-center">Eko Chic Collection</p>
          </div>
        </div>
        <div className="center-container">
        <button className=" text-white rounded-4 border-0 py-2 custom-button">
          Shop New Collection
        </button>
        </div>
      </section>
      <div className="container">
        <h2 className="text-center our-product">Our Products</h2>
        <div className="categories">
          <ul className="gap-5 d-flex  overflow-auto listitems mt-5">
            <li className="text-decoration-none">
              <a href="">Top</a>
            </li>
            <li>
              <a href="">Bottom</a>
            </li>
            <li>
              <a href="">Dress</a>
            </li>
            <li>
              <a href="">Set</a>
            </li>
            <li>
              <a href="">Adire</a>
            </li>
            <li>
              <a href="">Kaftan</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="product-list container">
        {productData.map(({ id, image, description, price, rate, norate }) => (
          <div key={id} className="product">
            <div>
              <img className="mt-5 px-4 mw-100" src={image} alt={description} />
              <Link to="/cart">
                <button className="addcartbtn py-2 text-white">
                  Add To Cart
                </button>
              </Link>
              <p className="text-center description">{description}</p>
              <p className="text-center price">{price}</p>
              <div className="text-center">
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={norate} alt="no rating" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="container cover">
        <Link className=" mt-5 seemorebtn py-2 rounded-3 text-white w-75 px-3">
          See More
          <GrommetIconsFormNextLink style={{ marginLeft: "8px" }} />
        </Link>
      </div>
      <p className="text-center pt-3 best-seller">Our Best Seller</p>
      <section className="container">
        <div className="d-flex text-center gap-5 align-items-center  bestseller">
          <div>
            <div className="d-flex flex-column ">
              <img src={Zipgown} alt="" />
              <Link to="/cart">
                <button className="w-100 px-3">Add Cart</button>
              </Link>
            </div>
            <p>Aba Splendor Set</p>
            <p>NGN 15,000</p>
            <div>
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={norate} alt="" />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <img src={redgown} alt="" />
              <Link to="/cart">
                <button className="w-100 px-3">Add Cart</button>
              </Link>
            </div>
            <p>Aba Splendor Set</p>
            <p>NGN 15,000</p>
            <div>
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={norate} alt="" />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <img src={kimono} alt="" />
              <Link to="/cart">
                <button className="w-100 px-3">Add Cart</button>
              </Link>
            </div>
            <p>Aba Splendor Set</p>
            <p>NGN 15,000</p>
            <div>
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={norate} alt="" />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <img src={mixgown} alt="" />
              <Link to="/cart">
                <button className="w-100 px-3">Add Cart</button>
              </Link>
            </div>
            <p>Aba Splendor Set</p>
            <p>NGN 15,000</p>
            <div>
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={rate} alt="" />
              <img src={norate} alt="" />
            </div>
          </div>
        </div>
      </section>
      <p className="text-center category container">Browse By Category</p>
      <section className="container">
        <div className="d-flex overflow-auto justify-content-between gap-5 mb-5 px-4 mt-5">
          <img src={bagimg} alt="" />
          <img src={earing} alt="" />
          <img src={bagimg} alt="" />
          <img src={earing} alt="" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
