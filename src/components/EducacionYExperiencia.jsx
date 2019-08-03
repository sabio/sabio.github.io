import React from 'react'
import PropTypes from 'prop-types'
import cvIngles from '../../public/docs/CVEng.pdf'
import cvEspanol from '../../public/docs/CVEsp.pdf'
import Flecha from './Flecha'

const EducacionYExperiencia = ({ jsonExperiencia, jsonEducacion, jsonCertificaciones, jsonOtrasActividades }) => {
  const experiencia = jsonExperiencia.map(item => (
    <div className="position">
      <h3>
        {item.position} - {item.company}
      </h3>
      <p className="fromTo">
        Desde: {item.from}
        <br />
        Hasta: {item.to}
      </p>
      <>
        {item.tasks.map(task => (
          <>
            <p>
              {task.description}
            </p>
            {task.details && (
              <ul>
                {task.details.map(detail => (
                  <li>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </>
    </div>
  ))

  const educacion = jsonEducacion.map(item => (
    <div className="position">
      <h3>
        {item.course} - {item.school}
      </h3>
      <p className="fromTo">
        Desde: {item.from}
        <br />
        Hasta: {item.to}
      </p>
    </div>
  ))
  
  const certificaciones = jsonCertificaciones.map(item => (
    <div className="certification">
      <h3>
        {item.code} - {item.name}
      </h3>
      <p className="fromTo">
        Fecha: {item.date}
      </p>
    </div>
  ));

  const otrasActividades = jsonOtrasActividades.map(item => (
    <div className="otrasActividades">
      <p>
        {item.description}
        <br />
        <a href={item.url} target="_blank">
          {item.url}
        </a>
      </p>
    </div>
  ));

  return (
    <div className="componentContainer componentContainer-educacion-y-experiencia">
      <section>
        <h2>
          Educacion y experiencia
        </h2>
        <p>
          A continuación se muestra todo lo relacionado a mi educación y experiencia.
          Si lo que buscas en un CV tradicional pues dale clic&nbsp;
          <a href={cvEspanol} target="_blank" rel="noopener noreferrer">aqui</a>
          , y si lo quieres en inglés pues aquí está esta otra&nbsp;
          <a href={cvIngles} target="_blank" rel="noopener noreferrer">liga</a>
          .
        </p>
        <>
          <h3>Experiencia</h3>
          {experiencia}
        </>
        <br />
        <>
          <h3>Educación</h3>
          {educacion}
        </>
        <>
          <h3>Certificaciones</h3>
          {certificaciones}
        </>
        <>
          <h3>Otras actividades</h3>
          {otrasActividades}
        </>
        <div class="divFlechas">    
          <Flecha direccion='izq' ruta='/quiensoy' />
          <Flecha direccion='der' ruta='/redesSociales' />
        </div>
      </section>
    </div>
  )
}

EducacionYExperiencia.propTypes = {
  jsonExperiencia: PropTypes.node.isRequired,
  jsonEstudios: PropTypes.node.isRequired,
  jsonCertificaciones: PropTypes.node.isRequired,
  jsonOtrasActividades: PropTypes.node.isRequired,
};

export default EducacionYExperiencia
