import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import ChatBar from "../Components/ChatBar.jsx";

//

function Profile() {
  const [user, setUser] = useState({
    name: "JooJooBee Juice",
    age: 100,
    location: "Cup",
    bio: "I'm a software developer interested in web technologies.",
  });

  return (
    <div>
      <NavBar />
      <div
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          margin: "50px auto",
          width: "80%",
          padding: "20px",
          fontSize: "50px",
        }}
      >
        Hi, {user.name}
      </div>
      <div
        style={{
          border: "2px solid rgba(220, 180, 250, 0.5)",
          borderRadius: "25px",
          margin: "30px auto",
          width: "75%",
          padding: "10px",
        }}
      >
        <div>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Location: {user.location}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </div>
      <ChatBar />
    </div>
  );
}

export default Profile;
