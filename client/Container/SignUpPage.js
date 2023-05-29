import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./HomePage";

function SignUpPage() {
  const [pwValue, setPwValue] = useState("");
  const [accValue, setAccValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();
  //send info back from backend after we log in -- username or email
  //have that as something we could access
  //when we make a fetch request we attatch that state (username) and the backend we'll take in
  //req param body and the middleware will check for that.
  //job log page to take in username

  const clickhandler = () => {
    console.log(pwValue, accValue);
    const postData = async () => {
      try {
        const response = await fetch("api/users/register", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: accValue,
            password: pwValue,
            name: nameValue,
          }),
        });
        //middleware sending back 'new user created'
        const newUser = await response.json();
        //newUser is accValue and pwValue
        console.log("newuser", newUser);
        if (newUser === "new user created") {
          navigate("/HomePage");
        }
        return newUser;
      } catch (err) {
        throw new Error("Request Failed in signup response");
      }

      //post to somewhere else?
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
        <div>
          <span>Username: </span>
        </div>
        <div>
          <input
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            style={{ width: "250px", height: "24px", borderRadius: "5px" }}
          ></input>
        </div>
      </div>
      <div>
        <div>
          <span>E-mail: </span>
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
      <button>
        <Link to="/">Log In Page</Link>
      </button>
    </div>
  );
}

export default SignUpPage;
