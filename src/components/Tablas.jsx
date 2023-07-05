import React, { useEffect, useState } from 'react';
import Pregunta from './Pregunta';
import Asistente from './Asistente';
import Pais from './Pais';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BotonReporte from './Estadisticas/BotonReporte';
import { resetAsistentes } from '../store/Slice/AsistentesSlice';

const Tablas = ({ ComentariosDB, GetAllpreguntas }) => {
  const ModuloSlice = useSelector(m => m.ModuloSlice);
  const UserActivo = useSelector(m => m.UserActivo);
  const AsistentesSlice = useSelector(a => a.AsistentesSlice);
  const dispatch = useDispatch();

  const [Paises, setPaises] = useState(false);
  const [Asistentes, setAsistentes] = useState(null);
  const [table, setTable] = useState(false);

  const getAsistentes = () => {
    let asistentes = `https://jc-innovation.com/ad/ModelApi.php?asistentes=`;
    axios.get(asistentes + ModuloSlice)
      .then(api => {
        setAsistentes(api.data.Asistentes);
        dispatch(resetAsistentes(api?.data?.Asistentes));
      })
      .catch(err => {})
  };

  const getPaises = () => {
    let paises = `https://jc-innovation.com/ad/ModelApi.php?Paises=${ModuloSlice}`;
    axios.get(paises)
      .then(api => {
        setPaises(api?.data?.Paises);
      })
      .catch(err => {})
  };

  const ocultarTabla = () => {
    setTable(!table);
  };

  const asis = () => {
    getAsistentes();
    getPaises();
  };

  useEffect(() => {
    getAsistentes();
    getPaises();
  }, [ModuloSlice]);

  let i = 1;
  let a = 1;
  let p = 1;
  const nameReporte = Asistentes?.[0] ? `ESTADÍSTICAS ${Asistentes?.[0].fecha?.substring(0, 10)} ${UserActivo}` : "REPORTE";

  return (
    <>
      {ModuloSlice?.[0] ?
        <>
          <div className='ContenBtnTablas'>
            <span>
              <button className='btnFlotante btn' onClick={ocultarTabla}>{table ? "OCULTAR ASISTENTES" : "VER ASISTENTES"}</button>
              <button className='btnFlotante btn' onClick={asis}>Actualizar</button>
            </span>
            <div className='Lefth'><BotonReporte tableData="tblData" fileName={nameReporte} /></div>
          </div>
          <table id="tblData">
            {ComentariosDB?.[0] ?
              <tr className="PrincipalTR">
                <th className='ContenPregunta NUM'> # </th>
                <th className='ContenPregunta'>Pregunta</th>
                <th className='ContenPregunta'>Realizó</th>
                <th className='ContenPregunta'>Hora</th>
              </tr>
              : null}
            {ComentariosDB?.[0] ?
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
              ))
              : null}
            {Asistentes?.[0] ?
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
              : null}
            {Asistentes?.[0] ?
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
              ))
              : null}
            {Asistentes?.[0] ?
              <>
                <tr className="PrincipalTR">
                  <th className='ContenPregunta'> # </th>
                  <th className='ContenPregunta'>Pais</th>
                  <th className='ContenPregunta'>Total</th>
                </tr>
              </>
              : null}
            {Paises?.[0] ?
              Paises.map(Comentario => (
                <Pais
                  num={p++}
                  key={Comentario.id}
                  Pais={Comentario.pais}
                  total={Comentario.total}
                />
              ))
              : null}
          </table>
        </>
        : null}
    </>
  )
}

export default Tablas;
