import { useState } from 'react'
import '../src/css/BarraPublicidad.css'

function BarraPublicidad(props) {
    return(
        
        <div className="barra">
            <img className="imagen alinear-izquierda" 
            src={(`../src/img/imagen-09.png`)}/> <img className="imagen alinear-derecha" src={(`../src/img/imagen-${props.imagen}.png`)}/>
             <h1 className='titulo'>{props.titulo}</h1>
         </div>

    )
}

export default BarraPublicidad;