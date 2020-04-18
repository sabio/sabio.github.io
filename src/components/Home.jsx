import React from 'react'
import { FormattedMessage } from 'react-intl'; 
import Flecha from './Flecha'

const Home = (props) => (
  <div className="componentContainer componentContainer-home">
    <div className="typewriter">
      <h1>
        <FormattedMessage id="app.welcomeMessage" />
      </h1>
      <h2>
        <FormattedMessage id="app.welcomeMessage2" />
      </h2>
    </div>
    <br />
    <br />
    <div className="divFlechas">    
      <Flecha direccion='der' ruta='/quiensoy' />
    </div>
  </div>
)

export default Home;
