import React from "react";
import { usePaystackPayment } from "react-paystack";
import { Link } from "react-router-dom";
// import img from "../Assets/plateau.png";
import { useNavigate } from "react-router-dom";

function Payment() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
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
          className="button"
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
    <div className="App">
      <header class="header" id="header">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
        <nav class="nav container">
          <a href="#" class="navbar-brand">
            <br /> Geosoft
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                  Verify Wase LG Certificate
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  Reprint Certificate
                </a>
              </li>
              <li class="nav__item">
                <a href="#services" class="nav__link">
                  Services
                </a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link">
                  Contact Us
                </a>
              </li>
              <li class="nav__item">
                <a
                  id="language-switch"
                  class="button button-link"
                  style={{
                    backgroundColor: "#f9a826",
                    color: "#fff",
                    padding: "5px",
                    textDecoration: "none",
                    borderRadius: "5px",
                  }}
                >
                  Verify Certificate
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main class="main">
        <section class="home section" id="home">
          <h1 style={{ textAlign: "center", fontSize: "40px" }}></h1>
          <div class="home__container container grid">
            {/* <img src={img} alt="" /> */}

            <div class="home__data">
              <h1 class="home__title">Make Payment for your Certificate </h1>
              <p class="home__description"></p>
              <Link to="/payment" class="button">
                <PaystackHookExample />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer section">
        <div class="footer__container container grid">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              Wase Local Government
            </a>
            <p class="footer__description">
              Find Your specialty <br /> Faster and Easier
            </p>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Gallery</h3>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Community News</h3>
            {/* <ul class="footer__links">
              <li>
                <a href="#" class="footer__link">
                  Support
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Questions
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Usage help
                </a>
              </li>
            </ul> */}
          </div>

          <div class="footer__social">
            <a href="#" target="blank" class="footer_social-link">
              <i class="bx bxl-facebook-circle "></i>
            </a>
            <a href="https://x.com" target="blank" class="footer_social-link">
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="footer__social-link"
            >
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>

        {/* <p class="footer__copy">&#169; Geosoft. All right reserved</p> */}
      </footer>
    </div>
  );
}

export default Payment;