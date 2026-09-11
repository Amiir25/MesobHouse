import React, { useState } from 'react'
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

import { getDishes } from './api/dishes'
import Spinner from './ui/Spinner'
import Button from './ui/Button'
import { FaPlus } from 'react-icons/fa6'

const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    <Button isActive={true}>
      <FaPlus className='text-sm' />
      Normal
    </Button>
    {/* <Routes>
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
    </Routes> */}
    </>
  )
}

export default App