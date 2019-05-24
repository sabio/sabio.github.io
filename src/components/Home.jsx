import React from 'react'
import { Link, } from 'react-router-dom'
import flechaImg from '../../public/images/flecha.png'


const Home = () => (
  <div className="componentContainer componentContainer-home">
    <div className="typewriter">
      <h1>¡Bienvenid@s a mi website!</h1>
      <h2>¡Pásele con confianza!</h2>
    </div>
    <Link to="/quiensoy">
      <img alt="arrow" src={flechaImg} />
    </Link>
  </div>
)


export default Home
