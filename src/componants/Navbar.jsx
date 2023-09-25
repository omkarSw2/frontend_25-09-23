import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}>
      <a href="/">Home</a>
      <a href="/signup">Signup </a>
      <a href="/login">Login </a>
      <a href="/posts">Posts </a>
    </div>
  );
};

export default Navbar;
