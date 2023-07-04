import React from 'react'
import Menu from '../components/Menu'
import ServidoresHeader from '../components/ServidoresHeader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Sesiones = () => {
    const Sesiones = useSelector(s => s.SesionesSlice)
    const UserActivo = useSelector(s => s.UserActivo)
    const navigate=useNavigate()
    console.log(Sesiones)
    const masUnaSesion=()=>{
            navigate("/+1Sesion")
            console.log("me fui")
    }


    return (
        <div className='Home'>
            <ServidoresHeader/>
            <Menu />
           <h2>Sesiones {UserActivo} </h2>
            <div className='ContenOptiones'>
                    <div className='Option btn' onClick={masUnaSesion}>Nueva sesión</div>
                    <div className='TextSecond'>Sesiones : {Sesiones.length}</div>
                </div>
            <div className='ContenP'>
               
              
                <table>

                    <tr className='PrincipalTR'>
                        <th className='ContenPregunta'>#</th>
                        <th className='ContenPregunta'>Titulo</th>
                        <th className='ContenPregunta'>Fecha de Inicio</th>
                        <th className='ContenPregunta'>Fecha de Fin</th>
                    </tr>
                    {
                        Sesiones!="a"?Sesiones?.map(S=>(
                            <tr>
                                <th className='ContenPregunta'>{S.id}</th>
                                <th className='ContenPregunta trLargo'>{S.conferencia}</th>
                                <th className='ContenPregunta'>{S.fecha_hora_inicio}</th>
                                <th className='ContenPregunta'>{S.fecha_hora_fin}</th>
                                <th className='ContenPregunta btn'>Editar</th>
                            </tr>
                        )):""
                    }


                </table>
            </div>



        </div>
    )
}

export default Sesiones
