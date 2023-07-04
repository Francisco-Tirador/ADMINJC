import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { resetModulo } from '../store/Slice/ModuloSlice'
import { reset } from '../store/Slice/UserActivo'
import { resetCargando } from '../store/Slice/CargandoSlice'



const ServidoresHeader = () => {
const dispach=useDispatch()
const UserActivo=useSelector(u=>u.UserActivo)
const Modulo=useSelector(u=>u.ModuloSlice)
const cargando=useSelector(c=>c.CargandoSlice)

// console.log(Modulo)


  const [Users,setUsers] =useState(null)
  const GetUsuarios=()=>{
    const url="https://jc-innovation.com/ad/model_actualizacion.php?AllUser"
    axios.get(url)
    .then(data=>{
      setUsers(data?.data?.Usuarios)
      let dataUsers=data?.data?.Usuarios
      let UserActivo=[]
      dataUsers?.map(u=>{if(u.Activo==1){UserActivo.push(u.cliente.toUpperCase())}})
      dispach(reset(UserActivo[0]))
    })
  }

  const DesactivarUsuarios=()=>{
    const url="https://jc-innovation.com/ad/model_actualizacion.php?Desactivar"
      axios.get(url)
      .then(data=>{
      })
  }
  
  const ActivarUsuario=(id)=>{
    const url="https://jc-innovation.com/ad/model_actualizacion.php?Activar="
      axios.get(url+id)
      .then(data=>{})
    }
    const valueUsuario=(valu)=>{
        let valor=valu.target.value

        if(valor!=="Sin_Usuario"){
          DesactivarUsuarios()
          ActivarUsuario(valor)
          const Index=Users.findIndex(e=>e.id==valor)
          ActivarUsuario(valor)
           let resultF=Users[Index]?.cliente.toUpperCase()
           dispach(resetCargando("true"))
           const retardo = setTimeout(() => {
             dispach(reset(resultF))
             
           }, 2000);
           dispach(resetModulo(""))
           return () => clearTimeout(retardo); 
      
         }
      }
      useEffect(() => {
        GetUsuarios()
       }, [])


  return (
    <div className={`ContenHomeHeader ${UserActivo} `}>
        
          <h2>{UserActivo}</h2> 
        
      
      <select className='SelectPrincipal Select2' onChange={valueUsuario}>
        <option value="Sin_Usuario">Servidor</option>
     {
      Users?.map(Option=>(
        <option key={Option.id} selected={Option.Activo==1?true:false} value={Option.id}>{Option.cliente.toUpperCase()}</option>
      ))
     }
      </select>
    </div>
  )
}

export default ServidoresHeader
