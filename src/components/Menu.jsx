import React, { useState, } from 'react'
import { Link, } from 'react-router-dom'


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
        <li><Link onClick={() => setMenuActive(false)} to="/">Home</Link></li>
        <li><Link onClick={() => setMenuActive(false)} to="/quiensoy">¿Quien soy?</Link></li>
        <li><Link onClick={() => setMenuActive(false)} to="/estYExp">Educación y Experiencia</Link></li>
        <li><Link onClick={() => setMenuActive(false)} to="/redesSociales">Redes sociales</Link></li>
      </ul>
    </nav>
  )
}


export default Menu
