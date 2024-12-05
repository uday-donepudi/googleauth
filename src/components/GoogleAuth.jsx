import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
const GoogleAuth = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      onLogin({
        name: userData.displayName,
        email: userData.email,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div style={{ textAlign: "center"}}>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleAuth;
