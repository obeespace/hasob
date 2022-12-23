import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Bonds from "./Pages/Bonds"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"

function App() {

  return (
    <div className="App bg-green-50">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='bonds' element={<Bonds/>}/>
      </Routes>
    </div>
  )
}

export default App
