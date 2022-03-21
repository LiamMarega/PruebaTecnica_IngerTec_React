import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimalesLogo from "../../../images/LogoAnimales.svg";

function LandingPage() {
  return (
    <Container className="ContainerLandingPage" fluid>
      <Row>
        <Col sm={12}>
          <Image fluid src={AnimalesLogo} />
        </Col>
        <Col sm={12}>
          <Link to="/home">
            <button id="ButtonLanding" variant="primary" size="lg">
              INGRESAR
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
