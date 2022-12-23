import React from 'react'
import {Routes, Route} from "react-router-dom"
import UserLayout from '../layouts/UserLayout'
import Bonds from '../Pages/Bonds'
import UserHeader from '../Components/UserHeader'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'

const User = () => {
  return (
    <div>
        <UserHeader/>
        <Routes>
            <Route path='/' element={<UserLayout/>}/>
            <Route index element={<Home/>}/>
            <Route path='/bonds' element={<Bonds/>}/>
            <Route path='cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default User
