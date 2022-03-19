import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
  return (
    <div id="home">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../images/1.svg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../images/2.svg"
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../images/3.svg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
