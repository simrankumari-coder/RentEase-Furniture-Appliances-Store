import React from 'react'

const ProductCard = ({ product, cart, setCart }) => {
    return (
        <div>

            <div className='border-2  bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition'>
                <img src={product.image} alt={product.name} className='h-40 w-full object-cover' />
                <div className='p-4'>
                    <h3 className='px-2 font-semibold text-slate-900'>{product.name}</h3>
                    <p className='px-2 text-purple-700 font-medium mt-2'>{product.price}</p>
                    <button className='px-2 mt-4 w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 cursor-pointer transition'>Rent Now</button>
                </div>



            </div>
        </div>
    )
}

export default ProductCard
