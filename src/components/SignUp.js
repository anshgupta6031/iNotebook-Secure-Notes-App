



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    let navigate = useNavigate()

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //  API Call
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        })

        const json = await response.json()

        if (json.success) {
            //  save the auth-token and redirect......
            localStorage.setItem("token", json.authToken)
            navigate("/")
            props.showAlert("Account Created Successfully", "success")
        }

        else {
            props.showAlert("Invalid Details!!!", "danger")
        }
    }


    return (
        <div className='container my-4'>
            <h3>Create an account to use iNotebook</h3>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name='name' aria-describedby="emailHelp" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' required minLength={5} />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} id="cpassword" name='cpassword' required minLength={5} />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}







