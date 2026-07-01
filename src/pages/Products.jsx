import React from 'react'

import ProductCard from '../components/ProductCard';
import sofa from "../images/sofa.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import washing from "../images/washing.jpg";

const Products = ({ cart, setCart }) => {
    const products = [
        { id: 1, name: "Comfort Sofa", price: 499, image: sofa },
        { id: 2, name: "Modern Fridge", price: 799, image: fridge },
        { id: 3, name: "Smart TV", price: 999, image: tv },
        { id: 4, name: "Washing Machine", price: 699, image: washing },
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
                <h1 className='text-3xl font-bold text-slate-900'>All Products</h1>
                <p className='text-slate-600 mt-2'>Browse furniture and appliances avilable for rent</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default Products
