import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'
const Navbar = ({ cart = [] }) => {
    console.log("Navbar cart:", cart)
    return (
        <div>
            <nav className='fixed left-0 w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-5 py-3  sm:px-6 md:px-8 '>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-8">
                    <h3 className='text-purple-800 font-bold text-2xl'>RentEase</h3>
                    <div className='flex md:justify-center flex-wrap md:flex-nowrap gap-6 text-slate-700 font-medium md:gap-8'>
                        <Link className='text-slate-700 hover:text-purple-800' to="/">Home</Link>
                        <Link className='text-slate-700 hover:text-purple-800' to="/products">Products</Link>
                        <Link className='text-slate-700 hover:text-purple-800' to="/rentals">My Rentals</Link>
                    </div>
                    <div className='flex items-center gap-4 md:justify-end'>
                        <Link className='text-slate-700 hover:text-purple-800' to="/cart">🛒 Cart {cart?.length}</Link>
                        <Link to='/login' > <button className='bg-purple-800 text-white px-4 py-2 rounded-md
hover:bg-purple-900'>Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
