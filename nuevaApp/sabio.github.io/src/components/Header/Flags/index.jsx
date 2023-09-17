import React from "react";
import useLanguage from "../../../state/language";
import './index.scss'
import MxFlag from '../../../assets/images/mexico-flag-icon-32.png';
import UsaFlag from '../../../assets/images/united-states-of-america-flag-icon-32.png';


function Flags() {
    const { language, setLanguage } = useLanguage(); 

    return (
        <div className="header__flags">
            <div>
                <span onClick={() => setLanguage("es")} className={language == "es" && "lang-selected"}>
                    <img src={MxFlag} />
                </span>
                <span onClick={() => setLanguage("en")} className={language == "en" && "lang-selected"}>
                    <img src={UsaFlag} />
                </span>
            </div>
        </div>
    );
}


export default Flags;