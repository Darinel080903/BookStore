import { useState } from 'react'
import '../src/css/Navbar.css'

function Navbar(props) {
    return(
        <div className='Navbar'>
            <div className="blue-bg">
                <img className="imagen-01 alinear-izquierda" 
                src={(`../src/img/imagen-${props.imagen}.png`)}/>
                <h1>BOOK STORE</h1>
            </div>

        </div>
         
    )
}

export default Navbar;