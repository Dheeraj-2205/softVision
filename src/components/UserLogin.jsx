import React, { useState } from "react";
import axios from "axios"; 

function UserLogin({ setUserData }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3001/login", formData)
      .then((response) => {
        console.log("User logged in:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
      <h2>User Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;
