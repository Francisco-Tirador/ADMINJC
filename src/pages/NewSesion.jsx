import React from 'react'
import ServidoresHeader from '../components/ServidoresHeader'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NewSesion = () => {
    const UserActivo=useSelector(u=>u.UserActivo)


    const navigate=useNavigate()
    const { handleSubmit, reset, register } = useForm()
    const submit = (data) => {
        console.log(data)
       
    }
    const regreso=()=>{
        navigate("/sesiones")
    }






    return (
        <div className='Home2 CenterFl'>
            <ServidoresHeader />
          
            <div className='ContenOptiones'>
            <div className='btn' onClick={regreso}> {`<- Regresar`}</div>
                </div>
            <div className='ContenForm '>
                <h1 className='textPrincipal'>Nueva sesión para {UserActivo}</h1>
           
                <form className='Form_Register' onSubmit={handleSubmit(submit)}>
                    <ul>
                        <li className="liInput">
                        <label htmlFor="register-name" className="login_label">Titulo de la sesión</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50">
                            
                            </textarea>
                        
                        </li>
                        <li className="liInput">
                        <label htmlFor="register-name" className="login_label">Descripcion</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50">
                            
                            </textarea>
                        
                        </li>
                       


                        <li className="liInput">
                            <label htmlFor="" className="login_label">Fecha hora inicio</label>
                               <div className='Spandata'>
                               <input type='date'className="InputDate"
                                id='' {...register('fecha_inicio')} required autoComplete='off' />
                                <input type='time'  className="InputDate"
                                id='' {...register('Hora_inicio')} required autoComplete='off' />
                               </div>

                        </li>
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Fecha hora abierto</label>

                            <div className='Spandata'>
                            <input type='date' className="InputDate"
                                id='' {...register('Fecha_abierto')} required autoComplete='off' />
                                <input type='time' className="InputDate"
                                id='' {...register('Hora_abierto')} required autoComplete='off' />
                            </div>
                                

                        </li>
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Lugar/sede</label>
                                <input type='text'  className=""
                                id='' {...register('sede')}  autoComplete='off' />
                                

                        </li>
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Url del programa</label>
                                <input type='text'  className=""
                                id='' {...register('Url_programa')}  autoComplete='off' />
                                

                        </li>
                        
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Fecha y hora cierre</label>
                           <div className='Spandata'>
                           <input type='date' className="InputDate"
                                id='' {...register('Fecha_cierre')} required autoComplete='off' />
                                <input type='time'  className="InputDate"
                                id='' {...register('Hora_cierre')} required autoComplete='off' />

                           </div>

                        </li>
                        
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Canal 1</label>
                                <input type='text' className=""
                                id='' {...register('canal1')} required autoComplete='off' />
                                

                        </li>
                        
                        <li className="liInput">
                            <label htmlFor="" className="login_label">Canal 2</label>
                                <input type='text' className=""
                                id='' {...register('canal2')}  autoComplete='off' />
                                

                        </li>
                        
                        

                       
                    </ul>
                    <button className='btn'> Agregar</button>
                </form>
            </div>

        </div>
    )
}

export default NewSesion
