import React, { useEffect, useState } from "react";
import './index.scss';
import MiPerfil from '../../assets/images/perfil.jpg';
import { FormattedMessage } from 'react-intl'; 


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
                    <FormattedMessage id="app.whoami" />
                </h2>
                <p>
                    <img src={MiPerfil} />
                    <FormattedMessage id="app.whoami.description" />
                </p>
            </div>
        </section>
    );
}

export default WhoAmI;