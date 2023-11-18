import React from "react";
import pageheading from "../images/page-heading-bg.jpg";
import "../App.css";

function AboutBanner() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pageheading} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h5 class="fs-1">ABOUT LG CERTIFICATE OF INDIGENESHIP</h5>
              {/* <p>SUPPORTING NUMEROUS STUDENTS IN THEIR EDUCATION JOURNEY!</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
