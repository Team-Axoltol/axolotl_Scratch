import React, { useEffect, useReducer, useState } from "react";
import Filter from "./Filter";
import image from "./likethumb.png";

const LikeButton = ({ _id, likecount }) => {
  console.log("likecount", likecount);
  let [count, setCount] = useState(likecount);

  const handleClick = () => {
    const likeButton = async () => {
      try {
        console.log("liking", _id);
        const response = await fetch("/api/homepage/likePost", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id }),
        });
        const newCount = await response.json();
        setCount(newCount);
        // console.log("newcount", newCount);
      } catch (err) {
        console.log("err");
      }
    };
    likeButton();
  };

  return (
    <div className="likebutton" style={{ display: "flex" }}>
      <button alt="thumbs" onClick={handleClick}>
        <img src={image} style={{ width: "14px" }} />
      </button>
      <div>{count}</div>
    </div>
  );
};

export default LikeButton;
