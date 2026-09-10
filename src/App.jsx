import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Menu from './menu/Menu'
import DishDetail from './menu/DishDetail'
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import NotFound from './NotFound'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/menu/:slug' element={<DishDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App