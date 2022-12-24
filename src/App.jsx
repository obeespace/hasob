import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Bonds from "./Pages/Bonds"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import GuestRoute from "./routes/GuestRoute"
import User from "./routes/UserRoute"

function App() {

  return (
    <div className="App bg-green-50">
      {localStorage !== null ? 
        <div>
          <Routes><Route path="/*" element={<User/>}/></Routes>
        </div> :
        <div>
          <Routes><Route path="/*" element={<GuestRoute/>}/></Routes>
        </div>}
    </div>
  )
}

export default App
