import React from "react";
import banner from "../images/main-banner.png";
import banner2 from "../images/2.png";
import banner3 from "../images/Colorful Fresh Travel Banner2.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <>
      <Carousel className="custom-carousel" style={{marginTop: '50px'}}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
