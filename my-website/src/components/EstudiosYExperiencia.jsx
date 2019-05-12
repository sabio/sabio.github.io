import React from 'react'


const EstudiosYExperiencia = (props) => {

  const dataFromJSON = props.jsonExperiencia.map((elem, index)=>{
    return <p>{index} - {elem.position}</p>
  })

  return(
    <div className="componentContainer componentContainer-estudios-y-experiencia">
      <section>
        <h2>
          Estudios y experiencia
        </h2>
        <p>
          Pues todo lo relacionado a mis estudios y experiencia esta en mi CV
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
