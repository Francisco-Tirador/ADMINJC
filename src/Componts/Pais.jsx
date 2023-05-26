import React, { useState } from 'react'
import axios from 'axios'


const Pais= ({total,Pais}) => {

const [pais,setPais]=useState("")


const GetPais=()=>{
  let url=`https://jc-innovation.com/ad/SOCMECIRPED/ModelApi.php?PaisesById=${Pais}`
  axios.get(url)
  .then(Pais=>{
    setPais(Pais?.data?.Pais[0]?.pais)
  })

}

GetPais()

  return (
    < >
    <tr  className={'check'}>
    <th className='ContenPregunta'>{pais}</th>
      <th className='ContenPregunta'>{total}</th>
    </tr>
     
    </>
  )
}

export default Pais
