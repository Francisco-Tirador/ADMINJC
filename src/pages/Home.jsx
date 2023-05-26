import React, { useEffect, useState } from 'react'
import Pregunta from '../Componts/Pregunta'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ServidoresHeader from '../Componts/ServidoresHeader'
import Menu from '../Componts/Menu'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Asistente from '../Componts/Asistente'
import Pais from '../Componts/Pais'
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


const [ComentariosDB,setComentariosDB]=useState(false)//!Aqui se almacena la informacion
const [NumSesion,setNumSesion]=useState("")//! aqui se almacena el numero de la sesión
const [User,setUser]=useState(0)//! aqui se almacena el numero de la sesión
const [Asistentes,setAsistentes]=useState("")
const [Paises,setPaises]=useState("")
const [Refresh,setRefresh]=useState(false)






//!aqui se manda a llamar la api
const  GetAllpreguntas= ()=>{
    let url= `${apis[User].getAll}${NumSesion}`
     axios.get(url)
     .then(api=>{
      setComentariosDB(api.data.Comentarios)
      
    }
        )
    .catch(err=>{}
    )

    let asistentes=`https://jc-innovation.com/ad/${apis[User].name}/ModelApi.php?asistentes=`
    axios.get(asistentes+NumSesion)
        .then(api=>{
         setAsistentes(api.data.Asistentes)
         console.log("Recargue asistentes")
       }
           )
       .catch(err=>{}
       )

       let Paises=`https://jc-innovation.com/ad/${apis[User].name}/ModelApi.php?Paises=${NumSesion}`
    axios.get(Paises)
        .then(api=>{
         setPaises(api.data.Paises)
       }
           )
       .catch(err=>{}
       )
  
    
  
  }
//!---------------------------------------

const Recarga=()=>{
if(ComentariosDB){
  let url= `https://jc-innovation.com/ad/${apis[User].name}/ModelApi.php?Recarga=${NumSesion}`
  axios.get(url)
  .then(api=>{
  //  console.log("No hay cambios",api?.data?.Pais[0]?.total)
   if(ComentariosDB.length!=api?.data?.Pais[0]?.total){
    console.log(Refresh,api?.data?.Pais[0]?.total)
   GetAllpreguntas()
   console.log("Recargue todo bro")
   }
   console.log(Refresh)
   console.log("AUN no recargo",ComentariosDB.length,api?.data?.Pais[0]?.total)
   setRefresh(api?.data?.Pais[0]?.total)
  })
  
}

}

  
  //! el usseefeect que se mantiene escuchando al numero de la sesion
  useEffect(() => {
    GetAllpreguntas()
    
  }, [NumSesion])

  useEffect(() => {
    GetAllpreguntas()
    // Recarga()
  }, [ComentariosDB])

  const {handleSubmit,register}=useForm()  

  //!aqui creamos se guarda la informacion del form
  const  submit= data=>{
      setNumSesion(data?.IDsesion)
      // GetAllpreguntas()
  }


  let NameEstadisticas=()=>{
   let hora=Asistentes?Asistentes[0]?.visto_ultimavez.substring(0,10):""
    let na=`Estadisticas ${hora} ${apis[User].name} `
    return na
  }


  const contador=()=>{
    // console.log("soy un bucle")
    // GetAllpreguntas()
  }
  // setInterval(contador,10000);
  
  return (
    <div className='Home'>
      <Menu color={apis[User].name}/>
      <ServidoresHeader apis={apis} setUser={setUser} User={User} modulo={NumSesion} Asistentes={Asistentes}/>
      

      <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name"></label>
            <input  placeholder="Ingresa ID de la sesion" type="text" id='name' required  autoComplete='off'{...register("IDsesion")}/>
            <button >BUSCAR PREGUNTAS</button>
        </form>
        {/* <iframe src="https://player.vimeo.com/video/829649231?h=9d7de133e1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}


  

<ReactHTMLTableToExcel
id="ExportarExcel"
className="btn"
table="tblData"
filename={NameEstadisticas()}
sheet="Estadisticas"
buttonText="Exportar excel"
/>

   <div className='ContenP'>
 
    <table id="tblData">

    {
          ComentariosDB?.[0]?<tr className="PrincipalTR">
          <th className='ContenPregunta'>Pregunta</th>
            <th className='ContenPregunta'>Realizó</th>
            <th className='ContenPregunta'>Hora</th>
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
                fecha={Comentario.fecha_hora}
                />
            )):ComentariosDB?.length==0?<div className='contenidoInicio'><h2>NO EXISTE ESTE ID O INTENTA DE NUEVO</h2></div>:
            <div className='contenidoInicio'><h2>INGRESA UNA ID DE SESION PARA VISUALIZAR LAS PREGUNTAS</h2></div>
}

{
          ComentariosDB?.[0]?
        <>
        <br /><br />
       <tr><th>Asistentes | Total: {Asistentes?Asistentes.length:0}</th></tr>
          <tr className="PrincipalTR">
           
          <th className='ContenPregunta'>Nombre</th>
            <th className='ContenPregunta'>Email</th>
            <th className='ContenPregunta'>Institución</th>
            <th className='ContenPregunta'>conexion</th>
          </tr>
          </>
          :""
    }

{
          Asistentes?.[0]?
          Asistentes.map(Comentario=>(
                 <Asistente
                key={Comentario.id}
                Usuario={Comentario.visto_ultimavez}
                name={Comentario.nombre}
                email={Comentario.email}
                fecha={Comentario.fecha_hora_inicio}
                institucion={Comentario.institucion}
                />
            )):null}

{
          ComentariosDB?.[0]?
        <>
        <br /><br />
          <tr className="PrincipalTR">
           
          <th className='ContenPregunta'>Pais</th>
            <th className='ContenPregunta'>Total</th>

          </tr>
          </>
          :""
    }
{
          Asistentes?.[0]?
          Paises.map(Comentario=>(
                 <Pais
                key={Comentario.id}
                Pais={Comentario.paises}
                total={Comentario.total}
                />
            )):null}




</table>

   </div>
    </div>
  )
}

export default Home
