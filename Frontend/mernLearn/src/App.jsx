import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/Aboute"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Service from "./Pages/Service"
import Navbar from "./Components/Navbar"
import Errors from "./Pages/Errors"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/contact" element = { <Contact/> }/>
      <Route path="/login" element= { <Login/> }/>
      <Route path="/register" element= { <Register/> }/>
      <Route path="/service" element= { <Service/> }/>
      <Route path="*" element = { <Errors/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
