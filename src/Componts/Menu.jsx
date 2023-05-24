import React from 'react'

const Menu = ({color}) => {
    console.log(color)
  return (
    <div className={'Menu '+color}>
        <img className='Logo' src="data:image/png;base64,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" alt="" />
        <ul>
            <li className='active'>Preguntas</li>
            <li>Sacar reporte </li>
            <li>Hacer prueba</li>
            <li>Ver pagina</li>
            <li>Ver en vivo</li>
            <li>Administrar temporales</li>
        </ul>
    </div>
  )
}

export default Menu
