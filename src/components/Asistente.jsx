import React from 'react'
import axios from 'axios'


const Asistente = ({name,fecha,email,institucion,table,num}) => {

  let array=false
  // let table=table


if(email?email.includes("@jc"):null){
  array=true
}

  return (
    < >
    <tr  className={`${array?`warning`:'check'} ${!table?"vewTabla":"noTabla"}`}>
    <th className='ContenPregunta'>{num}</th>
    <th className='ContenPregunta'>{name}</th>
      <th className='ContenPregunta'>{email}</th>
      <th className='ContenPregunta'>{institucion}</th>
      <th className='ContenPregunta'>{fecha}</th>
    </tr>
     
    </>
  )
}

export default Asistente
