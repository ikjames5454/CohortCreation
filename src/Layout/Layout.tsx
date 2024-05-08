import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout