import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homecomp from './Components/Home/Homecomp'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Homecomp/>} />


</Routes>
</BrowserRouter>


    </>
  )
}

export default App
