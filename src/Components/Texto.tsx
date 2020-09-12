import React from 'react'

const Texto = ({ texto, }) => {
    return (
      <div>
        {
          texto.map(({ cita, contenido}, index) => {
            return <p className = "text-justify m-3" key={ cita }>
              <strong className = "text-teal-400">{ cita }</strong> { contenido }
            </p>
          })
        }
      </div>
    )
}

export default Texto
