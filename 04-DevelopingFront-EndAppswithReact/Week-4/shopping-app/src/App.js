import React from "react";
import "./App.css";

const App = () => {
  const handleClick = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>🌿 Paradise Nursery</h1>

      <p>
        Discover a wide variety of indoor and outdoor plants for your home.
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default App;
