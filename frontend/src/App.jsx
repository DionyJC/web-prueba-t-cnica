import Formulario from "./components/Formulario"
import FormularioRegistro from "./components/FormularioRegistro"
import Home from "./components/Home"
import Bienvenida from "./components/Bienvenida"


import{BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
 

  return (
   
      <BrowserRouter >
        <Routes>
        <Route path="/" element={<Bienvenida />}></Route>
          <Route path="/login" element={<Formulario />}></Route>
          <Route path="/registro" element={<FormularioRegistro />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
     
   
  )
}

export default App
