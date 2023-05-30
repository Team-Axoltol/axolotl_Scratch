import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import ChatBar from "../Components/ChatBar.jsx";

function NewJobListing() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {
        try {
        const response = await fetch("api/AppliedJobLog")
        const data = await response.json();
        setJobs(data);
        } catch (err) {
        throw new Error("Failed to fetch job data:", error);
        }
    };
    fetchJobs();
    }, []);

  return (
    <div>
        <NavBar />
        <div style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          margin: "50px auto",
          width: "50%",
          padding: "20px",
          fontSize: "30px",
        }}>
            <div style={{
                border: "2px solid rgba(220, 180, 250, 0.5)",
                borderRadius: "25px",
                margin: "20px auto",
                width: "100%",
                padding: "50px"}}>
                <div>
                    <h2>Job Listings</h2>
                    {jobs.length === 0 ? (
                        <p>No jobs available</p>
                    ) : (
                        <ul>
                        {jobs.map((job) => (
                            <li key={job.id}>
                            <h4>Job Title: {job.jobTitle}</h4>
                            <p>Company: {job.company}</p>
                            <p>Industry: {job.industry}</p>
                            <p>Salary: {job.salary}</p>
                            <p>Status: {job.status}</p>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        <ChatBar />
    </div>
  );
}



export default NewJobListing;
