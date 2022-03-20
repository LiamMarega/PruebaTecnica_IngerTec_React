import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sumaContador } from "../../store/actions";
import {  Image } from "react-bootstrap";
import imgConejo from "../../../images/ANIMALES_SVG/conejo.svg"
import imgGallo from "../../../images/ANIMALES_SVG/gallo.svg"
import imgPanda from "../../../images/ANIMALES_SVG/panda.svg"

import "./PopUp.css"


function PopUp(e) {

  const dispatch = useDispatch();
  const contador = useSelector((state) => state);
  const { animal } = useParams();



  //Mandar la accion
  function handleClick(e) {
    dispatch(sumaContador(e.target.name));

  }

  function handleClickClose() {
    window.close()

  }

  if (animal == "conejo") {
    return (
      <div className="BodyPopUp">
        <Image src={imgConejo} />
        <button name={animal} onClick={(e) => handleClick(e) } className="ButtonPopUp">
          OK
        </button>
        <button onClick={() => handleClickClose()}  className="ButtonPopUp">
          CERRAR
        </button>
      </div>
    );
  }
  if (animal == "gallo") {
    return (
      <div className="BodyPopUp">
        <Image src={imgGallo} />
        <button name={animal} onClick={(e) => handleClick(e) } className="ButtonPopUp">
          OK
        </button>
        <button onClick={() => handleClickClose()}  className="ButtonPopUp">
          CERRAR
        </button>
      </div>
    );
  }
  if (animal == "panda") {
    return (
      <div className="BodyPopUp">
        <Image src={imgPanda} />
        <button name={animal} onClick={(e) => handleClick(e) } className="ButtonPopUp">
          OK
        </button>
        <button onClick={() => handleClickClose()}  className="ButtonPopUp">
          CERRAR
        </button>
      </div>
    );
  }

    

}

export default PopUp;
