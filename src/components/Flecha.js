import React from 'react'
import { Link } from 'react-router-dom'
import flechaDerechaImg from '../../public/images/flechaDerecha.png'
import flechaIzquierdaImg from '../../public/images/flechaIzquierda.png'

const Flecha = ({ direccion, ruta }) => {
  const flechaImg = direccion === 'der' ? flechaDerechaImg : flechaIzquierdaImg

  return (
    <Link to={ruta}>
      <img className="flecha" alt="arrow" src={flechaImg} />
    </Link>
  )
}

export default Flecha