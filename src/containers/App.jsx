import Card from '../Card';
import ContenedorLargo from '../ContenedorLargo';
import Navbar from '../Navbar'
import BarraPublicidad from '../BarraPublicidad';
import Footer from '../Footer';

function App(props) {
    return(
        <>
            <Navbar imagen="02" />
            <br/>
            <br/>
            <br/>
            <ContenedorLargo 
            tema="WATCHMEN"
            subTema="Autor: Alan Moore"
            imagen="03"
            textoContenedor="Watchmen (Vigilantes en español) es una serie de comic books creada por el guionista Alan Moore, el dibujante Dave Gibbons, y el entintador John Higgins. La serie fue publicada por la compañía estadounidense DC Comics durante los años 1986 y 1987 como una serie limitada de 12 comics."/>

            <ContenedorLargo 
            tema="Harry Potter Y La Piedra Filosofal"
            subTema="Autor: J. K Rowling"
            imagen="04"
            textoContenedor="Harry Potter nunca ha oído hablar de Hogwarts cuando en el felpudo del número 4 de Privet Drive empieza a caer una lluvia de sobres de pergamino amarillento, con la dirección escrita con tinta verde y un sello de lacre púrpura. Y aunque los horribles tíos de Harry se apresuran a confiscar las cartas, el día que Harry cumple once años un hombre gigantesco llamado Rubeus Hagrid, cuyos ojos brillan como escarabajos negros, irrumpe con una noticia extraordinaria"/>
            
            <BarraPublicidad imagen="09" titulo="¡Los mas vendidos!"/>
            <Card/>
            <br/>
            <br/>
            <BarraPublicidad imagen="09"/>

            <ContenedorLargo 
            tema="El principito"
            subTema="Autor: Antoine de Saint-Exupéry"
            imagen="10"
            textoContenedor="El principito es un cuento poético que viene acompañado de ilustraciones hechas con acuarelas por el mismo Saint-Exupéry.11​ En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración."/>

            <ContenedorLargo 
            tema="VIAJE AL CENTRO DE LA TIERRA"
            subTema="Autor: JULES VERNE"
            imagen="11"
            textoContenedor="Viaje al centro de la Tierra es una novela de Julio Verne, publicada el 25 de noviembre de 1864; la cual trata de la expedición de un profesor de mineralogía, Otto Lidenbrock, su sobrino Axel y un guía llamado Hans al interior de la Tierra."/>

            <Footer/>
        </>
    )
}

export default App;