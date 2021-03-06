import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import imgElefante from "../../../images/ANIMALES_SVG/elefante.svg";
import "bootstrap/dist/css/bootstrap.min.css";
function ModalElefante(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image fluid src={imgElefante} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalElefante;
