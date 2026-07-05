import React from 'react'
import { useEffect } from 'react'

import ProductCard from '../components/ProductCard';
import { furnitureProducts } from '../data/products';
import { appliancesProducts } from '../data/products';
import { electronicProducts } from '../data/products'


import { useLocation } from 'react-router-dom';

const Products = ({ cart, setCart, addCart, addToCart }) => {
    const location = useLocation()
    const category = location.state?.category
    useEffect(() => {
        const section = document.getElementById(category)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);

        }
    }, [category]);

    console.log(category)


    return (

        <div className='px-6 md:px-10 py-8 bg-slate-50 pt-24'>

            <div className='mb-8'>
                <h1 className='md:mt-0 mt-20 text-3xl font-bold text-slate-900'>All Products</h1>
                <p className='text-slate-600 mt-2'>Browse furniture and appliances avilable for rent</p>
            </div>
            <h1 id='furniture' className='scroll-mt-24 text-2xl font-bold text-slate-800 '>Furniture</h1>
            <div className='mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {furnitureProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} addCart={addCart} addToCart={addToCart} />
                ))}
            </div>
            <h1 id='appliances' className='scroll-mt-24 text-2xl font-bold text-slate-800 '>Appliances</h1>

            <div className='mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {appliancesProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} addCart={addCart} addToCart={addToCart} />
                ))}
            </div>
            <h1 id='electronics' className='scroll-mt-24 text-2xl font-bold text-slate-800 '>Electronics</h1>
            <div className='mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {electronicProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} addCart={addCart} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default Products
