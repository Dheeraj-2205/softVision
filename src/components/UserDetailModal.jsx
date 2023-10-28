import React from "react";

function UserDetailModal({ user, closeModal }) {
  const modalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <h2>User Details</h2>
        <button onClick={closeModal}>Close</button>
        <p><strong>User Name:</strong> {user.userName}</p>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
        <p><strong>Mobile Number:</strong> {user.mobileNo}</p>
        <p><strong>Email ID:</strong> {user.emailId}</p>
      </div>
    </div>
  );
}

export default UserDetailModal;
