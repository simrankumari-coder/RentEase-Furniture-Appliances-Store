import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import MyRentals from './pages/MyRentals.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Login from './pages/Login.jsx'
function App() {
  const navigate = useNavigate()

  const [username, setUsername] = useState(() => {
    let data = localStorage.getItem("username")
    return data ? JSON.parse(data) : ""
  })

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    let data = localStorage.getItem("loggedIn")
    return data ? JSON.parse(data) : ""
  })

  const [rentals, setRentals] = useState(() => {

    let data = localStorage.getItem("rentalItems")
    return data ? JSON.parse(data).map(item => {
      return {
        ...item,
        startDate: new Date(item.startDate)
      }

    })
      : []
  })

  const [cart, setCart] = useState(() => {
    let data = localStorage.getItem("cartItems")
    return data ? JSON.parse(data) : []
  })


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("rentalItems", JSON.stringify(rentals))
  }, [rentals])

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

  const addCart = (product) => {
    setCart(prev => [...prev, product])
    navigate("/cart")
  }

  const loggedOut = () => {
    setIsLoggedIn(false)
    setUsername("")
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    navigate("/")
  }

  return (
    <>
      <Navbar loggedOut={loggedOut} cart={cart} isLoggedIn={isLoggedIn} username={username} />
      <ScrollToTop />
      <Routes>
        <Route
          path="/" element={<Home cart={cart} setCart={setCart} addCart={addCart} />}
        />
        <Route
          path='/products' element={<Products cart={cart} setCart={setCart} addCart={addCart} />}
        />
        <Route
          path='/cart' element={<Cart checkoutBtn={checkoutBtn} cart={cart} setCart={setCart} />}
        />
        <Route
          path='/rentals' element={<MyRentals checkoutBtn={checkoutBtn} rentals={rentals} cart={cart} setRentals={setRentals} />}
        />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
