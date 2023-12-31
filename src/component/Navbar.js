import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './images/logo.png';
import "../App.css";

function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  //handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll down
        document.querySelector(".navbar").style.top = "-70px"; // Adjust the value as needed
      } else {
        // Scroll up
        document.querySelector(".navbar").style.top = "0";
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-lg py-2 mb-5 fixed-top">
        <div class="container mx-auto">
          <Link class="navbar-brand text-white fs-5 fw-bolder text-sm" to="/">
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
              class="navbar-toggler-icon"
              style={{ width: "15px", height: "15px" }}
            ></span>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <Link class="navbar-brand" to="/">
                {/* <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' /> */}
              </Link>
              <button
                type="button"
                class="btn-close btn-close-success"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item m-3">
                  <Link
                    type="button"
                    id="bttt"
                    class="nav-link fs-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li class="nav-item m-3">
                  <Link
                    id="bttt"
                    class="nav-link fs-3"
                    to="/contact"
                    role="button"
                  >
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item m-3">
                  <Link
                    id="bttt"
                    class="nav-link fs-3"
                    to="/about"
                    role="button"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
