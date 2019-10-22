import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../css/Register.css'

const initialUser = {
    username: '',
    password: '',
    email: '',
    userType: '',
    organization_id: 1,
}

const Register = (props) => {
  const [user, setUser] = useState(initialUser);
  const [orgList, setOrgList] = useState([])

  useEffect(() => {
    axios
    .get('https://saving-the-animals.herokuapp.com/api/organizations')
    .then(res => setOrgList(res.data))
    .catch(err => console.log(err))
  }, [])

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
      e.preventDefault()
      console.log(user)
      axios
      .post('https://saving-the-animals.herokuapp.com/api/auth/register', user)
      .then(res => {
          {user.userType === 'organization' ? props.history.push('/org-login') : props.history.push('/supporter-login')}
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='register-content'>
      <div className='register-form-container'>
        <form onSubmit={handleSubmit}>
        <h3>Register Account</h3>
          <label htmlFor="username">
            Username
            <input type="text" name="username" onChange={handleChanges} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name="password" onChange={handleChanges} />
          </label>
          <label htmlFor='email'>
            Email
            <input type='text' name='email' onChange={handleChanges} />
          </label>
          <div>
            <label htmlFor="userType">
              Are you an Organization or a Supporter?<br />
              <input type="radio" name="userType" value="organization" onChange={handleChanges}/>
              Organization
              <input type="radio" name="userType" value="support" onChange={handleChanges} />
              Supporter
            </label>
          </div>
          {user.userType === 'organization' && (
            <div>
            <label htmlFor='organization_id'>Select your organization: <br /></label>
              <select name='organization_id' onChange={handleChanges}>
                {orgList.map(item => <option key={item.id} value={item.id} onChange={handleChanges}>{item.organ_name}</option>)}
              </select>
            </div>
          )}
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
