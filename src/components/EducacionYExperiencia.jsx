import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'; 
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
      <FormattedMessage id="app.from" />: {item.from}
        <br />
        <FormattedMessage id="app.to" />: {item.to}
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
      <FormattedMessage id="app.from" />: {item.from}
        <br />
        <FormattedMessage id="app.to" />: {item.to}
      </p>
    </div>
  ))
  
  const certificaciones = jsonCertificaciones.map(item => (
    <div className="certification">
      <h3>
        {item.code} - {item.name}
      </h3>
      <p className="fromTo">
      <FormattedMessage id="app.date" />: {item.date}
      </p>
    </div>
  ));

  const otrasActividades = jsonOtrasActividades.map(item => (
    <div className="otrasActividades">
      <p>
        {item.description}
        <br />
        <a href={item.url} target="_blank">
          Google play app page 
        </a>
      </p>
    </div>
  ));

  return (
    <div className="componentContainer componentContainer-educacion-y-experiencia">
      <section>
        <h2>
          <FormattedMessage id="app.educationAndExperience" />
        </h2>
        <p>
          <FormattedMessage id="app.eduandexp1" />
          <a href={cvEspanol} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="app.here" />
          </a>
          <FormattedMessage id="app.eduandexp2" />
          <a href={cvIngles} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="app.here" />
          </a>.
        </p>
        <>
          <h3><FormattedMessage id="app.experience" /></h3>
          {experiencia}
        </>
        <br />
        <>
          <h3><FormattedMessage id="app.education" /></h3>
          {educacion}
        </>
        <>
          <h3><FormattedMessage id="app.certifications" /></h3>
          {certificaciones}
        </>
        <>
          <h3><FormattedMessage id="app.otheractivities" /></h3>
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
