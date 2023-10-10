import React from "react";
import './index.scss';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'; 


function Navbar() {
    const setMenuActive = (checked) => {
        document.getElementById('menuToggleCheckbox').checked = checked;
    }

    return(
        <nav>
            <input id="menuToggleCheckbox" type="checkbox" value="checked" />
            <ul>
                <li><Link to="/" onClick={() => setMenuActive(false)}><FormattedMessage id="app.home" /></Link></li>
                <li><Link to="/who-am-i" onClick={() => setMenuActive(false)}><FormattedMessage id="app.whoami" /></Link></li>
                <li><Link to="/experience" onClick={() => setMenuActive(false)}><FormattedMessage id="app.experience.and.education" /></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;