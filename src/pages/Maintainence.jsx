import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Maintainence = ({ rentals, setRentals }) => {
    const navigate = useNavigate()
    const params = useParams()
    const [submitIssue, setSubmitIssue] = useState("")

    const [submitDesc, setSubmitDesc] = useState("")


    const handleBtn = () => {
        if (submitIssue === "") {
            alert("Please select the issue type ")
            return
        }
        if (submitDesc.trim() === "") {
            alert("Please enter a description")
            return
        }

        const updatedRental = rentals.map(item => {
            if (item.cartId === Number(params.id)) {
                return {
                    ...item,
                    maintainStatus: "submitted",
                    issue: submitIssue,
                    description: submitDesc

                }
            }

            return item
        })

        setRentals(updatedRental)
        navigate("/rentals")
    }

    const maintain = rentals.find(item => {
        return item.cartId === Number(params.id)
    })


    return (
        <div className=' bg-slate-50 flex flex-col w-full gap-2'>
            <div className='flex flex-col p-4 items-center justify-center'>
                <div className='bg-white flex flex-col  gap-6 rounded-lg  shadow-lg p-8 max-w-2xl w-full '>
                    <div className='  flex flex-col '>
                        <h1 className='text-xl md:text-3xl font-bold text-slate-900'>Maintainence Request</h1>
                        <p className='text-sm md:text-xl text-slate-500 mt-2'>Complete your maintainence issue</p>
                    </div>
                    <div className='m-4 rounded-md max-w-6xl'>
                        <div className='flex md:justify-start justify-center'>
                            <img src={maintain.image} alt={maintain.name} className='rounded-md w-80 h-56 object-cover m-3' /></div>
                        <h3 className='text-xl font-serif'>{maintain.name}</h3>
                        <hr className='bg-gray-200  h-1 mt-0 mb-4' />


                        <h2 className='text-2xl font-bold text-slate-900'>Issue Type:</h2>
                        <select value={submitIssue} onChange={(e) => setSubmitIssue(e.target.value)} className='border w-full border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-slate-500 mt-2 px-2 py-1'>
                            <option value="" disabled>Select Issue</option>
                            <option value="Broken" className=' font-medium text-slate-700'>Broken</option>
                            <option value="Damaged" className=' font-medium text-slate-700'>Damaged</option>
                            <option value="Cleaning" className=' font-medium text-slate-700'>Cleaning</option>
                            <option value="Other" className=' font-medium text-slate-700'>Other</option>
                        </select>

                        <h2 className='text-2xl font-bold mt-2 text-slate-900'>Description:</h2>
                        <textarea rows="5" cols='20' onChange={(e) => setSubmitDesc(e.target.value)} value={submitDesc} className='border w-full rounded-md outline-none border-slate-300 mt-2 col focus:ring-2 focus:ring-slate-500 resize-none'></textarea>

                        <button onClick={handleBtn} className='bg-slate-700 text-white px-2 py-1 w-full text-xl rounded-md mt-4 cursor-pointer hover:bg-slate-800' type='submit'>Submit</button></div>

                </div>

            </div>
        </div >
    )
}

export default Maintainence
