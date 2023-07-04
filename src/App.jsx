import './App.css'
import Home from './pages/Home'

import { Routes,Route,} from 'react-router-dom'
import Sesiones from './pages/Sesiones'
import NewSesion from './pages/NewSesion'
import iconJC from './assets/images/jcLogo.png'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux/es/exports'
import { resetCargando } from './store/Slice/CargandoSlice'


function App() {
  const dispatch=useDispatch()
  const [cargando,setcargando]=useState(false)
  const CargandoSlice=useSelector(c=>c.CargandoSlice)


   
  useEffect(() => {
    setcargando(false)
    const retardo = setTimeout(() => {
      setcargando(true)
      dispatch(resetCargando("false"))
    }, 1500);
    
    return () => clearTimeout(retardo); // Limpiar el timeout cuando se desmonte el efecto
  }, [CargandoSlice]);
  
  
  return (
    <>
    <div className={`charging_screen ${cargando?"OFF_charging_screen":""}`}>
      <img src={iconJC} alt="" />
    </div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sesiones' element={<Sesiones/>}/>
  <Route path='/+1Sesion' element={<NewSesion/>}/>
</Routes>


    </>
  )
}

export default App
