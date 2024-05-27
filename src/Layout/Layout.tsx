import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Outlets from '../component/Outlet/Outlet'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Outlets/>
    <Footer/>
    </>
  )
}

export default Layout