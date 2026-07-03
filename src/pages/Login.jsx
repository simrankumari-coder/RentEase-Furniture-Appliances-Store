import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [input, setInput] = useState("")
    const [password, setPassword] = useState("")
    const handleInput = (e) => {
        e.target.value
    }
    const handlePass = (e) => {
        e.target.value
    }
    return (
        <div>
            <form>

                <label>Username
                    <input type="text" value={input} onChange={handleInput} /></label>

                <label>Password
                    <input type='password' value={password} onChange={handlePass} /></label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
