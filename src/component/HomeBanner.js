import React from "react";
import banner from "../images/L1.jpg";
import banner2 from "../images/V2.jpg";
import banner3 from "../images/ver 4.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <>
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <div
            id="text-content"
            class="carousel-caption align-items-center text-start "
          >
            <h3 id="text1">Your Heritage, Your Identity</h3>
            <h5 id="text2">we are here</h5>
            <p id="text3" class="fs-5">
              Our Identity is from the Local Government, Let Us document it
            </p>
            {/* <Link to="/payment" id="button" class="rounded-pill apply">
              Application Form
            </Link> */}
          </div>
          <img
            className="d-block w-100 custom-carousel-image"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            id="text-content"
            class="carousel-caption align-items-center text-start d-md-block"
          >
            <h3 id="text1">Your Heritage, Your Identity</h3>
            <h5 id="text2">we are here</h5>

            <p id="text3" class="fs-5">
              Our Greatness as a Nation starts from the Local Governments.
            </p>
            {/* <Link to="/payment" id="button" class="rounded-pill apply">
              Application Form
            </Link> */}
          </div>
          <img
            className="d-block w-100 custom-carousel-image"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={banner3}
            alt="Third slide"
          />
          <div
            id="text-content"
            class="carousel-caption align-items-center text-start d-md-block"
          >
            <h3 id="text1">Your Heritage, Your Identity</h3>
            <h5 id="text2">we are here</h5>
            <p id="text3" class="fs-5">
              Local Governments, the building block of the Nation.
            </p>
            {/* <Link to="/payment" id="button" class="rounded-pill apply">
              Application Form
            </Link> */}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeBanner;
