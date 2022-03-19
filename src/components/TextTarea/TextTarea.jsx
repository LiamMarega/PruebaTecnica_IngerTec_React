import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { TraerTexto } from "../../store/actions";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./TextTarea.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//Axios
function TextTarea() {
    const contador = useSelector((state) => state?.texto);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(TraerTexto());
      }
    
      console.log("CONTADOR", contador);

  return (
    <Container fluid className='BodyTextTarea'>
        <div className="CenterTextTarea">
            <textarea name="textTarea" id="TextTareaAjax" placeholder={contador?.texto}></textarea>
            <br />
            <div className="ContainerButton">
            <button className='ButtonTextTarea' onClick={() => handleClick()}>OBTENER TEXTO</button>
            </div>
        </div>
    </Container>
  )
}

export default TextTarea