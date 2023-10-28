import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import "./UserForm.css"
function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };
  const fetchData = () => {
    ApiService.getUsers()
      .then((response) => {
        // Handle successful data retrieval
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  
  
  const confirmDelete = () => {
    if (selectedUser) {
      ApiService.deleteUser(selectedUser.id)
        .then(() => {
          // Reload the user list or update state
        })
        .catch((error) => console.error(error));
    }
    setSelectedUser(null);
    setShowConfirmation(false);
  };


  useEffect(()=>{
    fetchData();
    confirmDelete()
  },[])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <div className="userForm">
            <div key={user.id}>
              
              <p>{user.userName}</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.mobileNo}</p>
              <p>{user.password}</p>
              <p>{user.password}</p>
              
              <button onClick={() => handleDelete(user)}>Delete</button>
            </div>
          </div>
          
        ))}
      </ul>
      {showConfirmation && (
        <div>
          <h3>Are you sure you want to delete {selectedUser.userName}?</h3>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default UserList;
