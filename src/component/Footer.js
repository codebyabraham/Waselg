import React from "react";
// import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div
        id="bottom"
        style={{ padding: "5vh 0 0", position: "relative" }}
        className="container-fluid bg-black text-white mx-auto"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 style={{ color: "#ffff", fontWeight: "800" }}>
                Wase LG Indigene Certification
              </h3>
              <p className="fs-5">
                Our primary aim is to simplify and expedite the process of
                obtaining an indigenous certificate. We aim to eliminate
                unnecessary bureaucratic hurdles and reduce the time and effort
                required to complete the application.
              </p>
            </div>

            <div className="col-md-4">
              <h3 style={{ color: "#ffff", fontWeight: "800" }}>Services</h3>
              <ul className="list-unstyled fs-5">
                <li>Local Government Certification</li>
                <li>Indigene Verification</li>
                <li>Document Authentication</li>
                <li>Community Recognition</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 style={{ color: "#ffff", fontWeight: "800" }}>
                Connect with Us
              </h3>
              <ul className="list-unstyled fs-5">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Tiktok</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-12 text-center"
            style={{ borderTop: "1px solid #ffff" }}
          >
            <p className="mb-0 pt-4 pb-5 fs-5">Wass.ng@2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
