import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import MyRentals from './pages/MyRentals.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Checkout from './pages/Checkout.jsx'
import RentalHistory from './pages/RentalHistory.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Login from './pages/Login.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
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
    navigate("/rentals")
  }

  const returnRental = (cartId) => {

    setRentals(
      rentals.map(item => {
        if (item.cartId === cartId) {
          return {
            ...item,
            status: "completed",
            returnDate: new Date()
          }
        }
        return item
      })

    )
    console.log("Returning:", cartId);
    console.log("rentalkgndf,mlg;jilKL:K[iPHKbjlo;", rentals);
    navigate("/rentalHistory")


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

  const addToCart = (product) => {
    console.log("clicked", product)
    const newProduct = {
      cartId: Date.now(), ...product
    }

    setCart(prev => [...prev, newProduct])
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
          path='/products' element={<Products cart={cart} setCart={setCart} addCart={addCart} addToCart={addToCart} />}
        />
        <Route
          path='/cart' element={<Cart checkoutBtn={checkoutBtn} cart={cart} setCart={setCart} />}
        />
        <Route
          path='/rentals' element={<MyRentals returnRental={returnRental} checkoutBtn={checkoutBtn} rentals={rentals} cart={cart} setRentals={setRentals} />}
        />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />} />
        <Route path='/products/:id' element={<ProductDetails addCart={addCart} addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} checkoutBtn={checkoutBtn} />} />
        <Route path='/rentalHistory' element={<RentalHistory rentals={rentals} setRentals={setRentals} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
