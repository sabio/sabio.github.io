import React from 'react'
import PropTypes from 'prop-types'
import cvIngles from '../../public/docs/CVEng.pdf'
import cvEspanol from '../../public/docs/CVEsp.pdf'


const EstudiosYExperiencia = ({ jsonExperiencia, jsonEstudios, }) => {
  const experiencia = jsonExperiencia.map(item => (
    <div className="position">
      <h3>
        {item.position}
        -
        {item.company}
      </h3>
      <p className="fromTo">
        Desde:
        {item.from}
        <br />
        Hasta:
        {item.to}
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

  const estudios = jsonEstudios.map(item => (
    <div className="position">
      <h3>
        {item.course}
        -
        {item.school}
      </h3>
      <p className="fromTo">
        Desde:
        {item.from}
        <br />
        Hasta:
        {item.to}
      </p>
    </div>
  ))

  return (
    <div className="componentContainer componentContainer-estudios-y-experiencia">
      <section>
        <h2>
          Estudios y experiencia
        </h2>
        <p>
          A continuación se muestra todo lo relacionado a mis estudios y experiencia.
          Si lo que buscas en un CV tradicional pues dale clic&nbsp;
          <a href={cvEspanol} target="_blank">aqui</a>
          , y si lo quieres en inglés pues aquí está esta otra&nbsp;
          <a href={cvIngles} target="_blank">liga</a>
          .
        </p>
        <>
          <h3>Experiencia</h3>
          {experiencia}
        </>
        <br />
        <>
          <h3>Estudios</h3>
          {estudios}
        </>
      </section>
    </div>
  )
}

EstudiosYExperiencia.propTypes = {
  jsonExperiencia: PropTypes.node.isRequired,
  jsonEstudios: PropTypes.node.isRequired,
};

export default EstudiosYExperiencia
