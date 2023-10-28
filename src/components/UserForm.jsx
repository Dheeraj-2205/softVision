import React, { useState } from "react";
import ApiService from "../services/ApiService";

function UserForm() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the user data to send to the API
    const userData = {
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      mobileNo: user.mobileNo,
      emailId: user.emailId,
    };

    ApiService.addUser(userData)
      .then((response) => {
        console.log("User data saved:", response.data);
        setUser({
          userName: "",
          password: "",
          firstName: "",
          lastName: "",
          dob: "",
          mobileNo: "",
          emailId: "",
        });
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
      });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            name="emailId"
            value={user.emailId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
