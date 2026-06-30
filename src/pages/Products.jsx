import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard';
import sofa from "../images/sofa.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import washing from "../images/washing.jpg";

const Products = ({ cart, setCart }) => {
    const products = [
        { name: "Comfort Sofa", price: "₹499 / month", image: sofa },
        { name: "Modern Fridge", price: "₹799 / month", image: fridge },
        { name: "Smart TV", price: "₹999 / month", image: tv },
        { name: "Washing Machine", price: "₹699 / month", image: washing },
    ];

    return (

        <div className='px-6 md:px-10 py-8 bg-slate-50 pt-24'>
            <Navbar />
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-slate-900'>All Products</h1>
                <p className='text-slate-600 mt-2'>Browse furniture and appliances avilable for rent</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products
