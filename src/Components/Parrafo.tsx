import React from 'react'

const Nota = ({ nota }) => {
    return (
      nota.map((item, index) => {
        return <p className = "mb-2 text-justify" key={ index } >{ item }</p>
      })
    )
}

export default Nota
