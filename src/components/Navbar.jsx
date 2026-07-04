import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart'
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Navbar = ({ cart = [], username, isLoggedIn, loggedOut }) => {
    console.log("Navbar cart:", cart)

    return (
        <div>
            <nav className='fixed left-0 w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-5 py-3  sm:px-6 md:px-8 '>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-8">
                    <h3 className='text-purple-800 font-bold text-2xl'>RentEase</h3>
                    <div className='flex md:justify-center flex-wrap md:flex-nowrap gap-6 text-slate-700 font-medium md:gap-8'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/products">Products</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/rentals">My Rentals</NavLink>
                    </div>
                    <div className='flex flex-wrap   items-center gap-4 font-medium md:justify-end'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold flex gap-1' :
                                'text-slate-700 hover:text-purple-800 flex gap-1'} to="/cart"> <TiShoppingCart className="  text-2xl" /> Cart {cart?.length}</NavLink>
                        <div className='flex gap-4 justify-center items-center flex-wrap '>
                            {isLoggedIn === true ?
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className='flex items-center gap-1'>
                                        <MdAccountCircle className='text-2xl text-purple-700' /> <span>{username.split(" ")[0]}</span></div>
                                    <button onClick={loggedOut} className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition"><FiLogOut />Logout</button>
                                </div>

                                :
                                <NavLink to='/login' >
                                    <button className='bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900'> Login</button>
                                </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
