import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Home from "./HomePage";

function LoginPage() {
  const navigate = useNavigate();
  const [pwValue, setPwValue] = useState("");
  const [accValue, setAccValue] = useState("");

  const clickhandler = () => {
    const postData = async () => {
      try {
        const response = await fetch("api/users/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: accValue,
            password: pwValue,
          }),
        });
        //middleware sending back 'new user created'
        const newUser = await response.json();
        console.log({ newUser });
        if (newUser === "logged in") {
          navigate("/HomePage");
        } else {
          navigate("/SignUpPage");
        }
      } catch (err) {
        throw new Error("Request Failed in signup response");
      }
    };
    postData();
  };

  return (
    <div
      style={{
        border: "2px solid rgba(200, 150, 200, 0.5)",
        borderRadius: "25px",
        margin: "50px auto",
        width: "40%",
        padding: "20px",
      }}
    >
      <div>
        <h3>LOG IN</h3>
        <div>
          <span>Account: </span>
        </div>
        <div>
          <input
            value={accValue}
            onChange={(e) => setAccValue(e.target.value)}
            style={{ width: "250px", height: "24px", borderRadius: "5px" }}
          ></input>
        </div>
      </div>
      <div>
        <div>
          <span>Password: </span>
        </div>
        <div>
          <input
            type="password"
            value={pwValue}
            onChange={(e) => setPwValue(e.target.value)}
            style={{ width: "250px", height: "24px", borderRadius: "5px" }}
          ></input>
        </div>
      </div>
      <div>
        <button onClick={() => clickhandler()}>This is a button :D</button>
      </div>
      <div>
        <button>
          <Link to="/SignUpPage">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
