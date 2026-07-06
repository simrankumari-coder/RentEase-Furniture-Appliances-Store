import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { furnitureProducts } from '../data/products';
import { appliancesProducts } from '../data/products';
import { electronicProducts } from '../data/products'
import { useParams } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { GrVmMaintenance } from "react-icons/gr";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const ProductDetails = ({ addCart, addToCart }) => {
    const params = useParams()
    const navigate = useNavigate()


    const product = furnitureProducts.find((item, index) => {
        return item.id === Number(params.id)
    }) || appliancesProducts.find((item, index) => {
        return item.id === Number(params.id)
    }) || electronicProducts.find((item, index) => {
        return item.id === Number(params.id)
    })
    const handleBtn = () => {
        navigate("/products")
    }


    return (
        <div className='bg-slate-100 min-h-screen mt-36 md:mt-12'>
            <div className='flex flex-col gap-6  max-w-6xl mx-auto px-6 py-10'>
                <div><button className='cursor-pointer text-center flex gap-2 text-purple-900 rounded-md p-3 border-purple-900 border ml-3  font-bold' onClick={handleBtn}>
                    <IoArrowBackCircleOutline className='text-2xl' /> Back To products</button></div>
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10 items-start">
                    <div className=' bg-white rounded-xl shadow-lg p-6 '><img className='object-contain w-full rounded-md shadow-purple-800 ' src={product.image} alt={product.name} />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-5 justify-start">
                        <h3 className='text-4xl font-bold'>{product.name}</h3>
                        <p className='text-xl font-semibold text-purple-600 '>Monthly Rent:₹{product.price}/month</p>
                        <p className='text-xl font-semibold' >Security Deposit: ₹{product.securityDeposit} (Refundable)</p>
                        <p className='text-xl font-medium text-green-600 '>Available: {product.availability} ✅</p>
                    </div>
                </div>
                <section className='bg-white w-full rounded-xl shadow-md p-6 flex flex-col gap-4 md:w-xl  border border-slate-500 items-start justify-center'>
                    <p className='font-bold text-2xl '>Rental Options:</p>
                    <div className='flex gap-3 flex-wrap mt-3'>
                        <button className='font-semibold text-center  text-purple-900 rounded-md p-2 border border-purple-900 '>{product.tenureOptions.at(0)} months</button>
                        <button className='font-semibold text-center  text-purple-900 rounded-md p-2 border-purple-900 border'>{product.tenureOptions.at(1)} months</button>
                        <button className='font-semibold text-center text-purple-900 rounded-md p-2 border-purple-900 border'>{product.tenureOptions.at(2)} months</button></div>
                </section>
                <section className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 w-full  md:w-xl  border border-slate-500 items-start justify-center'>
                    <p className='font-bold text-2xl'>Description:</p>
                    <p className='text-slate-800'>{product.description}</p>
                </section>
                <section className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 w-full md:w-xl  border border-slate-500 items-start justify-center'>
                    <p className='font-bold text-2xl'>Included Services:</p>
                    <p className='text-slate-800 flex gap-2'><BsTools className='text-xl' />{product.maintenance}</p>
                    <p className='text-slate-800 flex gap-2'><CiDeliveryTruck className='text-3xl' />
                        {product.delivery}</p>
                </section>
                <div className='flex justify-center items-center mt-4 gap-3'>
                    <button onClick={() => (addCart(product))} className='border-purple-800 border-2 text-purple-800 font-semibold md:w-40 px-6 py-3 rounded-md hover:text-purple-950 cursor-pointer'>Rent Now</button>
                    <button onClick={() => addToCart(product)} className=' bg-purple-800 text-white px-6 py-3 rounded-md md:w-40 cursor-pointer hover:bg-purple-900'>Add To Cart</button>
                </div>
            </div >
        </div>
    )
}

export default ProductDetails
