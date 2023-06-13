import React from 'react'
import { useSelector } from 'react-redux'


const Pantalla = () => {
const ModuloSlice=useSelector(m=>m.ModuloSlice)
const Asistentes=useSelector(a=>a.AsistentesSlice)
const Sesiones=useSelector(a=>a.SesionesSlice)
// console.log(Sesion)
  const index=(id)=>{
    const asd=Sesiones.findIndex(e=>e.id==id)
    return asd
  }
 

 let AsistentesJC=[]
Asistentes?Asistentes?.map(aJC=>{if(aJC.email.includes("@jc")){AsistentesJC.push(aJC.email)}}):null

 // console.log(AsistentesJC)
  return (
    <div className='center contenVisual' >
      <div className='ContenPantalla'>
    <iframe className='Video' src={`https://player.vimeo.com/video/${ModuloSlice?Sesiones[index(ModuloSlice)]?.canal1:"777433444"}?autoplay=1&muted=1&loop=1`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

      </div>
      {
      ModuloSlice?
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
    </div>
  )
}

export default Pantalla
