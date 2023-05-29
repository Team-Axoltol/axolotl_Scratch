import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";

function AppliedJobLog() {
  const [valueOfIndustry, setValueOfIndustry] = useState("");
  const [valueOfCompany, setValueOfCompany] = useState("");
  const [valueOfSalary, setValueOfSalary] = useState("");
  const [valueOfStatus, setValueOfStatus] = useState("");



  return (
    <div>
      <NavBar />

      <div style={{ margin: "20px 0px 20px 50px" }}>
        <span
          style={{
            fontSize: "40px",
            fontWeight: "800",
            backgroundColor: "rgba(100, 1505, 255, 0.75)",
          }}
        >
          Applied Job Log
        </span>
      </div>

      <div
        style={{
          border: "2px solid rgba(200, 150, 200, 0.5)",
          borderRadius: "25px",
          margin: "50px auto",
          width: "50%",
          padding: "10px",
        }}
      >
        <div style={{ margin: "20px 0px 20px 50px" }}>
          <div>
            <span style={{ backgroundColor: "rgba(255, 150, 190, 0.75)" }}>
              industry
            </span>
          </div>
          <div>
            <input
              value={valueOfIndustry}
              onChange={(e) => setValueOfIndustry(e.target.value)}
              style={{ height: "28px", width: "150px" }}
            ></input>
          </div>
        </div>
        <div style={{ margin: "20px 0px 20px 50px" }}>
          <div>
            <span style={{ backgroundColor: "rgba(255, 150, 190, 0.75)" }}>
              company
            </span>
          </div>
          <div>
            <input
              value={valueOfCompany}
              onChange={(e) => setValueOfCompany(e.target.value)}
              style={{ height: "28px", width: "150px" }}
            ></input>
          </div>
        </div>
        <div style={{ margin: "20px 0px 20px 50px" }}>
          <div>
            <span style={{ backgroundColor: "rgba(255, 150, 190, 0.75)" }}>
              salary
            </span>
          </div>
          <div>
            <input
              value={valueOfSalary}
              onChange={(e) => setValueOfSalary(e.target.value)}
              style={{ height: "28px", width: "150px" }}
            ></input>
          </div>
        </div>
        <div style={{ margin: "20px 0px 20px 50px" }}>
          <div>
            <span style={{ backgroundColor: "rgba(255, 150, 190, 0.75)" }}>
              status
            </span>
          </div>
          <div>
            <input
              value={valueOfStatus}
              onChange={(e) => setValueOfStatus(e.target.value)}
              style={{ height: "28px", width: "150px" }}
            ></input>
          </div>
        </div>
        <div style={{ margin: "20px 0px 20px 50px" }}>
          <div>
            <button
              style={{
                heigth: "28px",
                width: "180px",
                fontSize: "18px",
                backgroundColor: "rgba(225, 190, 250, 0.5)",
                borderRadius: "5px",
              }}
            >
              This is a button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobLog;
