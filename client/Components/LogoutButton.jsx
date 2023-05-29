import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const logO = async () => {
      try {
        const response = await fetch("/api/users/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const logOutConfirm = await response.json();
        // console.log("logoutconfirm", logOutConfirm);
      } catch (err) {
        console.log(err);
      } finally {
        navigate("/");
      }
    };
    logO();
  };

  return (
    <button
      onClick={handleClick}
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
      Log Out
    </button>
  );
};

export default LogOut;
