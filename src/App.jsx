import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

import { Routes,Route,Link,NavLink,useNavigate } from 'react-router-dom'
import Sesiones from './pages/Sesiones'
import NewSesion from './pages/NewSesion'


function App() {
  const [count, setCount] = useState(0)
  const naviguete=useNavigate()
  // naviguete('/')
  return (
    <>
   {/* <Home/> */}

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sesiones' element={<Sesiones/>}/>
  <Route path='/+1Sesion' element={<NewSesion/>}/>
</Routes>


    </>
  )
}

export default App
