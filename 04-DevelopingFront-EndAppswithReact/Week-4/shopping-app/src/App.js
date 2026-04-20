import React from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        🌿 Paradise Nursery
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        Welcome to your one-stop destination for beautiful plants
      </p>

      <button
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => alert("Get Started clicked!")}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
