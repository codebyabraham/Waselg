import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png';
import './App.css'


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
          <Link class="navbar-brand" to="/">
          <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' />
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
          <img id="logo" style={{width: '170px', height: '40px'}} src={logo} alt='logo' />
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
                    class="nav-link btn rounded-1"
                    aria-current="page"
                    to="/growthform"
                  >
                    Grow my Brand
                  </Link>
                </li>
               
                <li class="nav-item m-3 dropdown dropstart">
                  <Link
                  id="primary"
                    class="nav-link bg-white text-center dropdown-toggle border rounded"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact Us
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <div class="col mx-auto rounded p-5">
                        <div class="card-body text-center">
                          <h3 class="col-p slider-head">Contact Details</h3>
                          <p>Feel free to contact us with questions</p>
                          <div>
                            <b>Email:</b> jlmedia.hub8@gmail.com
                          </div>
                          <Link
                            href="https://x.com/jlmediaglobal?t=AnTim-6NKXDCSKqb5pZbXg&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/twitter--v1.png"
                              alt="twitter--v1"
                            />
                          </Link>
                          <Link href="" target="_blank" rel="noopener noreferrer">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/tiktok--v1.png"
                              alt="tiktok--v1"
                            />
                          </Link>
                          <Link
                            to="https://instagram.com/jlmediaglobal?igshid=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/instagram-new--v1.png"
                              alt="instagram-new--v1"
                            />
                          </Link>
                          <Link to='https://www.facebook.com/profile.php?id=100087289263138&mibextid=ZbWKwL'>

                          <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>

                          </Link>
                          <Link to='https://www.linkedin.com/company/jlmediaglobal/'>

                          <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                          </Link>
                          <Link to='jlmedia.hub8@gmail.com'>

                          <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                          </Link> 
                        </div>
                      </div>
                    </li>
                  </ul>
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

