import React from 'react'
import axios from 'axios'


const Pregunta = ({ID,message,autor,refresh,api,color}) => {

  let array=["no se escucha","pesimo","pesima","mal","mala","bajito","no se entiende","problemas","no puedo entrar", "no abre","perdio","pierde","no puedo ver","no puedo entrar","fallando",
"no puedo","no se ve","no hay sonido","no tengo audio","perdió la señal"
]
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
  console.log(api)
  let url=`${api}${ID}`
  axios.get(url)
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
