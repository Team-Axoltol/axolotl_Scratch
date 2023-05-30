import React, { useEffect, useReducer, useState } from "react";
import Filter from "./Filter";
import LikeButton from "./LikeButton.jsx";
// import NavBar from './NavBar';

const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const [formDataRes, setFormDataRes] = useState({
    industry: "",
    company: "",
    body: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`datecheckyo`, typeof formDataRes.date);
    console.log(`formdatacheck`, formDataRes);

    const postData = async () => {
      try {
        // console.log("posting");
        const response = await fetch("/api/homepage/createPost", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataRes),
        });
        if (!response) {
          throw new Error("Request Failed");
        }
        const newPost = await response.json();

        //set array with the new arrray
        console.log("newpost", newPost);
      } catch (err) {
        console.log("error at post ");
        console.log(err);
      }
    };
    postData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hihihi");
        setIsLoading(true);
        const response = await fetch(`/api/homepage/getPosts`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        postArr = await response.json();
        setInfo(postArr);
      } catch (err) {
        console.log("error in fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //adjust postArr to be the array or data received from the backend get request
  //   if(!postArr) return null
  const postfeed = info.map((post) => {
    return (
      <div className="postsCase" key={post._id} style={{ border: "solid 1px" }}>
        <div>{post.industry}</div>
        <div>{post.company}</div>
        <div>{post.body}</div>
        <div>{post.date}</div>
        <LikeButton _id={post._id} likecount={post.likeCount} />
      </div>
    );
  });

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="postwrapper">
      <div className="filter">
        <Filter info={info} setInfo={setInfo} />
      </div>
      <label>Share your Experience</label>
      <div>
        <form className="post" onSubmit={handleSubmit}>
          <label>Industry</label>
          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, industry: e.target.value })
            }
            value={formDataRes.industry}
            type="text"
            name="industry"
          />
          <label>Company</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, company: e.target.value })
            }
            value={formDataRes.company}
            type="text"
            name="company"
          />
          <label>Body</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, body: e.target.value })
            }
            value={formDataRes.body}
            type="text"
            name="company"
          />
          <label>Date</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, date: e.target.value })
            }
            value={formDataRes.date}
            type="date"
            name="post"
          />
          <button className="postbutton" type="submit">
            POST
          </button>
        </form>
      </div>
      <div className="postFeed">{isLoading ? <p>Loading...</p> : postfeed}</div>
    </div>
  );
};

export default Post;
