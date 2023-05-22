import React from 'react'
import axios from 'axios'


const Pregunta = ({ID,message,autor,refresh}) => {

  let array=["no se escucha","pesimo","pesima","mal","mala"]
  let asd=true

const validacionContenido=(messsage)=>{
 for(let i=0;i<array.length;i++){
  let minusculas=message.toLowerCase()
  const validacion=minusculas.includes(array[i])
  if(validacion){
    asd=false
  }
 }
}


const removes=()=>{
  let url=`https://jc-innovation.com/ad/ModelApi.php?removeById=${ID}`
  axios.get(url,"sad")
  .then(api=>{
    console.log(api)
    refresh()
  }
      )
  .catch(err=>{console.log(err)}
  )
}




validacionContenido(message)

  return (
    < >
    <tr className={!asd?`warning`:'check'}>
    <th className='ContenPregunta'>{message}</th>
      <th className='ContenPregunta'>{autor}</th>
      <button onClick={removes} >ELIMINAR</button>
    </tr>
     
    </>
  )
}

export default Pregunta
