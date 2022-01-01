import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import axios from "axios"
function SignUp() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false)
    const history=useHistory()
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({[name]:value})
    }
    function validateDetails(formData) {
        for (let key in formData) {
            if(formData[key].length===0) return false
        }
        return true
    }
    async function handleSubmit() {
        if (validateDetails(formData) === false) {
            setError(true)
            return
        }
        await axios.post("http://localhost:1234/users", formData)
        history.push("/login")
    }
    return (
        <div>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="Enter Email" name="email" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="Enter Password" name="password" onChange={handleChange}/>
            <br/>
            <button onClick={handleSubmit}>Create</button>
            <br />
            {error?"Please enter the details correctly":""}
            <Link to="/login"><button>Login</button></Link>
        </div>
    )
}

export default SignUp
