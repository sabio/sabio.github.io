import React from 'react'
import flechaIzquierdaImg from '../../public/images/flechaIzquierda.png'
import flechaDerechaImg from '../../public/images/flechaDerecha.png'


const Flecha = ({ direccion = 'der' }) => {

  let imagen

  if(direccion === 'der'){
    imagen = flechaDerechaImg 
  }
  else if(direccion === 'izq'){
    imagen = flechaIzquierdaImg 
  }

  return (
    <img alt="arrow" src={imagen} />
  )
}

export default Flecha