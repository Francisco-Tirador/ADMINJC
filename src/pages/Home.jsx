import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ServidoresHeader from '../components/ServidoresHeader'
import Menu from '../components/Menu'
import Tablas from '../components/Tablas'
import Pantalla from '../components/Estadisticas/Pantalla'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { resetModulo } from '../store/Slice/ModuloSlice'
import  { resetSesiones } from '../store/Slice/SesionesSlice'

const Home = () => {
  //! Axios
  const UserActivo = useSelector(u => u?.UserActivo)
  const ModuloSlice = useSelector(u => u?.ModuloSlice)
  const Sesiones=useSelector(s=>s.SesionesSlice)
  const dispach = useDispatch()
  // console.log(ModuloSlice)



  const [ComentariosDB, setComentariosDB] = useState(null)//!Aqui se almacena la informacion


  //!aqui se manda a llamar la api
  const GetAllpreguntas = () => {
    let url = `https://jc-innovation.com/ad/ModelApi.php?GetById=${ModuloSlice}`
    axios.get(url)
      .then(api => {
        setComentariosDB(api.data.Comentarios)
      }
      )
      .catch(err => { }
      )

  }
  const GetSesion = () => {
    let url = `https://jc-innovation.com/ad/ModelApi.php?sesion`
    axios.get(url)
      .then(api => {
        dispach(resetSesiones(api?.data?.Sesion))
      }
      )
      .catch(err => { }
      )
  }
  //! el usseefeect que se mantiene escuchando al numero de la sesion

  useEffect(() => {
    GetAllpreguntas();
  
    const interval = setInterval(() => {
      GetAllpreguntas();
      console.log("Se llamaron las preguntas de la sesión " +ModuloSlice)
    }, 1500);
  
    return () => clearInterval(interval);
  }, [ModuloSlice]);


  useEffect(() => {
    GetSesion()
  }, [UserActivo])

  //!aqui creamos se guarda la informacion del Select
  const valueUsuario = (valu) => {
    let valor = valu.target.value
    dispach(resetModulo(valor))
  }


  return (
    <div className='Home'>
      <ServidoresHeader />
      <Menu/>
      <select className='SelectPrincipal' onChange={valueUsuario}  required>
        <option value="" >Escoge una Sesion</option>
        {
          Sesiones!="a" ? Sesiones.map(Option => (
            <option key={Option.id} value={Option.id}>{`${Option.conferencia} ID :${Option.id}`}</option>
          )) : null
        }
      </select>
      <Pantalla  />


      <div className='ContenP'>
        <Tablas ComentariosDB={ComentariosDB} GetAllpreguntas={GetAllpreguntas} />
        {
          !ModuloSlice?.[0] ?
           <div className='PrincipalTR'>
            <h2> Selecciona una sesión para poder visualizar las preguntas</h2>
          </div> : ""
        }
      </div>

    </div>
  )
}

export default Home
