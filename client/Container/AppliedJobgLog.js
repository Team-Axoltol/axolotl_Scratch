import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import ChatBar from "../Components/ChatBar.jsx";

function AppliedJobLog() {
  const [valueOfIndustry, setValueOfIndustry] = useState("");
  const [valueOfCompany, setValueOfCompany] = useState("");
  const [valueOfSalary, setValueOfSalary] = useState("");
  const [valueOfStatus, setValueOfStatus] = useState("");
  const location = useLocation();
  const email = location.state && location.state.email;
  console.log("email in appliedlog.js", email);

  let appliedJobs;
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching job log data");
        const response = await fetch("/api/*****", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        appliedJobs = await response.json();
      } catch (err) {
        console.log("err in fetching jog log");
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    const postData = async () => {
      try {
        const response = await fetch("/api/****", {
          method: "POST",
          headers: { "Content-TYpe": "application/json" },
          body: JSON.stringify("email & values"),
        });
        const newPost = await response.json();
      } catch (err) {
        console.log("theres been an err");
      }
    };
    postData();
  };

  // const jobsFeed = appliedJobs.map((job) => {
  //   return <div>hey</div>;
  // });

  return (
    <div>
      <NavBar />

      <div
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          margin: "0px auto",
          width: "80%",
          padding: "0px 20 0px 20px",
          fontSize: "30px",
        }}
      >
        <div
          style={{
            margin: "0px auto 0px auto",
            width: "100%",
            padding: "0px 50px 0px 50px",
            borderRadius: "25px",
          }}
        >
          <h3>Applied Job Log</h3>
        </div>
      </div>

      <div
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          margin: "50px auto",
          width: "75%",
          padding: "20px",
          fontSize: "30px",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(220, 180, 250, 0.5)",
            borderRadius: "25px",
            margin: "0px auto",
            width: "100%",
            padding: "20px",
            heigth: "100vh",
          }}
        >
          <div style={{ margin: "20px 0px 20px 20px" }}>
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
          <div style={{ margin: "20px 0px 20px 20px" }}>
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
          <div style={{ margin: "20px 0px 20px 20px" }}>
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
          <div style={{ margin: "20px 0px 20px 20px" }}>
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
          <div style={{ margin: "20px 0px 20px 20px" }}>
            <div>
              <button
                style={{
                  heigth: "28px",
                  width: "180px",
                  fontSize: "18px",
                  backgroundColor: "rgba(225, 190, 250, 0.5)",
                  borderRadius: "5px",
                }}
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>render all job posts here</div>
      </div>
      <ChatBar />
    </div>
  );
}

export default AppliedJobLog;
