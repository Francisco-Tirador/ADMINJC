import React, { useState } from 'react'
import axios from 'axios'


const Pregunta = ({ID,message,autor,fecha,GetAllpreguntas,num}) => {

const [Sonado,setSonado]=useState(false)

  let array=["no se escucha","pesimo","pesima","mal","mala","bajito","no se entiende","problemas","no puedo entrar", "no abre","perdio","pierde","no puedo ver","no puedo entrar","fallando",
"no puedo","no se ve","no hay sonido","no tengo audio","perdió la señal"
]
  let ValidacionComentario=true

const validacionContenido=()=>{
 for(let i=0;i<array.length;i++){
  let minusculas=message?.toLowerCase()
  const validacion=minusculas?.includes(array[i])
  if(validacion){
    ValidacionComentario=false
  }
 }
}

const removes=()=>{
  let url=`https://jc-innovation.com/ad/ModelApi.php?removeById=${ID}`
  axios.get(url)
  .then(api=>{ 
    console.log(api)
    GetAllpreguntas()
  }
      )
  .catch(err=>{console.log(err)}
  )
}

const Alert=()=>{
  let sound=new Audio("https://jc-innovation.com/ad/assets/sounds/Alert.mp3")
  sound.play()
  setSonado(true)
}

const sub=()=>{
if(!ValidacionComentario&&!Sonado){
  Alert()
}
}
validacionContenido()
sub()
// console.log(fecha)

let i=1
  return (
    < >
    <tr className={!ValidacionComentario?`warning`:'check'}>
    <td className='ContenPregunta NUM'>{num}</td>
    <td className='ContenPregunta'>{message}</td>
      <td className='ContenPregunta'>{autor}</td>
      <td className='ContenPregunta'>{fecha}</td>
   <td>
    
   <button onClick={removes} className='btnEliminar'><img src="https://cdn-icons-png.flaticon.com/512/8568/8568248.png" alt="" />ELIMINAR</button>
   </td>
   
    </tr>
     
    </>
  )
}

export default Pregunta
