import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./NavBar.css";

import LogoIngerTect from "../../../images/logo.png"


function ScrollNavBar() {
  const [navBarBackground, setNavBarBackgorund] = useState(false);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 790) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };
  

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container
       
          fluid={+true}
        >
          <Navbar.Brand href="#home">
            <Image fluid src={LogoIngerTect} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#AnimalesId">Animales</Nav.Link>
            <Nav.Link href="#TextoId">Texto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ScrollNavBar;
