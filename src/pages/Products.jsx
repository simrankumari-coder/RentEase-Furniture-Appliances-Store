import React from 'react'
import { useEffect } from 'react'

import ProductCard from '../components/ProductCard';
import bed from "../images/bed.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import washing from "../images/washing.jpg";
import drawer from "../images/drawer.jpg";
import desktop from "../images/desktop.jpg"
import table from "../images/table.jpg"
import ac from "../images/ac.jpg"
import microwave from "../images/microwave.jpg"
import laptop from "../images/laptop.jpg"
import homeProjector from "../images/homeProjector.jpg"
import speaker from "../images/speaker.jpg"
import { useLocation } from 'react-router-dom';

const Products = ({ cart, setCart, addCart }) => {
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
    const furnitureProducts = [
        { id: 1, name: "Wooden Bed", price: 699, image: bed },
        { id: 2, name: "Drawer", price: 799, image: drawer },
        { id: 3, name: "Desktop", price: 999, image: desktop },
        { id: 4, name: "Table", price: 699, image: table },
    ];
    const appliancesProducts = [
        { id: 1, name: "Washing Machine", price: 499, image: washing },
        { id: 2, name: "Fridge", price: 799, image: fridge },
        { id: 3, name: "Air Conditioner", price: 999, image: ac },
        { id: 4, name: "Microwave Oven", price: 699, image: microwave },
    ];
    const electronicProducts = [
        { id: 1, name: "Smart TV", price: 499, image: tv },
        { id: 2, name: "Laptop", price: 799, image: laptop },
        { id: 3, name: "Home Projector", price: 999, image: homeProjector },
        { id: 4, name: "Bluetoot Speaker", price: 699, image: speaker },
    ];
    const addToCart = (product) => {
        console.log("clicked", product)
        const newProduct = {
            cartId: Date.now(), ...product
        }

        setCart(prev => [...prev, newProduct])
    }
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
