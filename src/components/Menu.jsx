import React, { useState, } from 'react'
import { Link, } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'; 
import FlagLangs from './FlagLangs'


const Menu = () => {
  const myMediaQuery = window.matchMedia('(max-width: 700px)')
  const [ mobileView, setMobileView, ] = useState(myMediaQuery.matches)
  const [ menuActive, setMenuActive, ] = useState(false)

  const establishIfMobileView = () => {
    setMobileView(myMediaQuery.matches)
  }

  window.addEventListener('resize', establishIfMobileView);

  return (
    <nav id="mainMenu">
      <label htmlFor="toggle" onClick={() => setMenuActive(!menuActive)}>
        &#9776;
      </label>
      <ul
        style={{
          display: mobileView ? (menuActive ? 'block' : 'none') : 'flex',
        }}
      >
        <li>
          <Link onClick={() => setMenuActive(false)} to="/">
            <FormattedMessage id="app.home" />
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuActive(false)} to="/quiensoy">
            <FormattedMessage id="app.whoami" />
          </Link>
          </li>
        <li>
          <Link onClick={() => setMenuActive(false)} to="/estYExp">
            <FormattedMessage id="app.educationAndExperience" />
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenuActive(false)} to="/redesSociales">
            <FormattedMessage id="app.socialNetworks" />
          </Link>
        </li>
        <li>
          <FlagLangs />
        </li>
      </ul>
    </nav>
  )
}


export default Menu
