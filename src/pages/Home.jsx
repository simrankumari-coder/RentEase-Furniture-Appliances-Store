import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div className='pt-16'>
            <Navbar />
            <Hero />
            <Category />
            <FeaturedProducts />
            <Footer />

        </div>
    )
}

export default Home
