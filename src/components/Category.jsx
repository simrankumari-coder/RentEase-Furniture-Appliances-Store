import React from 'react'
import { Link } from 'react-router-dom';
import { FaCouch } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { BsTv } from "react-icons/bs";
const Category = () => {
    return (
        <div>
            <section className='px-8 py-12 bg-white'>
                <h2 className='text-3xl font-bold text-slate-900 mb-8'> Browse Categories</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='cursor-pointer p-6 rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-slate-50'>
                        <Link to="/products" state={{ category: "furniture" }}>
                            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xl'><FaCouch /></div>
                            <h3 className="text-xl font-semibold mt-2">Furniture</h3>
                            <p className='text-slate-600 mt-2'> Sofas, Beds, Tables & more</p>
                        </Link>
                    </div>

                    <div className='cursor-pointer p-6 rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-slate-50'>
                        <Link to="/products" state={{ category: "electronics" }}>
                            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xl'><MdKitchen /></div>
                            <h3 className="text-xl font-semibold mt-2">Electronics</h3>
                            <p className='text-slate-600 mt-2'>TV, Laptop, Gadgets</p>
                        </Link>
                    </div>
                    <div className='cursor-pointer p-6 rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-slate-50'>
                        <Link to="/products" state={{ category: "appliances" }}>
                            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xl'><BsTv /></div>
                            <h3 className="text-xl font-semibold mt-2">Appliances</h3>
                            <p className='text-slate-600 mt-2'> Fridge, Washing Machine, AC</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category
