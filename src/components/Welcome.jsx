import React from "react";

const WelcomePage = ({ user }) => {
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Welcome, {user.name}</h1>
      <p><b>Email</b>: {user.email}</p>
    </div>
  );
};

export default WelcomePage;
