import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sumaContador } from "../../store/actions";
import {  Image } from "react-bootstrap";
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


    return (
      <div className="BodyPopUp">
        <Image src={`../../../images/ANIMALES_SVG/${animal}.svg`} />
        <button name={animal} onClick={(e) => handleClick(e) } className="ButtonPopUp">
          OK
        </button>
        <button onClick={() => handleClickClose()}  className="ButtonPopUp">
          CERRAR
        </button>
      </div>
    );

}

export default PopUp;
