import React from 'react'
import Header from '../sections/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/Footer'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout