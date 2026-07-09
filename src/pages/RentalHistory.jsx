import React from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai";
const RentalHistory = ({ rentals, tenure, setTenure }) => {
    const completedRentals = rentals.filter(item => item.status === "completed")

    return (
        <div className='flex flex-col gap-6 bg-slate-100 mt-16 '>
            <div className=" m-4">
                <h1 className="text-3xl font-bold text-black">Rental History</h1>

            </div>
            {completedRentals.length === 0 ? (<p className='text-center text-xl text-slate-500 mt-10'> No Rental Hostory yet</p>)
                :
                (completedRentals.map(item => {
                    const duration = Math.ceil((new Date(item.returnDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24))
                    return (
                        <div className='flex flex-col md:flex-row max-w-6xl mx-autoitems-center m-8 rounded-2xl shadow-lg p-8 gap-10 ' key={item.cartId}>

                            <div className='bg-white rounded-xl shadow-lg md:w-1/2 w-full p-6 h-80 '>
                                <img className='object-contain w-full h-full rounded-xl shadow-purple-800 ' src={item.image} alt={item.name} />
                            </div>
                            <div className='md:w-1/2 flex flex-col gap-5 w-full justify-center '>
                                <h3 className='text-4xl font-bold text-slate-900'>{item.name}</h3>
                                <p className='text-xl font-semibold text-slate-700 '>Monthly Rent:₹{item.price}/month</p>
                                <p className='text-xl font-medium rounded-full py-1 px-3 w-full bg-green-100  text-green-700 '>✅ {item.status} </p>

                                <div className=' p-6 flex flex-col gap-2 '>
                                    <h3 className='text-2xl font-semibold text-slate-700 flex gap-x-0.5
                                    '> Returned Successfully</h3>
                                    <hr className='bg-gray-200 w-1/2 h-1 mt-0 mb-4' />
                                    <div className=''>
                                        <p className='text-sm  text-slate-700 '>Selected Tenure: {item.selectedTenure}</p>
                                        <p className='text-sm  text-slate-700 '>Actual Duration: {duration} {" "}{duration === 1 ? "day" : "days"}</p></div>
                                    {console.log("the tenure is", item.selectedTenure)}
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
