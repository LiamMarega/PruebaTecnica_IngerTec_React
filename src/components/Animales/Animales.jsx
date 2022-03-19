import React, { useState, useEffect  } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sumaContador } from "../../store/actions";
import { AiOutlineEye } from 'react-icons/ai';
import ModalElefante from "../Modal/ModalElefante.jsx"
import ModalLeon from "../Modal/ModalLeon.jsx"
import "./Animales.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Animales() {
  const dispatch = useDispatch();
  const [modalElefanteShow, setModalElefanteShow] = React.useState(false);
  const [modalLeonShow, setModalLeonShow] = React.useState(false);
  const contador = useSelector((state) => state);

  useEffect(() => {

  console.log("nassss",contador?.conejo);
  console.log("nassss",contador);

  }, );
  
  function handleClick(e) {
    dispatch(sumaContador(e.target.name))
   setModalShow(true);
  }

  function handleClickModalElefante(e) {
    dispatch(sumaContador(e.target.name))
    setModalElefanteShow(true);
  }
 
  function handleClickModalLeon(e) {
    dispatch(sumaContador(e.target.name))
    setModalLeonShow(true);
  }

  function popUp(e) {
    var configuracion_ventana = "width=800, height=400";
    window.open(`/popup/${e.target.name}`, "Pagina_CNN", configuracion_ventana);
  }



  return (
    <Container className="ContainerAnimales" fluid="xl">

      <ModalElefante
        show={modalElefanteShow}
        onHide={() => setModalElefanteShow(false)}
      />
      
      <ModalLeon
        show={modalLeonShow}
        onHide={() => setModalLeonShow(false)}
      />
      <Row>
        <Col className="text-center">
          <Image
            name="conejo"
            onClick={(e) => popUp(e)}
            fluid
            src="../../../images/ANIMALES_SVG/conejo.svg"
          />
          <div className="TextoAnimales">
            <h3>Conejo</h3>
            <p>
              El conejo común o conejo europeo (Oryctolagus cuniculus) es una
              especie de mamífero lagomorfo.
            </p>
          </div>
          <h4>VISITAS</h4> <AiOutlineEye/>
          <h5>{contador ? contador.conejo : "0"}</h5>
        </Col>
        <Col>
          <Image
            onClick={(e) => handleClickModalElefante(e)}
            name="elefante"
            fluid
            src="../../../images/ANIMALES_SVG/elefante.svg"
          />
          <div className="TextoAnimales">
            <h3>Elefante</h3>
            <p>
              Los elefantes o elefántidos son una familia de mamíferos
              placentarios del orden Proboscidea.
            </p>
          </div>
          <h4>VISITAS</h4> <AiOutlineEye/>
          <h5>{contador ? contador.elefante : "0"}</h5>
        </Col>
        <Col>
          <Image
            onClick={(e) => popUp(e)}
            name="gallo"
            fluid
            src="../../../images/ANIMALES_SVG/gallo.svg"
          />
          <div className="TextoAnimales">
            <h3>Gallo</h3>
            <p>
              El gallo y la gallina son una especie de ave galliforme de la
              familia Phasianidae procedente del sudeste asiático.
            </p>
          </div>
          <h4>VISITAS</h4> <AiOutlineEye/>
          <h5>{contador ? contador.gallo : "0"}</h5>
        </Col>
        <Col>
          <Image
            onClick={(e) => {
              handleClickModalLeon(e);
            }}
            name="leon"
            fluid
            src="../../../images/ANIMALES_SVG/leon.svg"
          />
          <div className="TextoAnimales">
          <h3>Leon</h3>
          <p>
            El león es un mamífero carnívoro de la familia de los félidos y una
            de las cinco especies del género Panthera.
          </p>
          </div>
          <h4>VISITAS</h4> <AiOutlineEye/>
          <h5>{contador ? contador.leon : "0"}</h5>
        </Col>
        <Col>
          <Image
            onClick={(e) => popUp(e)}
            name="panda"
            fluid
            src="../../../images/ANIMALES_SVG/panda.svg"
          />
          <div className="TextoAnimales">
          <h3>Panda</h3>
          <p>
            El panda, oso panda o panda gigante (Ailuropoda melanoleuca) es una
            especie de mamífero del orden de los carnívoros.
          </p>
          </div>
          <h4>VISITAS</h4> <AiOutlineEye/>
          <h5>{contador ? contador.panda : "0"}</h5>

        </Col>
      </Row>
    </Container>
  );
}

export default Animales;
