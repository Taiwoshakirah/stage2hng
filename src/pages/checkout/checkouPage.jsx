import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckouPage.css";
import visaimg from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import bkash from "../../assets/images/bkash.png";
import ringfire from "../../assets/images/ringfire.png";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);

  const [formData, setFormData] = useState({
    fullName: "",
    streetAddress: "",
    apartmentFloor: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
    bankPayment: false,
    cashOnDelivery: false,
  });

  const [paymentError, setPaymentError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bankPayment && !formData.cashOnDelivery) {
      setPaymentError(true);
      return;
    }
    setPaymentError(false);
    setIsSubmitted(true);
    // Perform form submission logic here (e.g., sending data to server, redirecting)
    console.log("Form submitted:", formData);

    // Example: Redirect to a thank you page after successful form submission
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container my-5">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mb-4">
                <h2>Check Out</h2>
                <h5>Billing Details</h5>
              </div>
              <form id="checkoutForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="streetAddress" className="form-label">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apartmentFloor" className="form-label">
                    Apartment Floor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apartmentFloor"
                    name="apartmentFloor"
                    value={formData.apartmentFloor}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="townCity" className="form-label">
                    Town/City*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="townCity"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="saveInfo">
                    Save this information for faster checkout next time
                  </label>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div
                      className="d-flex justify-content-between mb-2"
                      key={item.productId}
                    >
                      <span>{item.name}</span>
                      <span>NGN {item.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>NGN {subtotal.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <span>Total:</span>
                    <span>NGN {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2">
                        <input
                          type="checkbox"
                          checked={formData.bankPayment}
                          onChange={handleChange}
                          name="bankPayment"
                          className="me-2"
                        />
                        <span>Bank</span>
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <img className="visa" src={visaimg} alt="Visa" />
                      <img className="master" src={master} alt="MasterCard" />
                      <img className="bkash" src={bkash} alt="Bkash" />
                      <img className="ringfire" src={ringfire} alt="Ringfire" />
                    </div>
                  </div>
                  <div className="mb-4 d-flex align-items-center">
                    <span className="me-2">
                      <input
                        type="checkbox"
                        checked={formData.cashOnDelivery}
                        onChange={handleChange}
                        name="cashOnDelivery"
                        className="me-2"
                      />
                      <span>Cash on delivery</span>
                    </span>
                  </div>
                  {paymentError && (
                    <div className="alert alert-danger" role="alert">
                      Please select a payment method before placing the order.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary w-100"
                form="checkoutForm"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
