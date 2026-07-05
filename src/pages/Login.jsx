import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({ isLoggedIn, setIsLoggedIn, setUsername, username }) => {
    const navigate = useNavigate()

    const [hasTypedUsername, setHasTypedUsername] = useState(false)
    const [hasTypedPassword, setHasTypedPassword] = useState(false)
    const [input, setInput] = useState(() => {
        let data = localStorage.getItem("username")
        return data ? JSON.parse(data) : ""
    })
    const [password, setPassword] = useState(() => {
        let data = localStorage.getItem("password")
        return data ? JSON.parse(data) : ""
    })
    const handleInput = (e) => {
        setInput(e.target.value)
        setHasTypedUsername(true)


    }
    const handlePass = (e) => {
        setPassword(e.target.value)
        setHasTypedPassword(true)
    }
    const handleBtn = (e) => {
        e.preventDefault()
        if (input.length < 2 || password.length > 6) {
            return
        }
        localStorage.setItem("username", JSON.stringify(input))
        localStorage.setItem("password", JSON.stringify(password))
        localStorage.setItem("loggedIn", JSON.stringify(true))
        setIsLoggedIn(true)
        setUsername(input)
        setInput("")
        setPassword("")
        navigate("/")
    }




    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-slate-100 px-4'>

            <form onSubmit={handleBtn} className='w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5 font-semibold items-center justify-center md:mt-0 mt-48  h-auto '>
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-purple-800">Login</h1>
                    <p className="text-slate-500 mt-2">
                        Welcome back to RentEase
                    </p>
                </div>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Username:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' type="text" value={input} onChange={handleInput} placeholder='Enter your username' />

                    {(hasTypedUsername === true && input.length < 2) &&
                        <span className='text-red-600  text-sm '>Username must have atleast 2 characters</span>}

                </label>

                <label className='flex flex-col gap-2 font-medium text-slate-700'>Password:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600' placeholder='Enter your Password' type='password' value={password} onChange={handlePass} />

                    {(hasTypedPassword === true && password.length > 6) &&
                        <span className='text-red-600 text-sm'>Password should be less than 6 characters</span>}

                </label>
                <button className='mt-3 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition'>Login</button>
            </form>
        </div >
    )
}

export default Login
