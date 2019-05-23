import React from 'react'


const EstudiosYExperiencia = (props) => {

  const dataFromJSON = props.jsonExperiencia.map((item, index)=>{
    return (
      <div className="position">
        <h3>{item.position} - {item.company}</h3>
        <p className="fromTo">
          From: {item.from} 
          <br />
          To: {item.to}
        </p>
        <>
        {item.tasks.map((task) => {
          return (
            <>
              <p>
                {task.description}
              </p>
            
              {task.details && (
                <ul>
                  {task.details.map(detail => {
                    return <li>{detail}</li>
                  })}
                </ul>
              )}
            
              
            </>
          )
        })}
        </>
      </div>
    )
  })

  return(
    <div className="componentContainer componentContainer-estudios-y-experiencia">
      <section>
        <h2>
          Estudios y experiencia
        </h2>
        <p>
          A continuación se muestra mi experiencia todo lo relacionado a mis estudios y experiencia esta en mi CV
          <a href="../../public/docs/CVEsp.pdf" target="_blank">aqui</a>
          , y si lo que les interesa es en inglés pues aquí esta esta otra
          <a href="../../public/docs/CVEng.pdf" target="_blank">liga</a>
          .
        </p>
        <>
          {dataFromJSON}
        </>
      </section>
    </div>
  )
}

export default EstudiosYExperiencia
