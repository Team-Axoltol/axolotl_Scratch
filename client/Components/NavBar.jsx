import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="NavBarClass"
      style={{
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
          <Link to="/">Home</Link>
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
          <Link to="AppliedJobLog">Job Searching</Link>
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
          New Job Listing
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
          <Link to="LoginPage">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
