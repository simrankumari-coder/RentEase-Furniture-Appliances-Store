import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-slate-900 text-slate-200 px-8 py-12 mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>


                    <div>
                        <h2 className='text-2xl font-bold text-purple-700'>RentEase</h2>
                        <p className='mt-3 text-slate-400'> Affordable furniture and appliance rentals for modern living.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-white mb-3'>Quick Links</h3>
                        <ul className='space-y-2 text-slate-400'>
                            <li className='hover:text-white cursor-pointer'>Home</li>
                            <li className='hover:text-white cursor-pointer'>Products</li>
                            <li className='hover:text-white cursor-pointer'>My Rentals</li>
                            <li className='hover:text-white cursor-pointer'>Cart</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-white mb-3'>Categories</h3>
                        <ul className='space-y-2 text-slate-400'>
                            <li className='hover:text-white cursor-pointer'>Furniture</li>
                            <li className='hover:text-white cursor-pointer'>Appliances</li>
                            <li className='hover:text-white cursor-pointer'>Electronics</li>
                        </ul>
                    </div>
                    <div className='mt-10 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm'> © {new Date().getFullYear()} RentEase. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
