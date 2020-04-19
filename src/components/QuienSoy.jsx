import React from 'react'
import { FormattedMessage } from 'react-intl'; 
import miImagen from '../../public/images/perfil.jpg'
import Flecha from './Flecha'

const QuienSoy = () => (
  <div className="componentContainer componentContainer-quiensoy">
    <section>
      <h2>
      <FormattedMessage id="app.whoami" />
      </h2>
      <p>
        <img alt="Me" src={miImagen} />
        <FormattedMessage id="app.whoamipart1" />
        <a target="_blank" rel="noopener noreferrer" href="https://www.gnu.org/philosophy/javascript-trap.en.html">
        <FormattedMessage id="app.whoamipart2" />
        </a>
        <FormattedMessage id="app.whoamipart3" />
      </p>
      <p>
        <FormattedMessage id="app.whoamipart4" />
      </p>
      <div className="divFlechas">    
        <Flecha direccion='izq' ruta='/' />
        <Flecha direccion='der' ruta='/estYExp' />
      </div>
    </section>
  </div>
)

export default QuienSoy
