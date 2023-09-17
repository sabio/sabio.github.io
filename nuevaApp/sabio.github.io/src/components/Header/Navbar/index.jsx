import React from "react";
import './index.scss';
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <nav>
            <input id="menuToggleCheckbox" type="checkbox" value="checked" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/who-am-i">¿Quién soy?</Link></li>
                <li><Link to="/experience">Educación y experiencia</Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;