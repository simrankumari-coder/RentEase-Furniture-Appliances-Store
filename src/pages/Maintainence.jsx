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
        const updatedRental = rentals.map(item => {
            if (item.cartId === Number(params.id)) {
                return {
                    ...item,
                    maintainStatus: "submitted",
                    issue: submitIssue,
                    description: submitDesc

                }
            }
            console.log("param", params.id)
            console.log("item.cartId", item.cartId)
            console.log(item.cartId === Number(params.id))
            return item
        })
        console.log("fnm.lkdfkjkdlkjffdjfjfjghfjghfjgfjgjfgfjghfjghfgfj", updatedRental)
        setRentals(updatedRental)
        navigate("/rentals")
    }

    const maintain = rentals.find(item => {
        return item.cartId === Number(params.id)
    })


    return (
        <div className=' bg-slate-50 flex flex-col w-full gap-2'>
            <div className='mt-18 flex flex-col ml-16'>
                <h1 className='text-3xl font-bold text-slate-900'>Maintainence Request</h1>
                <p className='text-slate-600 mt-2'>Complete your maintainence issue</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-white flex flex-col gap-4 justify-center items-center max-w-4xl '>
                    <div className='m-4 rounded-md'>

                        <img src={maintain.image} alt={maintain.name} className='rounded-md m-3' />
                        <h3 className='text-xl font-serif'>{maintain.name}</h3>
                        <hr className='bg-gray-200  h-1 mt-0 mb-4' />


                        <h2 className='text-2xl font-bold text-slate-900'>Issue Type</h2>
                        <select value={submitIssue} onChange={(e) => setSubmitIssue(e.target.value)} className='border w-full border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-slate-500 mt-2 px-2 py-1'>
                            <option value="" disabled>Select Issue</option>
                            <option value="Broken" className=' font-medium text-slate-700'>Broken</option>
                            <option value="Damaged" className=' font-medium text-slate-700'>Damaged</option>
                            <option value="Cleaning" className=' font-medium text-slate-700'>Cleaning</option>
                            <option value="Other" className=' font-medium text-slate-700'>Other</option>
                        </select>
                        <h2 className='text-2xl font-bold text-slate-900'>Description</h2>
                        <textarea onChange={(e) => setSubmitDesc(e.target.value)} value={submitDesc} className='border w-full rounded-md outline-none border-slate-300 focus:ring-2 focus:ring-slate-500'></textarea>
                        <div className='mt-2 flex items-center justify-center'>
                            <button onClick={handleBtn} className='bg-slate-700 text-white px-2 py-1 text-xl rounded-md w-32 cursor-pointer hover:bg-slate-800' type='submit'>Submit</button></div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Maintainence
