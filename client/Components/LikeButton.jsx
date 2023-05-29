import React, { useEffect, useReducer, useState } from "react";
import Filter from "./Filter";
import image from "./likethumb.png";

const LikeButton = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="likebutton" style={{ display: "flex" }}>
      <button alt="thumbs">
        <img src={image} style={{ width: "14px" }} />
      </button>
      <div>{count}</div>
    </div>
  );
};

export default LikeButton;
