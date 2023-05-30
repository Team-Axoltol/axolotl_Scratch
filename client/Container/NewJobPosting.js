import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import ChatBar from "../Components/ChatBar.jsx";
import { Link } from "react-router-dom";

function NewJobPosting() {
  const [industryValue, setIndustryValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [salaryValue, setSalaryValue] = useState("");

  const clickhandler = () => {
    const postData = async () => {
      try {
        const response = await fetch("api/AppliedJobLog", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            industry: industryValue,
            company: companyValue,
            jobTitle: titleValue,
            salary: salaryValue,
            status: contentValue,
          }),
        });
        //middleware sending back 'new user created'
        const newJob = await response.json();
        return newJob;
      } catch (err) {
        throw new Error("Request Failed in signup response");
      }
    };
    postData();
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          margin: "50px auto",
          width: "50%",
          padding: "20px",
          fontSize: "30px",
        }}
      >
        <div>
          <div style={{ margin: "10px 0px 0px 0px" }}>Industry:</div>
          <input
            value={industryValue}
            onChange={(e) => setIndustryValue(e.target.value)}
            style={{
              width: "100%",
              height: "24px",
              border: "1px solid rgba(180, 90, 255, 0.5)",
              borderRadius: "7px",
            }}
            placeholder="Millions of workers nationwide will be grateful for your contributions."
          ></input>
        </div>
        <div>
          <div style={{ margin: "10px 0px 0px 0px" }}>Company:</div>
          <input
            value={companyValue}
            onChange={(e) => setCompanyValue(e.target.value)}
            style={{
              width: "100%",
              height: "24px",
              border: "1px solid rgba(180, 90, 255, 0.5)",
              borderRadius: "7px",
            }}
            placeholder="Billions of workers nationwide will be grateful for your contributions."
          ></input>
        </div>
        <div>
          <div style={{ margin: "10px 0px 0px 0px" }}>Job Title:</div>
          <input
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            style={{
              width: "100%",
              height: "24px",
              border: "1px solid rgba(180, 90, 255, 0.5)",
              borderRadius: "7px",
            }}
            placeholder="Trillions of workers nationwide will be grateful for your contributions."
          ></input>
        </div>
        <div>
          <div style={{ margin: "10px 0px 0px 0px" }}>Salary:</div>
          <input
            value={salaryValue}
            onChange={(e) => setSalaryValue(e.target.value)}
            style={{
              width: "100%",
              height: "24px",
              border: "1px solid rgba(180, 90, 255, 0.5)",
              borderRadius: "7px",
            }}
            placeholder="Quadrillions of workers nationwide will be grateful for your contributions."
          ></input>
        </div>
        <div>
          <div style={{ margin: "10px 0px 0px 0px" }}>Content:</div>
          <textarea
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            style={{
              width: "100%",
              height: "200px",
              border: "1px solid rgba(180, 90, 255, 0.5)",
              borderRadius: "7px",
            }}
            placeholder="Quintillions of workers nationwide will be grateful for your contributions."
          ></textarea>
        </div>
        <div style={{ textAlign: "right" }}>
          <button className="BtnSubmit" onClick={() => clickhandler()}>
            <Link to="/NewJobListing">Post it ~!</Link>
          </button>
        </div>
      </div>
      <ChatBar />
    </div>
  );
}

export default NewJobPosting;
