import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styles from "./Login.module.css";


function Login() {
     const [formData, setFormData] = useState({})
    const [error, setError] = useState(false)
    const history=useHistory()
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ [name]: value })
         console.log(formData);
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
        try {
            console.log(formData);
            const { data } = await axios.post("http://localhost:1234/users/auth", formData)
            history.push("/")
        } catch (error) {
            setError(true)
            console.log(error);
        }

    }
    return (
        <div>
            <input type="text" placeholder="Enter Email" name="email" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="Enter Password" name="password" onChange={handleChange}/>
            <br/>
            <button className={styles.button1} onClick={handleSubmit}>Sign In</button>
            <br />
            {/* {error?"Please enter the details correctly":""}
            <Link to="/signup"><button>Signup</button></Link> */}
            <div className={styles.create}>
                <div>Create account </div>
                <div> * </div>
                <div> Forgot Password</div>
                </div>
        </div>
    )
}

export default Login
