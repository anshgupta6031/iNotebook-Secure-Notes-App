



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate()

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //  API Call
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })

        const json = await response.json()
        console.log(json)

        if (json.success) {
            //  save the auth-token and redirect......
            localStorage.setItem("token", json.authToken)
            navigate("/")
            props.showAlert("Logged In Successfully", "success")
        }

        else {
            props.showAlert("Invalid Credentials!!!", "danger")
        }
    }


    return (
        <div className='container my-4'>
            <h3>Login to continue with iNotebook</h3>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}







