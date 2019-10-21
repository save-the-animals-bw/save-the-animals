import React, { useState } from "react";
import axios from "axios";
import "../css/Form.css";

const initialUser = {
  username: "",
  password: ""
};

function OrgLogin(props) {
  const [user, setUser] = useState(initialUser);
  console.log(props);

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://saving-the-animals.herokuapp.com/api/auth/login", user)
      .then(res => {
        console.log(res);
        setUser(initialUser);
        localStorage.setItem("token", res.data.token);
        props.history.push("/org-landing");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="content">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h3>Organization Login</h3>
          <label htmlFor="username" name="username">
            Username
            <input
              name="username"
              htmlFor="username"
              type="text"
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="password" name="password">
            Password
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

export default OrgLogin;
