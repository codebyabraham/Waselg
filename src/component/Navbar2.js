import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './images/logo.png';
import "../App.css";

function Navbar2() {
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
      <nav
        style={{ backgroundColor: "rgba(10,150,10,0.8603816526610644)" }}
        className="navbar navbar-expand-lg p-2 mb-5 "
      >
        <div className="container mx-auto">
          <Link
            className="navbar-brand text-white fs-5 fw-bolder text-sm"
            to="/"
          >
            {/* <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' /> */}
            CERTIFICATE OF INDIGENESHIP
          </Link>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
                    className="nav-link fs-3"
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
      ;
    </>
  );
}

export default Navbar2;
