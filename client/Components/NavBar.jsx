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
          <Link to="/">
            <a>Home </a>
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
          <Link to="/ProfilePage">
            <a>Profile Page</a>
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
          <Link to="AppliedJobLog">
            <a>Job Searching </a>
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
          <a>New Job Listing </a>
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
          <Link to="LoginPage">
            <a>Login </a>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
