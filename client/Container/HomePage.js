import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import Post from "../Components/CommentPost.jsx";
import ChatBar from "../Components/ChatBar.jsx";
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

import "./homepage.css";

// import "./client/Container/homepage.css"

const Home = () => {
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
        <NavBar />
      </div>
      <div className="feedwrapper">
        <h3> POSTINGS </h3>
        <h3> FEED </h3>
        <div className="postandcomments">
          <Post />
        </div>
      </div>
      <ChatBar />
    </div>
  );
};

export default Home;
