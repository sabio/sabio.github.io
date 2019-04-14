import React from 'react'
import { Link } from "react-router-dom"


let Menu = () => (
  <nav id="mainMenu">
    <ul>
      <li><Link to={`/`}>Home</Link></li>
      <li><Link to={`/quiensoy`}>¿Quien soy?</Link></li>
      <li><Link to={`/estYExp`}>Estudios y Experiencia</Link></li>
      <li><Link to={`/redesSociales`}>Redes sociales</Link></li>     
    </ul>
  </nav>
)


export default Menu
