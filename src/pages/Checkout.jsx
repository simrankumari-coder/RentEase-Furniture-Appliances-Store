import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Checkout = ({ cart, checkoutBtn, setTenure, tenure }) => {
    const [username, setUsername] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")

    const totalRent = cart.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
    const handleUsername = (e) => {
        setUsername(e.target.value)

    }
    const handleAddress = (e) => {
        setAddress(e.target.value)

    }

    const handleDate = (e) => {
        setDate(e.target.value)

    }
    const handleBtn = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (username.trim() === "" || date === "" || address.trim() === "") {
            return
        }
        checkoutBtn();
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-slate-100 px-4'>
            <form onSubmit={handleBtn} className='w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5 font-semibold md:mt-28 mt-48  h-auto'>
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-purple-800">Checkout</h1>
                    <p className="text-slate-500 mt-2">
                        Complete your rental details
                    </p>
                </div>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Username:
                    <input value={username} onChange={handleUsername} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' placeholder='Enter Your Name' type='text' />

                    {submitted && username.trim() === "" && (<span className='text-red-600  text-sm '>please enter your name</span>)}


                </label>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Delivery Address:
                    <textarea value={address} onChange={handleAddress} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' placeholder='Enter your Delivery Address' type='text' ></textarea>
                    {submitted && address.trim() === "" && (<span className='text-red-600  text-sm '>Please enter your delivery address</span>)}
                </label>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Delivery Date:
                    <input onChange={handleDate} value={date} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' placeholder='choose Delivery Date' type='date' />
                    {submitted && date === "" && (<span className='text-red-600  text-sm '>Please choose a delivery date</span>)}
                </label>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Select the Tenure:
                    <select className='flex flex-col border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' value={tenure} onChange={(e) => { setTenure(e.target.value) }} >
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="12 months">12 months</option>
                    </select>
                </label>
                <div>
                    <h2 className='text-xl font-semibold'>Summary :</h2>
                    {cart.map((item, index) => {
                        return <p key={index} className='flex justify-between text-slate-700'>{item.name} -  ₹{item.price} /month</p>
                    })}
                    <p className='flex justify-between text-slate-700'>Total Items: {cart.length}</p>
                    <p className='flex justify-between text-slate-700'>Total Rent: ₹        {Number(totalRent)} / month
                    </p>
                </div>

                <button type='submit' className=' bg-purple-800 text-white px-6 py-3 rounded-md w-32 cursor-pointer hover:bg-purple-900'>Confirm</button>
            </form>
        </div >
    )
}

export default Checkout
