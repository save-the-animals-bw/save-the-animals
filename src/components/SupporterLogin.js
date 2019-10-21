import React, { useState } from 'react'
import axios from 'axios'
import "../css/Form.css";

const initialUser = {
    username: '',
    password: ''
}

function SupporterLogin(props) {
    const [user, setUser] = useState(initialUser)

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('BACKEND ADDRESS ENDPOINT HERE', user)
        .then(res => {
            console.log(res)
            setUser(initialUser)
            localStorage.setItem('token', res.data.token)
            props.history.push('/supporter-landing')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="content">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <label htmlFor="username" name="username">
                    Username:
                    <input
                    name="username"
                    htmlFor="username"
                    type="text"
                    onChange={handleChanges}
                    />
                </label>
                <label htmlFor="password" name="password">
                    Password:
                    <input
                    name="password"
                    htmlFor="password"
                    type="password"
                    onChange={handleChanges}
                    />
                </label>
                <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SupporterLogin
