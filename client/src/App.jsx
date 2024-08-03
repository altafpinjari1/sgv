import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
    {/* <h1 className="title text-center py-1">Jai Shree Ganeshay Namo</h1> */}
    <Navbar/>
    <Outlet />
    <Footer/>
  </>
  )
}

export default App