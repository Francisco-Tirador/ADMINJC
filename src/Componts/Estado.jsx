import React from 'react'
import axios from 'axios'


const Asistente = ({Usuario,name,fecha,email,institucion}) => {

  let array=false


if(email.includes("@jc")){
  array=true
}

  return (
    < >
    <tr  className={array?`warning`:'check'}>
    <th className='ContenPregunta'>{name}</th>
      <th className='ContenPregunta'>{email}</th>
      <th className='ContenPregunta'>{institucion}</th>
      <th className='ContenPregunta'>{fecha}</th>
    </tr>
     
    </>
  )
}

export default Asistente
