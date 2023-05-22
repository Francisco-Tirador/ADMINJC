import React, { useEffect, useState } from 'react'
import Pregunta from '../Componts/Pregunta'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const Home = () => {

const [ComentariosDB,setComentariosDB]=useState("")
const [NumSesion,setNumSesion]=useState("")


const  GetAllpreguntas= ()=>{
    let url= `https://jc-innovation.com/ad/ModelApi.php?GetById=${NumSesion}`
     axios.get(url)
     .then(api=>{
      console.log(api),
      setComentariosDB(api.data.Comentarios),
      console.log(ComentariosDB)
    }
        )
    .catch(err=>{console.log(err)
      setComentariosDB(404)}
    )
  }

  useEffect(() => {
    GetAllpreguntas()
  }, [NumSesion])

  const {handleSubmit,register}=useForm()  

  const  submit= data=>{
      console.log(data)
      setNumSesion(data?.IDsesion)
      console.log(NumSesion)
  }


  const removeComentario=(ad)=>{
    console.log("hola me removere"+ad)
  }

  return (
    <div >
      <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name"></label>
            <input  placeholder="Ingresa ID de la sesion" type="text" id='name' required  autoComplete='off'{...register("IDsesion")}/>
            <button >BUSCAR PREGUNTAS</button>
        </form>
      <h3>PREGUNTAS DE AMCE MODULO {NumSesion}</h3>
   <div className='Conten'>
   <tr>
   {
          ComentariosDB?.[0]?
            ComentariosDB.map(Comentario=>(
               
                 <Pregunta
                ID={Comentario?.id}
                message={Comentario.comentario}
                autor={Comentario.nombre}
                key={Comentario?.id}
                remove={removeComentario}
                refresh={GetAllpreguntas}
                />
              
              
            )):ComentariosDB?.length==0?<div className='contenidoInicio'><h2>NO EXISTE ESTE ID O INTENTA DE NUEVO</h2></div>:
            <div className='contenidoInicio'><h2>INGRESA UNA ID DE SESION PARA VISUALIZAR LAS PREGUNTAS</h2></div>
}

</tr>

   </div>
    </div>
  )
}

export default Home
