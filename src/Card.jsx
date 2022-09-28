import React from "react";
import "../src/css/Card.css";

function Card() {
    return(
        <div className="container">
       
            <div className="card">
                <img className="imagen" src={(`../src/img/imagen-06.png`)}/>
                <h4 className="titulo">El Señor de los Anillos</h4>
                <p className="texto">Su historia se desarrolla en la Tercera Edad del Sol de la Tierra Media, un lugar ficticio.</p>
                <a href="https://www.amazon.com.mx/Se%C3%B1or-los-Anillos-Comunidad-Anillo/dp/607079222X/ref=sr_1_2?adgrpid=59406573724&gclid=CjwKCAjw-L-ZBhB4EiwA76YzOR4_WtNtm-I0Ar6UqQnYcVC2xLAqrK4E3ZP5nqXHlrnKfNth-en7wxoCB9MQAvD_BwE&hvadid=590668939892&hvdev=c&hvlocphy=1010031&hvnetw=g&hvqmt=b&hvrand=12254525786488625037&hvtargid=kwd-316559881113&hydadcr=27010_14537427&keywords=se%C3%B1or+de+los+anillos+libro&qid=1664119111&sr=8-2" target="_blank">Comprar</a>
            </div>

            <div className="card">
                <img className="imagen" src={(`../src/img/imagen-07.png`)}/>
                <h4 className="titulo">El Hobbit</h4>
                <p className="texto">Sacado de su cómodo agujero hobbot por Gandalf y una banda de enanos una gran aventura.</p>
                <a href="https://www.amazon.com.mx/El-Hobbit-NE-J-Tolkien/dp/8445012800/ref=d_pd_sbs_sccl_3_5/133-2473830-2502219?pd_rd_w=0mxFy&content-id=amzn1.sym.4450e481-2ae9-40d0-b720-55c1b58ea725&pf_rd_p=4450e481-2ae9-40d0-b720-55c1b58ea725&pf_rd_r=D51R267K76SSMX6XMAYG&pd_rd_wg=oEpbd&pd_rd_r=c09eca68-7ede-4832-9e74-e92c36b528cc&pd_rd_i=8445012800&psc=1" target="_blank">Comprar</a>
            </div>

            <div className="card">
                <img className="imagen" src={(`../src/img/imagen-08.png`)}/>
                <h4 className="titulo">Alicia en el país de las maravillas</h4>
                <p className="texto"> La historia cuenta cómo una niña llamada Alicia cae por un agujero, encontrándose en un mundo peculiar.</p>
                <a href="https://www.amazon.com.mx/Las-Aventuras-Alicia-Pa%C3%ADs-Maravillas/dp/6071437156/ref=sr_1_2?crid=T57780I7XEJN&keywords=alicia+en+el+pais+de+las+maravillas&qid=1664120089&s=books&sprefix=alicia%2Cstripbooks%2C243&sr=1-2" target="_blank">Comprar</a>
            </div>
        </div>
    )
}

export default Card;