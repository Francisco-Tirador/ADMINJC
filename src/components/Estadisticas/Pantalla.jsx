import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Pantalla = () => {
const ModuloSlice=useSelector(m=>m.ModuloSlice)
const Asistentes=useSelector(a=>a.AsistentesSlice)
const Sesiones=useSelector(a=>a.SesionesSlice)
const UserActivo=useSelector(u=>u.UserActivo)
// console.log(Asistentes)
  const index=(id)=>{
    const asd=Sesiones.findIndex(e=>e.id==id)
    return asd
  }


  const checkVimeoVideo = async (videoId) => {
    const apiUrl = `https://api.vimeo.com/videos/${videoId}`;
    const accessToken = 'tu_token_de_acceso_a_la_api_de_vimeo';
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.status === 200) {
        console.log('El video existe y está disponible');
      } else {
        console.log('El video no existe o no está disponible');
      }
    } catch (error) {
      console.error('Error al verificar el video:', error);
    }
  };
  
  // checkVimeoVideo('777433444'); 
 let AsistentesJC=[]
Asistentes?.[0]?Asistentes?.map(aJC=>{if(aJC.email?.includes("@jc")){AsistentesJC.push(aJC.email)}}):null





  return (
    <div className='center contenVisual' >
      {
        
        UserActivo=="AMEH"?
        <>
        <iframe className='Video' src={`https://player.vimeo.com/video/777433444?autoplay=1&muted=1&loop=1`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen><p>No esta disponible la vista previa para esta cuenta</p></iframe> 
        <br />
        
        </>
        :
        <div className='ContenPantalla'>
        <iframe className='Video' src={`https://player.vimeo.com/video/${ModuloSlice?Sesiones[index(ModuloSlice)]?.canal1:"777433444"}?autoplay=1&muted=1&loop=1`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    
          </div>
      }
      {
      ModuloSlice.length?
    <div className='InfoSesion'>
      <ul>
      <li><b>{Sesiones[index(ModuloSlice)]?.conferencia}</b></li>
      <li><b>Sesión N° : {Sesiones[index(ModuloSlice)]?.id}</b></li>

      <li><b>Fecha : {Sesiones[index(ModuloSlice)]?.fecha_hora_inicio.substring(0,10)}</b></li>
      <li><b>Asistentes: {Asistentes?.length} </b></li>
      <li><b>Asistentes de JC :  {AsistentesJC.length}</b></li>
    </ul>
     
    </div>:""
}
  {
    UserActivo=="AMEH"?
    <marquee>
  <p>LA VISTA PREVIA DE LA SESIÓN NO ESTA DISPONIBLE POR EL MOMENTO PARA <b>{UserActivo}</b> </p>
  </marquee>:null
  }
    </div>
  )
}

export default Pantalla
