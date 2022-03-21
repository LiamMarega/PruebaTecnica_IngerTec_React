import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TraerTexto } from "../../store/actions";
import { Container } from "react-bootstrap";
import "./TextTarea.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Axios
function TextTarea() {
  const dispatch = useDispatch();
  const textoTextTarea = useSelector((state) => state);

  function handleClick() {
    dispatch(TraerTexto());
  }

  return (
    <Container id="TextoId" fluid className="BodyTextTarea">
      <div className="CenterTextTarea">
        <textarea
          name="textTarea"
          id="TextTareaAjax"
          value={textoTextTarea?.texto.body}
        ></textarea>
        <br />
        <div className="ContainerButton">
          <button className="ButtonTextTarea" onClick={() => handleClick()}>
            OBTENER TEXTO
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TextTarea;
