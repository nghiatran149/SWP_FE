import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import ForgotPassword from './pages/forgotPasswordPage'
import ResetPassword from './pages/resetPasswordPage'
import ServicePage from './pages/servicePage'
import PaymentSuccessPage from './pages/payment/paymentSuccess'
import PaymentFailedPage from './pages/payment/paymentFail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByTokenApi } from './store/user/action'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const uid = useSelector((state) => state.USER.uid);
  let  token= localStorage.getItem("accessToken");
  useEffect(()=>{
  

    if(token ||uid){
      dispatch(fetchUserByTokenApi(token, navigate))
    }
  },[uid, token])
  return (
    <>
    {/* nơi khai báo các route */}
    {/* header */}
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/reset' element={<ResetPassword/>}/>
      <Route path='/service' element={<ServicePage/>}/>

      <Route path='/paymentSuccess' element={<PaymentSuccessPage/>}/>
      <Route path='/paymentFail' element={<PaymentFailedPage/>}/>
    </Routes>
    </>
  )
}

export default App
