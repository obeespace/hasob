import React from 'react'
import {Routes, Route} from "react-router-dom"
import Bonds from '../Pages/Bonds'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import GuestLayout from '../layouts/GuestLayout'
import Header from '../Components/Header'
import Signup from '../Pages/Signup'

const GuestRoute = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<GuestLayout/>}/>
            <Route index element={<Home/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='bonds' element={<Bonds/>}/>
        </Routes>
    </div>
  )
}

export default GuestRoute
