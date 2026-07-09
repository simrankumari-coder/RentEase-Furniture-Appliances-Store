import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosReturnLeft } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

import { FaTools } from "react-icons/fa";
const RentalItem = ({ item, returnRental, rental, setRental }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col max-w-xl items-center gap-5 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition'>

            <div className='flex flex-col md:flex-row w-full  md:items-start gap-6'>
                <div className='w-40 h-40 md:w-48 md:h-48 flex items-center justify-center shrink-0'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className='w-full  h-full object-cover rounded-lg'
                    />
                </div>
                <div className='flex-1 flex-col items-start'>

                    <h3 className='font-bold text-left text-3xl md:text-2xl text-slate-900'>
                        {item.name}
                    </h3>

                    <p className='text-left text-lg font-semibold text-purple-700 mt-1'>
                        ₹{item.price} /month
                    </p>
                    <div className='mt-4 space-y-2 w-full '>
                        <span className="w-full text-left inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                            🟢 {item.status}
                        </span>
                        <p className="text-left text-sm text-slate-600">
                            <span className="font-medium">Started:</span>{" "}
                            {item.startDate.toDateString()}
                        </p>

                    </div>
                </div>
            </div>
            <div className='flex max-w-2xl'>
                {/* {item.status === "Active" && (

                    <Link to={`/maintainence/${item.cartId}`}>
                        <button className=' flex bg-slate-100 gap-3 text-sm md:text-sm w-full py-2 rounded-md  text-slate-600'><FaTools className='ml-4 text-xl md:text-2xl ' /><span></span>Maintainence Request</button></Link>)} */}


                {item.maintainStatus === "active" && (

                    <Link to={`/maintainence/${item.cartId}`}>
                        <button className=' flex bg-slate-100 gap-3 text-sm md:text-sm w-full py-2 rounded-md  text-slate-600'><FaTools className='ml-4 text-xl md:text-2xl ' /><span></span>Maintainence Request</button></Link>)

                }

                {item.maintainStatus === "submitted" && (
                    <div>

                        <h3>{item.issue}</h3>
                        <h2>{item.description}</h2>
                    </div>)
                }

            </div>
            <div className='mt-4 flex gap-2 w-full justify-center items-center'>

                <button onClick={() => navigate("/rentalHistory")} className='flex justify-center  gap-2 w-1/2 bg-purple-800 text-white px-4 py-2 rounded-md '><FaHistory className='' size={20} /><span className='text-lg  font-bold'>History</span></button>
                {item.status === "Active" &&
                    <button onClick={() => { returnRental(item.cartId) }} className='flex justify-center gap-2 w-1/2 border border-purple-800 text-purple-800 text-xl py-2 cursor-pointer rounded-md hover:bg-purple-50 px-2'><IoIosReturnLeft size={22} className='' />Return</button>}
            </div>


        </div>
    )
}

export default RentalItem
