import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {

    return (
        <div>
            <footer className='bg-slate-900 text-slate-200 px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>


                    <div>
                        <h2 className='text-2xl font-bold text-purple-700'>RentEase</h2>
                        <p className='mt-3 text-slate-400'> Affordable furniture and appliance rentals for modern living.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-white mb-3'>Quick Links</h3>
                        <ul className='space-y-2 text-slate-400'>
                            <Link to="/"><li className='hover:text-white cursor-pointer'>Home</li></Link>
                            <Link to="/products"><li className='hover:text-white cursor-pointer'>Products</li></Link>
                            <Link to="/rentals"> <li className='hover:text-white cursor-pointer'>My Rentals</li></Link>
                            <Link to="/cart"> <li className='hover:text-white cursor-pointer'>Cart</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-white mb-3'>Categories</h3>
                        <ul className='space-y-2 text-slate-400'>
                            <Link to="/products" state={{ category: "furniture" }}> <li className='hover:text-white cursor-pointer'>Furniture</li></Link>
                            <Link to="/products" state={{ category: "appliances" }}>    <li className='hover:text-white cursor-pointer'>Appliances</li></Link>
                            <Link to="/products" state={{ category: "electronics" }}>   <li className='hover:text-white cursor-pointer'>Electronics</li></Link>
                        </ul>
                    </div>
                    <div className='mt-10 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm'> © {new Date().getFullYear()} RentEase. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
