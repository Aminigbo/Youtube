import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation()
  const [userData, setUserData] = useState(location.state ? location.state : null)

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    fontFamily: "Arial, sans-serif"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center"
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem"
  };

  const nameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem"
  };

  const emailStyle = {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "1.5rem"
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem"
  };

  return (
    <div style={containerStyle}>
      {console.log(userData)}
      <div style={cardStyle}>
        <img
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2534623311.jpg"
          alt="Profile Avatar"
          style={avatarStyle}
        />
        <div style={nameStyle}>{userData.name}</div>
        <div style={emailStyle}>{userData.email}</div>
        <button style={buttonStyle}>Edit Profile</button>
      </div>
    </div>
  );
}
