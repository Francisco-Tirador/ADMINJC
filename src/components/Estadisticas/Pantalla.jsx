import React from 'react'
import { useSelector } from 'react-redux'


const Pantalla = ({Sesion}) => {
const ModuloSlice=useSelector(m=>m.ModuloSlice)

  const index=(id)=>{
    const asd=Sesion.findIndex(e=>e.id==id)
    return asd
  }
 
  return (
    <div className='center' >
      <div>
    <iframe className='Video' src={`https://player.vimeo.com/video/${ModuloSlice?Sesion[index(ModuloSlice)]?.canal1:"777433444"}?autoplay=1&muted=1&loop=1`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

      </div>
    <div className='InfoSesion'>
     {
      ModuloSlice? <ul>
      <li><b>{Sesion[index(ModuloSlice)]?.conferencia}</b></li>
      <li><b>Asistentes: </b></li>
      <li><b>Asistentes de JC :</b></li>
    </ul>:""
     }
    </div>
    </div>
  )
}

export default Pantalla
