import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './images/logo.png';
import '../App.css'


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
     
      <nav class="navbar navbar-expand-lg p-0 mb-5 fixed-top">
        <div class="container mx-auto">
          <Link class="navbar-brand text-white" to="/">
          {/* <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' /> */}
          WASE STUDENT SCHOLARSHIP SCHEME
          </Link>

          <button style={{border: '1px white solid'}}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
                class="btn-close btn-close-white"
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
                    class="nav-link text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
               
                <li class="nav-item m-3">
                  <Link
                  id="bttt"
                    class="nav-link text-white"
                    to="/contact"
                    role="button"
                  >
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item m-3">
                  <Link
                  id="bttt"
                    class="nav-link text-white"
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

