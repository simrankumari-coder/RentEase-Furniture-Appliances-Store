import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import MyRentals from './pages/MyRentals.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [cart, setCart] = useState(() => {
    let data = localStorage.getItem("items")
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/" element={<Home />}
        />
        <Route
          path='/products' element={<Products cart={cart} setCart={setCart} />}
        />
        <Route
          path='/cart' element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route
          path='/rentals' element={<MyRentals />}
        />
      </Routes>

    </>
  )
}

export default App
