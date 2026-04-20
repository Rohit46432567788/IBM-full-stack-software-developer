import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>🌿 Paradise Nursery</h1>
      <p>Welcome to your one-stop plant shop</p>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => alert("Get Started")}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
