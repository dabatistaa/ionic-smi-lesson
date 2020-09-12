import React from 'react'

import Texto from './Texto'
import Nota from './Parrafo'

const Pregunta = ({ preguntas }) => {
  return (
      <div>
        {
          preguntas.map(({ subtitulo, pregunta, textos, notas }, index) => {
            return (
              <div key={index}>
                { String( subtitulo ) !== 'null' ? <strong className = "text-blue-400 underline">{subtitulo}</strong> : null }
                <h4 className = "text-base font-bold mb-2 mt-1 text-justify text-green-700">{`${ index + 1 }.- ${ pregunta } ` }</h4>
                <Texto texto={ textos}/>
                {notas.length > 0 ? <strong className= "text-blue-400">Nota:</strong> : null }
                <Nota nota={ notas }/>
              </div>
            )
          })
        }
      </div>
  );
}

export default Pregunta
