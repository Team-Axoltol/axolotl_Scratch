import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import Post from "../Components/CommentPost.jsx";
import ChatBar from "../Components/ChatBar.jsx";
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

import "./homepage.css";

// import "./client/Container/homepage.css"

const Home = () => {
  const location = useLocation();
  const state = location.state;
  console.log("email in homepage.js", state);
  //input nav bar
  //input comment and post feature
  //stretch chat
  //filter

  return (
    <div className="homewrapper">
      <div className="title">
        <div>CAREER CONNECT</div>
      </div>
      <div className="navbarwrapper">
        <NavBar email={state} />
      </div>
      <div className="feedwrapper">
        <div
          className="postandcomments"
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
              borderRadius: "25px",
              margin: "0px auto 0px auto",
              width: "100%",
              padding: "0px 50px 0px 50px",
            }}
          >
            <h3> POSTINGS </h3>
          </div>
        </div>
        <div
          className="postandcomments"
          style={{
            border: "2px solid transparent",
            borderRadius: "25px",
            margin: "0px auto",
            width: "75%",
            padding: "0px",
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
            }}
          >
            <div>
              <Post />
            </div>
          </div>
        </div>
      </div>
      <ChatBar />
    </div>
  );
};

export default Home;
