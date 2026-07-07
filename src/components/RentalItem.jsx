import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const RentalItem = ({ item, returnRental, rental, setRental }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col max-w-2xl sm:flex-row items-center gap-5 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition'>

            <img
                src={item.image}
                alt={item.name}
                className='w-24 h-24 object-cover rounded-md'
            />

            {/* RIGHT: TEXT + BUTTON */}
            <div className='flex-1 text-center sm:text-left '>

                <h3 className='font-bold text-xl md:text-2xl text-slate-900'>
                    {item.name}
                </h3>

                <p className='text-lg font-semibold text-purple-700 mt-1'>
                    ₹{item.price} /month
                </p>
                <div className='mt-4 space-y-2'>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                        🟢 {item.status}
                    </span>
                    <p className="text-sm text-slate-600">
                        <span className="font-medium">Started:</span>{" "}
                        {item.startDate.toDateString()}
                    </p>

                    <button onClick={() => navigate("/rentalHistory")} className='bg-purple-800 text-white px-4 py-2 rounded-md text-sm font-medium'>View Rental History</button>
                </div>
                <div className='mt-4'>
                    <button onClick={() => { returnRental(item.cartId) }} className='flex-1 border border-purple-800 text-purple-800 text-xl py-2 cursor-pointer rounded-md hover:bg-purple-50 px-2'>Rental return</button>
                </div>

            </div>
        </div>
    )
}

export default RentalItem
