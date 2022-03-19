import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../images/1.svg"
import img2 from "../../images/2.svg"
import img3 from "../../images/3.svg"

function Carrusel() {
  return (
    <div id="home">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
