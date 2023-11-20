import React from "react";
import pageheading from "../images/page-heading-bg.jpg";
import "../App.css";

function AboutBanner() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pageheading} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
      </div>
      </div>
    </>
  );
}

export default AboutBanner;
