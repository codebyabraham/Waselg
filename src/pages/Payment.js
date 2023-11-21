import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import "./payment.css";
import { useNavigate } from "react-router-dom";

import Footer from "../component/Footer";
import Navbar2 from "../component/Navbar2";

function Payment() {
  useEffect(() => {
    document.title = "WaseLg | Payment";
  }, []);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission or payment processing here
    console.log(`Email submitted: ${email}`);
    // Add payment processing logic here if needed
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: 250000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // Convert the object to a JSON string before storing
    localStorage.setItem("transid", JSON.stringify(reference.reference));
    if (reference) {
      navigate("/Virtualnin");
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className="button bg-success col-md-6"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Click to Make Payment
        </button>
      </div>
    );
  };

  const navigate = useNavigate();
  return (
    <div className="payment">
      <Navbar2 />

      <div className="payment-container my-5 mx-2 p-3">
        <h1>Payment for Certificate of Indegene</h1>
        <form onSubmit={handleSubmit}>
          <input 
            class='my-5'
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="bg-success">
            <PaystackHookExample />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
