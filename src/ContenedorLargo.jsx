import React from "react";
import "../src/css/ContenedorLargo.css";

function ContenedorLargo(props){
    return(
        <div className="contenedor_cuadro">
            <img className="imagen" 
            src={(`../src/img/imagen-${props.imagen}.png`)}/>

            <div className="contenedor_texto">
                <p className="nombre-tema"><strong>{props.tema}</strong></p>
                <p className="sub-tema">{props.subTema}</p>
                <p className="texto-contenedor">{props.textoContenedor}</p>
            </div>

        </div>
    );
}

export default ContenedorLargo;