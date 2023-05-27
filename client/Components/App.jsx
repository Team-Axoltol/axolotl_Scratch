import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Container/HomePage.js';
import AppliedJobLog from '../Container/AppliedJobgLog.js';
import Profile from '../Container/ProfilePage.js';

const App = () => {
return (    
    <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AppliedJobLog" element={<AppliedJobLog />} />
        <Route exact path="/ProfilePage" element={<Profile />} />
        </Routes>
    </Router>
    )
};

export default App; 