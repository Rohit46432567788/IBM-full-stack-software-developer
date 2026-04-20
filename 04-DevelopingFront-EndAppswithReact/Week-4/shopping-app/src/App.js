import React, { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
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
        <p>Welcome to your one-stop plant shop</p>

        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "12px 25px",
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
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🌱 Browse Plants</h2>
      <p>Product list will appear here</p>
    </div>
  );
}

export default App;
