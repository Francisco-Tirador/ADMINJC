import './App.css'
import Home from './pages/Home'

import { Routes,Route,} from 'react-router-dom'
import Sesiones from './pages/Sesiones'
import NewSesion from './pages/NewSesion'


function App() {
  
  return (
    <>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sesiones' element={<Sesiones/>}/>
  <Route path='/+1Sesion' element={<NewSesion/>}/>
</Routes>


    </>
  )
}

export default App
