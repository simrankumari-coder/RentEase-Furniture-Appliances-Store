import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { furnitureProducts } from '../data/products';
import { appliancesProducts } from '../data/products';
import { electronicProducts } from '../data/products'
import { useParams } from 'react-router-dom';

const ProductDetails = ({ addCart, addToCart }) => {
    const params = useParams()



    const product = furnitureProducts.find((item, index) => {
        return item.id === Number(params.id)
    }) || appliancesProducts.find((item, index) => {
        return item.id === Number(params.id)
    }) || electronicProducts.find((item, index) => {
        return item.id === Number(params.id)
    })


    return (
        <div className='flex flex-col mt-26 items-center justify-center'>

            <img className='w-full object-contain max-w-2xl rounded-md' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}/month</p>
            <ul>Rental Options:
                <li>{product.tenureOptions.at(0)} months</li>
                <li>{product.tenureOptions.at(1)} months</li>
                <li>{product.tenureOptions.at(2)} months</li>
            </ul>
            <p>Security Deposit: ₹{product.securityDeposit} (Refundable)</p>
            <p>Description:{product.description}</p>
            <p>Available: {product.availability} ✅</p>
            <p>Maintainence:{product.maintenance}</p>
            <p>Delivery:{product.delivery}</p>
            <div className='flex mt-4 gap-3'>
                <button onClick={() => (addCart(product))} className='flex-1 border border-purple-800 text-purple-800 py-2 rounded-md hover:bg-purple-50'>Rent Now</button>
                <button onClick={() => addToCart(product)} className='flex-1 bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails
