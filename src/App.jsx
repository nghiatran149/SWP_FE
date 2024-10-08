import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPasswordPage'
import RegisterPage from './pages/RegisterPage'
import ServicePage from './pages/ServicePage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* nơi khai báo các route */}
    {/* header */}
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      
    </Routes>
    </>
  )
}

export default App
