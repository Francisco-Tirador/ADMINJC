import React from 'react'
import { useSelector } from 'react-redux'
import { Routes,Route,Link,NavLink,useNavigate } from 'react-router-dom'
import iconJC from '../assets/images/jcLogo.png'
const Menu = () => {
  // const ColorUserActivo=useSelector(u=>u.UserActivo)
  const Color=useSelector(c=>c.UserActivo)
  return (
    <div className={'Menu '+Color}>
        <img className='Logo' src={iconJC} alt="" />
        <ul>
      
            {/* <li className='active'></li> */}
            <li>Calendario </li>
            <li><NavLink className={({isActive})=>isActive?'active':''} to="/sesiones">Sesiones </NavLink></li>
            <li><NavLink className={({isActive})=>isActive?'active':''} to="/">Preguntas </NavLink></li>
            <li>Hacer prueba</li>
            <li>Ver pagina</li>
            <li>Ver en vivo</li>
            <li>Administrar temporales</li>
        </ul>
    </div>
  )
}

export default Menu
