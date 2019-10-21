import React, { useState, useEffect } from "react";
import axios from 'axios'

const initialUser = {
    username: '',
    password: '',
    email: '',
    userType: 'organization',
}

const Register = () => {
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
      .post('https://saving-the-animals.herokuapp.com/api/auth/register', user.userType === 'organization' ? {...user, organization_id: Date.now()} : user)
      .then(res => {
          console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='content'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input type="text" name="username" onChange={handleChanges} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" onChange={handleChanges} />
          </label>
          <label htmlFor='email'>
            Email:
            <input type='text' name='email' onChange={handleChanges} />
          </label>
          <div>
            <label htmlFor="userType">
              Are you an Organization or a Supporter?
              <input type="radio" name="userType" value="organization" checked  onChange={handleChanges}/>
              Organization
              <input type="radio" name="userType" value="support" onChange={handleChanges} />
              Supporter
            </label>
          </div>
          {user.userType === 'organization' && (
            <div>
              <select name='organization'>
                {orgList.map(item => <option key={item.id} value={item.organ_name}>{item.organ_name}</option>)}
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
