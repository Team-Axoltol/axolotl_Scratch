import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Container/HomePage.js";
import AppliedJobLog from "../Container/AppliedJobgLog.js";
import Profile from "../Container/ProfilePage.js";
import LoginPage from "../Container/LoginPage.js";
import SignUpPage from "../Container/SignUpPage.js";
import NewJobPosting from "../Container/NewJobPosting.js";
import NewJobListing from "../Container/NewJobListing.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/HomePage" element={<Home />} />
        <Route exact path="/AppliedJobLog" element={<AppliedJobLog />} />
        <Route exact path="/ProfilePage" element={<Profile />} />
        <Route exact path="/SignUpPage" element={<SignUpPage />} />
        <Route exact path="/NewJobPosting" element={<NewJobPosting />} />
        <Route exact path="/NewJobListing" element={<NewJobListing />} />
      </Routes>
    </Router>
  );
};

export default App;
