import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route} from "react-router-dom"
import { getCartItems } from './redux/CounterSlice';
import GuestRoute from "./routes/GuestRoute"
import User from "./routes/UserRoute"

function App() {
  const dispatch = useDispatch()

  function runGetCartItems(){
    console.log
    dispatch(getCartItems())
  }
  runGetCartItems()
  return (
    <div className="App bg-green-50">
      {localStorage.getItem('firstName') == null ? 
        <div>
          <Routes><Route path="/*" element={<GuestRoute/>}/></Routes>
        </div> :
        <div>
          <Routes><Route path="/*" element={<User/>}/></Routes>
        </div>}
    </div>
    
  )
}

export default App
