import React, { useState } from "react";


function LoginPage() {
  const [pwValue, setPwValue] = useState("");
  const [accValue, setAccValue] = useState("");

  const clickhandler = () => {
    console.log(pwValue, accValue);
    
    //post to somewhere else?
  }

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
            value={pwValue}
            onChange={(e) => setPwValue(e.target.value)}
            style={{ width: "250px", height: "24px", borderRadius: "5px" }}
          ></input>
        </div>
      </div>
      <div>
        <button onClick={()=>clickhandler()}>This is a button :D</button>
      </div>
    </div>
  );
}

export default LoginPage;
