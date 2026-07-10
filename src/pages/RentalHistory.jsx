import React from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai";
const RentalHistory = ({ rentals, tenure, setTenure }) => {
    const completedRentals = rentals.filter(item => item.status === "completed")

    return (
        <div className='flex flex-col gap-6 bg-slate-100 p-3'>
            <div className=" m-4">
                <h1 className="text-3xl font-bold text-black">Rental History</h1>

            </div>
            {completedRentals.length === 0 ? (<p className='text-center text-xl text-slate-500 mt-10'> No Rental Hostory yet</p>)
                :
                (completedRentals.map(item => {
                    const duration = Math.ceil((new Date(item.returnDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24))
                    return (
                        <div className='flex flex-col md:flex-row max-w-3xl mx-auto items-center w-full md:m-8 rounded-2xl shadow-lg p-8 gap-10 ' key={item.cartId}>

                            <div className='bg-white rounded-xl w-70 h-70 md:w-80 md:h-80 shadow-lg flex items-center justify-center p-3 '>
                                <img className='object-cover flex items-center w-full h-full justify-center  rounded-lg shadow-purple-800' src={item.image} alt={item.name} />
                            </div>
                            <div className='md:w-1/2 flex flex-col gap-1 md:gap-5 w-full justify-center '>
                                <h3 className='md:text-4xl text-2xl font-bold text-slate-900'>{item.name}</h3>
                                <p className='md:text-xl text-sm font-semibold text-slate-700 '>Monthly Rent:₹{item.price}/month</p>
                                <p className='md:text-xl text-sm font-medium rounded-full py-1 px-3 w-full bg-green-100  text-green-700 '>✅ {item.status} </p>

                                <div className='mt-3 flex flex-col md:gap-2 '>
                                    <h3 className='md:text-2xl text-[17px]
                                    '> Returned Successfully</h3>
                                    <hr className='bg-gray-200 h-1 mt-0 mb-4' />
                                    <div className=''>
                                        <p className='text-sm  text-slate-700 '>Selected Tenure: {item.selectedTenure}</p>
                                        <p className='text-sm  text-slate-700 '>Actual Duration: {duration} {" "}{duration === 1 ? "day" : "days"}</p></div>

                                    <div >
                                        <p className='text-xs text-slate-600 '>Started Date:{" "}{item.startDate.toLocaleDateString("default", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}</p>

                                        <p className='text-xs  text-slate-600'>Returned Date:{" "}{new Date(item.returnDate).toLocaleDateString("default", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}</p></div>
                                </div>

                            </div>
                        </div>)
                }))
            }
        </div>


    )
}

export default RentalHistory
