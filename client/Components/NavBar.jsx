import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../Components/LogoutButton.jsx";

function NavBar({ email }) {
  console.log('email in navbar.js', email)


  return (
    <div
      className="NavBarClass"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100vw",
        height: "50px",
        backgroundColor: "rgba(180, 225, 255, 0.65)",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          textAlign: "center",
          height: "50px",
          alignItems: "center",
          verticalAlign: "middle",
        }}
      >
        <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to="/HomePage">Home</Link>
        </button>
        <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to="/ProfilePage">Profile Page</Link>
        </button>
        <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to={{ pathname: "/AppliedJobLog", state: { email } }}>
            My Application Log
          </Link>
        </button>
        <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to="/NewJobListing">New Job Listing</Link>
        </button>
        <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to="/NewJobPosting">New Job Posting</Link>
        </button>
        {/* <button
          style={{
            borderRadius: "10px",
            margin: "0px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "200px",
            height: "40px",
            backgroundColor: "rgba(105, 235, 255, 0.85)",
          }}
        >
          <Link to="/LoginPage">Login</Link>
        </button> */}
        <LogOut />
      </div>
    </div>
  );
}

export default NavBar;
