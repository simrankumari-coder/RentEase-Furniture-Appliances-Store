import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart'
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Navbar = ({ cart = [], username, isLoggedIn, loggedOut }) => {
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        if (menu === true) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [menu])

    return (
        <div>
            <nav className='relative left-0 w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-5 py-3  sm:px-6 md:px-8 '>
                <div className="flex flex-row justify-between  gap-8">
                    <h3 className='text-purple-800 font-bold text-2xl'>RentEase</h3>


                    <div className='lg:flex hidden md:justify-center gap-50 text-slate-700 font-medium '>
                        <div className='flex gap-8 mt-2'>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-purple-800 font-semibold' :
                                    'text-slate-700 hover:text-purple-800'} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-purple-800 font-semibold' :
                                    'text-slate-700 hover:text-purple-800'} to="/products">Products</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-purple-800 font-semibold' :
                                    'text-slate-700 hover:text-purple-800'} to="/rentals">My Rentals</NavLink></div>

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




                    <button className='lg:hidden flex text-2xl' onClick={() => { setMenu(!menu) }}>
                        {menu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {menu && (
                    <div className='lg:hidden flex flex-col rounded-lg absolute top-full z-50 w-full left-0  shadow-lg gap-4 mt-4 bg-white p-4'>
                        <NavLink onClick={() => { setMenu(false) }} className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/" >Home</NavLink>
                        <NavLink onClick={() => { setMenu(false) }} className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/products"> Products</NavLink>
                        <NavLink onClick={() => { setMenu(false) }} className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold' :
                                'text-slate-700 hover:text-purple-800'} to="/rentals"> My Rentals</NavLink>

                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-purple-800 font-semibold flex gap-1' :
                                'text-slate-700 hover:text-purple-800 flex gap-1'} to="/cart"> <TiShoppingCart className="  text-2xl" /> Cart {cart?.length}</NavLink>

                        {isLoggedIn === true ?

                            <div className='flex gap-3'>
                                <MdAccountCircle className='text-2xl text-purple-700' /> <span>{username.split(" ")[0]}</span>
                                <button onClick={loggedOut} className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition"><FiLogOut />Logout</button>
                            </div>

                            :
                            <NavLink to='/login' >
                                <button className='bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900'> Login</button>
                            </NavLink>
                        }
                    </div>

                )
                }


            </nav >
        </div >
    )
}

export default Navbar
