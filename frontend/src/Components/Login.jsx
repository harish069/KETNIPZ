import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />
            <button>Login</button>
            <br />
            <Link to="/SignUp">Create Account</Link>
        </div>
    )
}

export default Login
