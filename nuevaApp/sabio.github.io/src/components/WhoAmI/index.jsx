import React, { useEffect, useState } from "react";
import './index.scss';
import MiPerfil from '../../assets/images/perfil.jpg';


function WhoAmI() {
    let [isOpaque, setIsOpaque] = useState(false);
    
    useEffect(() => {
        setTimeout(()=>setIsOpaque(true), 50);
    }, []);
    
    let classForContainer = isOpaque ? "whoami-container" : "whoami-container opacity-zero";

    return (
        <section id="whoami-section">
            <div className={classForContainer}>
                <h2>
                    ¿Quién soy?
                </h2>
                <p>
                    <img src={MiPerfil} />
                    ¡Que ondas! Mi nombre es Armando Gómez, soy de Guadalajara Jalisco México, aunque nacido en Maracaibo Venezuela(si, tengo ambas nacionalidades). Soy un ingeniero de software con un posgrado en Tecnologías de Información con gusto especial en las tecnologias Java. I am passionate about technology, continuous learning, using my skills to build amazing applications that make a positive impact on people and companies. 
                    Mis tecnologias favoritas son: Java, Postgresql, Redis, Javascript-.....
                    Actualmente trabajo en Bitso apoyando en el trade engine y en sistemas para el manejo de balances de los usarios.
                    Gracias a mi pasado de musico de mariachi, se tocar varios instrumentos de mariachi tales como el violin, guitarron, vihuela, guitarra y trompeta, ah! y tambien le se al ukulele.
                </p>
            </div>
        </section>
    );
}

export default WhoAmI;