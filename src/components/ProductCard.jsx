import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({ product, addToCart, addCart }) => {
    console.log(product);
    console.log(product?.image);
    return (
        <div>

            <div className='border-2  bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition'>
                <img src={product.image} alt={product.name} className='h-40 w-full object-cover' />
                <div className='p-4'>
                    <h3 className='px-2 font-semibold text-slate-900'>{product.name}</h3>
                    <p className='px-2 text-purple-700 font-medium mt-2'>₹{product.price} /month</p>

                    <Link to={`/products/${product.id}`} >View Details</Link>
                    <div className='flex mt-4 gap-3'>
                        <button onClick={() => (addCart(product))} className='flex-1 border border-purple-800 text-purple-800 py-2 rounded-md hover:bg-purple-50'>Rent Now</button>
                        <button onClick={() => addToCart(product)} className='flex-1 bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900'>Add To Cart</button>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default ProductCard
