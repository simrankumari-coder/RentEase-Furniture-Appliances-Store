import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
const Home = ({ cart, setCart, addCart }) => {
    return (
        <div className='pt-16'>

            <Hero />
            <Category />
            <FeaturedProducts cart={cart} setCart={setCart} addCart={addCart} />


        </div>
    )
}

export default Home
