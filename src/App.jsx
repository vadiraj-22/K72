import React from 'react'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar'
import FullScreenNav from './Components/Navigation/FullScreenNav'


const App = () => {

  
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
