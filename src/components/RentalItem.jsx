import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosReturnLeft } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

import { FaTools } from "react-icons/fa";
const RentalItem = ({ item, returnRental, rental, setRental }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col max-w-2xl gap-5 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition'>

            <div className='flex flex-col md:flex-row  w-full md:items-start gap-8'>
                <div className='flex md:justify-start justify-center'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className='rounded-md w-80 h-56  object-cover md:object-cotain m-3'
                    />
                </div>
                <div className='md:w-1/2 flex flex-col gap-1 md:gap-5 w-full mt-3 justify-center '>

                    <h3 className='md:text-4xl text-2xl font-bold text-slate-900'>
                        {item.name}
                    </h3>

                    <p className='md:text-xl text-sm font-semibold text-slate-700'>
                        ₹{item.price} /month
                    </p>

                    <span className="md:text-xl text-sm font-medium rounded-full py-1 px-3 w-full bg-green-100  text-green-700">
                        🟢 {item.status}
                    </span>
                    <p className="text-left text-sm text-slate-600">
                        <span className="font-medium">Started:</span>{" "}
                        {item.startDate.toDateString()}
                    </p>


                </div>
            </div>
            <div className='flex w-full max-w-2xl'>
                {item.status === "Active" && item.maintainStatus === "submitted" ? (
                    <div className='mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 p-4'>
                        <p className='font-semibold text-xl text-slate-800 '>Issue:{item.issue}</p>
                        <p className='mt-2 text-sm text-slate-600'>{item.description}</p>
                    </div>)
                    : item.status === "Active" && <Link className='w-full' to={`/maintainence/${item.cartId}`}>
                        <button className=' flex bg-slate-100 gap-3 text-sm md:text-sm w-full py-2 rounded-md  text-slate-600'><FaTools className='ml-4 text-xl md:text-2xl ' />Maintainence Request</button></Link>
                }

            </div>
            <div className='mt-4 flex gap-2 w-full justify-center items-center'>

                <button onClick={() => navigate("/rentalHistory")} className='flex justify-center  gap-2 w-1/2 bg-purple-800 text-white px-4 py-2 rounded-md '><FaHistory className='mt-1' size={20} /><span className='text-lg  font-bold'>History</span></button>
                {item.status === "Active" &&
                    <button onClick={() => { returnRental(item.cartId) }} className='flex justify-center gap-2 w-1/2 border border-purple-800 text-purple-800 text-xl py-2 cursor-pointer rounded-md hover:bg-purple-50 px-2'><IoIosReturnLeft className='mt-1' size={22} />Return</button>}
            </div>


        </div>
    )
}

export default RentalItem
