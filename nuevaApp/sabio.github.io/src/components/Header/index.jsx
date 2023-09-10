import React from "react";
import Navbar from "./Navbar";
import Flags from "./Flags";
import './index.scss'


function Header() {
    return(
        <header>
            <Navbar />
            <Flags />
            <label id="menuToggleIcon" for="menuToggleCheckbox">☰</label>
        </header>
    );

}

export default Header;