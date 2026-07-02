import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import MyRentals from './pages/MyRentals.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [rentals, setRentals] = useState([])
  const [cart, setCart] = useState(() => {
    let data = localStorage.getItem("items")
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart))
  }, [cart])

  console.log("rentals before:", rentals)
  const checkoutBtn = () => {
    const newCart = cart.map(item => {
      return {
        ...item,
        status: "Active",
        startDate: new Date()
      }
    })
    setRentals(prev => [...prev, ...newCart])
    setCart([])
  }

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
          path='/cart' element={<Cart checkoutBtn={checkoutBtn} cart={cart} setCart={setCart} />}
        />
        <Route
          path='/rentals' element={<MyRentals checkoutBtn={checkoutBtn} rentals={rentals} cart={cart} setRentals={setRentals} />}
        />
      </Routes>

    </>
  )
}

export default App
