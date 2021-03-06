import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import imgLeon from "../../../images/ANIMALES_SVG/leon.svg"
import "bootstrap/dist/css/bootstrap.min.css";
function ModalLeon(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image fluid src={imgLeon} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLeon;
