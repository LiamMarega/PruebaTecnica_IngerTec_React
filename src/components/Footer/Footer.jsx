import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { AiFillPhone, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Footer.css";
function Footer() {
  return (
    <Container fluid className="ContainerFooter">
      <Row className="LandingPage__Container_Row_Footer">
        <Col sm={3} xl={3}>
          <ul className="FooterList">
            <a
              href="https://www.linkedin.com/in/liam-marega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <AiFillLinkedin /> LINKEDIN
              </li>
            </a>
          </ul>
        </Col>
        <Col sm={3} xl={3}>
          <ul className="FooterList">
            <a
              href="mailto:liammarega85@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <AiFillMail /> EMAIL
              </li>
            </a>
          </ul>
        </Col>
        <Col sm={3} xl={3}>
          <ul className="FooterList">
            <a
              href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <IoLogoWhatsapp /> WHATSAPP
              </li>
            </a>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
