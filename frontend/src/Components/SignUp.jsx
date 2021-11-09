import React from 'react'
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div>
            <input type="text" placeholder="Enter First Name" />
            <br/>
            <input type="text" placeholder="Enter Last Name" />
            <br />
            <input type="text" placeholder="Enter Email" />
            <br/>
            <input type="text" placeholder="Enter Password" />
            <br/>
            <button>Create</button>
            <br/>
            <Link to="/login"><button>Login</button></Link>
        </div>
    )
}

export default SignUp
