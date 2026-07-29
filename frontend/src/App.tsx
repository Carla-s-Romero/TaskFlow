import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/signIn'
import Cadastro from './pages/cadastro/signUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
