import React from 'react'
import Flecha from './Flecha'

const Home = () => (
  <div className="componentContainer componentContainer-home">
    <div className="typewriter">
      <h1>¡Bienvenid@s a mi website!</h1>
      <h2>¡Pásele con confianza!</h2>
    </div>
    <br />
    <br />
    <div className="divFlechas">    
        <Flecha direccion='der' ruta='/quiensoy' />
      </div>
  </div>
)


export default Home
