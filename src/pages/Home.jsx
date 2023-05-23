import React, { useEffect, useState } from 'react'
import Pregunta from '../Componts/Pregunta'
import axios from 'axios'
import { useForm } from 'react-hook-form'


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

// const asd=

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

// const bucle=()=>{
//   GetAllpreguntas()
// }


  const {handleSubmit,register}=useForm()  


  //!aqui creamos se guarda la informacion del form
  const  submit= data=>{
      console.log(data)
      setNumSesion(data?.IDsesion)
        //  GetAllpreguntas()
      console.log(NumSesion)
  }


  const INDEX=[]
  const RetornarIndex=apis.map(tar=>{INDEX.push(tar.name)})
  

  const valueUsuario=(valu)=>{
    let valor=valu.target.value
   let art= INDEX.indexOf(valor)
     setUser(art)
    console.log(valu)
  }




// console.log(INDEX)

  return (
    <div >
      <select name="Amce" id="Acme" onChange={valueUsuario}>
     {
      INDEX.map(Option=>(
        <option key={Option} value={Option}>{Option}</option>
      ))
     }
      </select>

      <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name"></label>
            <input  placeholder="Ingresa ID de la sesion" type="text" id='name' required  autoComplete='off'{...register("IDsesion")}/>
            <button >BUSCAR PREGUNTAS</button>
        </form>
      <h3>PREGUNTAS DE {apis[User].name} MODULO   { NumSesion}</h3>
   <div className='Conten'>

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
