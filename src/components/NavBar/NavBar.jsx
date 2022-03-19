import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./NavBar.css";
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
  
  console.log(screen.width);
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container
       
          fluid={+true}
        >
          <Navbar.Brand href="#home">
            <Image fluid src="../../images/logo-ingertec.png" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Animales</Nav.Link>
            <Nav.Link href="#pricing">Texto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ScrollNavBar;
