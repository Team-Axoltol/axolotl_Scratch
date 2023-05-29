import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatApp from "../Container/ChatApp.js";

const App2 = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/ChatApp" element={<ChatApp />} />
        </Routes>
      </Router>
    );
  };
  
export default App2;