import React, { useEffect, useState } from 'react'
import Pregunta from '../Componts/Pregunta'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const Home = () => {

const [ComentariosDB,setComentariosDB]=useState("")
let NumIdSesion="0"

const  GetAllpreguntas= ()=>{
    let url= `https://jc-innovation.com/ad/ModelApi.php?GetById=${NumIdSesion}`
     axios.get(url)
     .then(api=>{
      console.log(api?.data?.Comentarios),
      setComentariosDB( api?.data?.Comentarios)
      console.log(ComentariosDB)
    }
        )
    .catch(err=>{console.log(err)
      setComentariosDB(404)}
    )
  }
  // GetAllpreguntas()
  useEffect(() => {
    // GetAllpreguntas()
    // console.log("Yo estoy en el efect",ComentariosDB)
  }, [])

  const {handleSubmit,register}=useForm()  

  const submit=data=>{
      console.log(data)
      NumIdSesion=data?.IDsesion
      GetAllpreguntas()
   
  }

  return (
    <div >
      <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name"></label>
            <input  placeholder="Enter your name" type="text" id='name' required  autoComplete='off'{...register("IDsesion")}/>
            <button onClick={submit}>BUSCAR PREGUNTAS</button>
        </form>
      <h3>PREGUNTAS DE AMCE MODULO {NumIdSesion}</h3>
   <div className='Conten'>
   {
          ComentariosDB?.[0]?
            ComentariosDB.map(Comentario=>(
                <Pregunta
                id={Comentario?.id}
                message={Comentario.comentario}
                key={Comentario?.id}
                />
            )):ComentariosDB==undefined?<div className='contenidoInicio'><h2>NO EXISTE ESTE ID O INTENTA DE NUEVO</h2></div>:
            <div className='contenidoInicio'><h2>INGRESA UNA ID DE SESION PARA VISUALIZAR LAS PREGUNTAS</h2></div>
}

   </div>
    </div>
  )
}

export default Home
