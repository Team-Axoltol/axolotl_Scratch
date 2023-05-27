import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
return (    
    <Router>
        <Routes>
        {/* <Route exact path="/" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/city/:id" element={<CityPage />} />         */}
        </Routes>
    </Router>
    )
};

export default App; 