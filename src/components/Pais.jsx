import React from 'react'


const Pais= ({total,Pais,num}) => {
  return (
    < >
    <tr  className={'check'}>
    <th className='ContenPregunta'>{num}</th>
    <th className='ContenPregunta'>{Pais}</th>
      <th className='ContenPregunta'>{total}</th>
    </tr>
     
    </>
  )
}

export default Pais
