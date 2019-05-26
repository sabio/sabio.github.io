import React from 'react'
import { Link, } from 'react-router-dom'


const Menu = () => (
  <nav id="mainMenu">
    <label htmlFor="toggle">
      &#9776;
    </label>
    <input id="toggle" type="checkbox"/>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/quiensoy">¿Quien soy?</Link></li>
      <li><Link to="/estYExp">Estudios y Experiencia</Link></li>
      <li><Link to="/redesSociales">Redes sociales</Link></li>
    </ul>
  </nav>
)


export default Menu
