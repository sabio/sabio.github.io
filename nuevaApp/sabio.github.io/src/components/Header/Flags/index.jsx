import React from "react";
import './index.scss'
import MxFlag from '../../../assets/images/mexico-flag-icon-32.png';
import UsaFlag from '../../../assets/images/united-states-of-america-flag-icon-32.png';



function Flags() {
    return (
        <div class="header__flags">
            <span>
                <img src={MxFlag} />
            </span>
            <span>
                <img src={UsaFlag} />
            </span>
        </div>
    );
}


export default Flags;