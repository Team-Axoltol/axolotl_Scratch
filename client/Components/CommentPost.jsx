import React, { useEffect, useReducer, useState } from "react";
import Filter from "./Filter";
// import NavBar from './NavBar';

const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({});
  const [formDataRes, setFormDataRes] = useState({
    industry: "",
    company: "",
    salary: "",
    zipcode: "",
    feedbackpost: "",
  });
  //    useEffect(() => {
  //     const fetchData = async() =>{
  //         try{
  //             setIsLoading(true);
  //             const response = await fetch( `/apli/**`, {
  //                 method: "GET",
  //                 headers: {"Content-Type": 'application/json'},
  //             });
  //             const postObj = await response.json();
  //             setInfo(postObj)
  //         }catch(err){
  //             console.log('error in fetching data')
  //         }
  //     }
  // },[])

  const postfeed = "placeholder";

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="postwrapper">
      <div className="filter">
        <Filter />
      </div>
      <label>Share your Experience</label>
      <div>
        <form className="post">
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
          <label>Salary</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, salary: e.target.value })
            }
            value={formDataRes.salary}
            type="text"
            name="salary"
          />
          <label>Zip Code</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, zipcode: e.target.value })
            }
            value={formDataRes.zipcode}
            type="text"
            name="zipcode"
          />
          <label>Post</label>

          <input
            onChange={(e) =>
              setFormDataRes({ ...formDataRes, post: e.target.value })
            }
            value={formDataRes.post}
            type="text"
            name="post"
          />
        </form>
      </div>

      <div className="postswrapper">{postfeed}</div>
    </div>
  );
};

export default Post;
