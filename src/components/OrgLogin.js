import React, { useState } from 'react'
import axios from 'axios'

const initialUser = {
    username: '',
    password: ''
}

function OrgLogin(props) {
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
            props.history.push('/org-landing')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
            <label htmlFor='username' name='username'>Username: 
                <input name='username' htmlFor='username' type='text' onChange={handleChanges} /></label>
                <label htmlFor='password' name='password'>Username: 
                <input name='password' htmlFor='password' type='password' onChange={handleChanges} /></label>
            </form>
        </div>
    )
}

export default OrgLogin
