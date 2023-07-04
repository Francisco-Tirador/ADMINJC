import React, { useEffect, useState } from 'react'
import Pregunta from './Pregunta'
import Asistente from './Asistente'
import Pais from './Pais'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import BotonReporte from './Estadisticas/BotonReporte'
import { resetAsistentes } from '../store/Slice/AsistentesSlice'

const Tablas = ({ ComentariosDB,GetAllpreguntas }) => {
  const ModuloSlice = useSelector(m => m.ModuloSlice)
  const UserActivo = useSelector(m => m.UserActivo)
  const AsistentesSlice=useSelector(a=>a.AsistentesSlice)
  const dispach=useDispatch()
  // console.log(ComentariosDB)

  const [Paises, setPaises] = useState(false)
  const [Asistentes, setAsistentes] = useState(null)
  const [table, settable] = useState(false)



  const getAsistentes = () => {
    let asistentes = `https://jc-innovation.com/ad/ModelApi.php?asistentes=`
    axios.get(asistentes + ModuloSlice)
      .then(api => {
        setAsistentes(api.data.Asistentes)
        dispach(resetAsistentes(api?.data?.Asistentes))
      }
      )
      .catch(err => { }
      )

  }

  const getPaises = () => {
    let Paises = `https://jc-innovation.com/ad/ModelApi.php?Paises=${ModuloSlice}`
    axios.get(Paises)
      .then(api => {
        setPaises(api?.data?.Paises)
      }
      )
      .catch(err => { }
      )



  }

  const ocultarTabla = () => {
    if (!table) {
      settable(true)
    } else {
      settable(false)
    }
  }

  const asis = () => {
    getAsistentes()
    getPaises()
  }
  useEffect(() => {
    getAsistentes()
    getPaises()
  }, [ModuloSlice])

 
  let i=1
  let a=1
  let p=1
// console.log(Asistentes)
const nameReporte=Asistentes?.[0]?`ESTADÍSTICAS ${Asistentes?.[0].fecha?.substring(0,10)} ${UserActivo} `:"REPORTE"

  return (
    <>
      {
        ComentariosDB ?
          <>
         <div className='ContenBtnTablas'>
        <span>
         <button className='btnFlotante btn' onClick={ocultarTabla}>{table ? "OCULTAR ASISTENTES " : "VER ASISTENTES"}</button>
                    <button className='btnFlotante btn' onClick={asis}>Actualizar </button>
        </span>
            <div className='Lefth'><BotonReporte tableData="tblData" fileName={nameReporte}/></div>
         </div>
            <table id="tblData">
              {
                ComentariosDB?.[0] ? 
                <tr className="PrincipalTR">
                  <th className='ContenPregunta NUM'> # </th>
                  <th className='ContenPregunta'>Pregunta</th>
                  <th className='ContenPregunta'>Realizó</th>
                  <th className='ContenPregunta'>Hora</th>
                </tr> : ""
              }
              {
                ComentariosDB?.[0] ?
                  ComentariosDB.map(Comentario => (
                    <Pregunta
                      num={i++}
                      ID={Comentario?.id}
                      message={Comentario.comentario}
                      autor={Comentario.nombre}
                      key={Comentario?.id}
                      fecha={Comentario?.fecha}
                      GetAllpreguntas={GetAllpreguntas}
                    />
                  )) : ""
              }

              {
                ComentariosDB?.[0] ?
                  <>
                    
                    <tr id=''><th>Asistentes | Total: {Asistentes ? Asistentes.length : 0}</th></tr>
                    <tr className="PrincipalTR">

                      <th className='ContenPregunta'> # </th>
                      <th className='ContenPregunta'>Nombre</th>
                      <th className='ContenPregunta'>Email</th>
                      <th className='ContenPregunta'>Institución</th>
                      <th className='ContenPregunta'>Conexion</th>
                    </tr>

                  </>
                  : ""
              }

              {
                Asistentes?.[0] ?
                  Asistentes.map(Comentario => (
                    <Asistente
                    num={a++}
                      key={Comentario.id}
                      name={Comentario.nombre}
                      email={Comentario.email}
                      fecha={Comentario.fecha}
                      institucion={Comentario.institucion}
                      table={table}
                    />
                  )) : null}

              {
                ComentariosDB?.[0] ?
                  <>

                    <tr className="PrincipalTR">
                      <th className='ContenPregunta'> # </th>
                      <th className='ContenPregunta'>Pais</th>
                      <th className='ContenPregunta'>Total</th>
                    </tr>
                  </>
                  : ""
              }
              {
                Paises?.[0] ?
                  Paises.map(Comentario => (
                    <Pais
                    num={p++}
                      key={Comentario.id}
                      Pais={Comentario.pais}
                      total={Comentario.total}
                    />
                  )) : null}




            </table></> : ""

      }
    </>
  )
}

export default Tablas
