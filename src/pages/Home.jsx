import React, { useEffect, useState } from 'react'
import Pregunta from '../Componts/Pregunta'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ServidoresHeader from '../Componts/ServidoresHeader'
import Menu from '../Componts/Menu'


const Home = () => {

//! aqui se almacenan temporarlmente las rutas

const apis=[
  {name:"Amce",getAll:"https://jc-innovation.com/ad/ModelApi.php?GetById=",remove:"https://jc-innovation.com/ad/ModelApi.php?removeById="},
  {name:"Ammr",getAll:"https://jc-innovation.com/ad/ammr/ModelApi.php?GetById=",remove:"https://jc-innovation.com/ad/ammr/ModelApi.php?removeById="},
  {name:"AMMTAC",getAll:"https://jc-innovation.com/ad/ammtac/ModelApi.php?GetById=",remove:"https://jc-innovation.com/ad/ammtac/ModelApi.php?removeById="},
  {name:"SOCMECIRPED",getAll:"https://jc-innovation.com/ad/SOCMECIRPED/ModelApi.php?GetById=",remove:"https://jc-innovation.com/ad/SOCMECIRPED/ModelApi.php?removeById="},
  {name:"Comexane",getAll:"",remove:""},
  {name:"Ameh",getAll:"",remove:""},
] 
//!


const [ComentariosDB,setComentariosDB]=useState("")//!Aqui se almacena la informacion
const [NumSesion,setNumSesion]=useState("")//! aqui se almacena el numero de la sesión
const [User,setUser]=useState(0)//! aqui se almacena el numero de la sesión


//!aqui se manda a llamar la api
const  GetAllpreguntas= ()=>{
    let url= `${apis[User].getAll}${NumSesion}`
     axios.get(url)
     .then(api=>{
      setComentariosDB(api.data.Comentarios)
    }
        )
    .catch(err=>{console.log(err)}
    )
 
  }


  //! el usseefeect que se mantiene escuchando al numero de la sesion
  useEffect(() => {
    GetAllpreguntas()
  }, [NumSesion])
  useEffect(() => {
    GetAllpreguntas()
  }, [ComentariosDB])

  const {handleSubmit,register}=useForm()  

  //!aqui creamos se guarda la informacion del form
  const  submit= data=>{
      console.log(data)
      setNumSesion(data?.IDsesion)
      console.log(NumSesion)
  }


 


  return (
    <div className='Home'>
      <Menu color={apis[User].name}/>
      <ServidoresHeader apis={apis} setUser={setUser} User={User} modulo={NumSesion}/>
      

      <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name"></label>
            <input  placeholder="Ingresa ID de la sesion" type="text" id='name' required  autoComplete='off'{...register("IDsesion")}/>
            <button >BUSCAR PREGUNTAS</button>
        </form>
        <iframe src="https://piensaendigital.es/"></iframe>
        <iframe src="https://music.youtube.com/watch?v=NorfZaIkyL8&list=RDAMVMDFhLjVAGNbA"></iframe>
        <iframe src="https://vimeo.com/829649231" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
{/* <p><a href="https://vimeo.com/829649231">ciru pe 23 mayo</a> from <a href="https://vimeo.com/user200893153">Omar</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
      {/* <h3>PREGUNTAS DE {apis[User].name} MODULO   { NumSesion}</h3> */}
   <div className='ContenP'>

    {
          ComentariosDB?.[0]?<tr className="PrincipalTR">
          <th className='ContenPregunta'>COMENTARIO</th>
            <th className='ContenPregunta'>USUARIO</th>
         
          
         
          </tr>:""
           
          
    }
   {
          ComentariosDB?.[0]?
            ComentariosDB.map(Comentario=>(
               
                 <Pregunta
                ID={Comentario?.id}
                message={Comentario.comentario}
                autor={Comentario.nombre}
                key={Comentario?.id}
                refresh={GetAllpreguntas}
                api={apis[User]?.remove}
                color={apis[User]?.name}
                />
              
              
            )):ComentariosDB?.length==0?<div className='contenidoInicio'><h2>NO EXISTE ESTE ID O INTENTA DE NUEVO</h2></div>:
            <div className='contenidoInicio'><h2>INGRESA UNA ID DE SESION PARA VISUALIZAR LAS PREGUNTAS</h2></div>
}



   </div>
    </div>
  )
}

export default Home
