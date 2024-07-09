import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckouPage.css";
import checkbox from "../../assets/images/checkbox.png";
import visaimg from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import bkash from "../../assets/images/bkash.png";
import ringfire from "../../assets/images/ringfire.png";

const Checkout = () => {
  return (
    <div className="container  my-5">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="mb-4">
            <h2>Check Out</h2>
            <h5>Billing Details</h5>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input  type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
              <label htmlFor="streetAddress" className="form-label">Street Address</label>
              <input type="text" className="form-control" id="streetAddress" />
            </div>
            <div className="mb-3">
              <label htmlFor="apartmentFloor" className="form-label">Apartment Floor</label>
              <input type="text" className="form-control" id="apartmentFloor" />
            </div>
            <div className="mb-3">
              <label htmlFor="townCity" className="form-label">Town/City*</label>
              <input type="text" className="form-control" id="townCity" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number*</label>
              <input type="number" className="form-control" id="phoneNumber" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">Email Address*</label>
              <input type="email" className="form-control" id="emailAddress" />
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="saveInfo" />
              <label className="form-check-label" htmlFor="saveInfo">
                Save this information for faster checkout next time
              </label>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Ibadan Bliss Set</span>
                <span>NGN 25,000</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Adire Vibrance Gown</span>
                <span>NGN 18,000</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>NGN 43,000</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span>Total:</span>
                <span>NGN 43,000</span>
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2"><img src={checkbox} alt="" /></span>
                  <span>Bank</span>
                </div>
                <div className="d-flex gap-3">
                  <img className="visa" src={visaimg} alt="Visa" />
                  <img className="master" src={master} alt="MasterCard" />
                  <img className="bkash" src={bkash} alt="Bkash" />
                  <img className="ringfire" src={ringfire} alt="Ringfire" />
                </div>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <span className="me-2"><img src={checkbox} alt="Checkbox" /></span>
                <span>Cash on delivery</span>
              </div>
              <button className="btn btn-primary w-100">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
