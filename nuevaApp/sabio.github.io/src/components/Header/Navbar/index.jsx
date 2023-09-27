import React from "react";
import './index.scss';
import { Link } from "react-router-dom";


function Navbar() {
    const setMenuActive = (checked) => {
        document.getElementById('menuToggleCheckbox').checked = checked;
    }

    return(
        <nav>
            <input id="menuToggleCheckbox" type="checkbox" value="checked" />
            <ul>
                <li><Link to="/" onClick={() => setMenuActive(false)}>Inicio</Link></li>
                <li><Link to="/who-am-i" onClick={() => setMenuActive(false)}>¿Quién soy?</Link></li>
                <li><Link to="/experience" onClick={() => setMenuActive(false)}>Educación y experiencia</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;