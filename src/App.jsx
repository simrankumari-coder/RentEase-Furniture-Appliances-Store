import React from 'react'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import MyRentals from './MyRentals.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [cart, setCart] = useState([])
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/" element={<Home />}
        />
        <Route
          path='/products' element={<Products cart={cart} setCart={setCart} />}
        />
        <Route
          path='/cart' element={<Cart />}
        />
        <Route
          path='/rentals' element={<MyRentals />}
        />
      </Routes>

    </>
  )
}

export default App
