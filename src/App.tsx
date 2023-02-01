import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Navbar } from './components/Navbar'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import SignIn from './pages/SignIn'
import Signup from './pages/SignUp'
function App() {

  return (
    < >
       <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
