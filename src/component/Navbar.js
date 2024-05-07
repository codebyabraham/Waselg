import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './images/logo.png';
import "../App.css";

function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  //handle scroll

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      if (st > lastScrollTop) {
        // Scroll down
        navbar.style.top = "-70px"; // Adjust the value as needed
      } else {
        // Scroll up
        navbar.style.top = "0";
      }

      setLastScrollTop(st <= 0 ? 0 : st);
    }
  };

  // ...

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg py-2 mb-5 fixed-top">
        <div className="container mx-auto">
          <Link
            className="navbar-brand text-white fs-5 fw-bolder text-sm"
            to="/"
          >
            CERTIFICATE OF INDIGENESHIP
          </Link>

          <button
            style={{ width: "30px" }}
            className="navbar-toggler p-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ width: "15px", height: "15px" }}
            ></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link className="navbar-brand" to="/">
                {/* <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' /> */}
              </Link>
              <button
                type="button"
                className="btn-close btn-close-success"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item m-3">
                  <Link
                    type="button"
                    id="bttt"
                    className="nav-link fs-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item m-3">
                  <Link
                    type="button"
                    id="bttt"
                    className="nav-link fs-3"
                    aria-current="page"
                    to="/"
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-item m-3">
                  <Link
                    id="bttt"
                    className="nav-link fs-3"
                    to="/contact"
                    role="button"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item m-3">
                  <Link
                    id="bttt"
                    className="nav-link applyb fs-3"
                    to="/payment"
                    role="button"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      ;
    </>
  );
}

export default Navbar;
