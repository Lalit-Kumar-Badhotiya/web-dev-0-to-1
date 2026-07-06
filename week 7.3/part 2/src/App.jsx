import { useState } from "react";

function App() {
  const [colour, setColour] = useState("white");

  return (
    <div
      style={{
        backgroundColor: colour,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <button onClick={() => setColour("red")}>Red</button>
        <button onClick={() => setColour("green")}>Green</button>
        <button onClick={() => setColour("blue")}>Blue</button>
        <button onClick={() => setColour("yellow")}>Yellow</button>
        <button onClick={() => setColour("purple")}>Purple</button>
        <button onClick={() => setColour("orange")}>Orange</button>
        <button onClick={() => setColour("black")}>Black</button>
      </div>
    </div>
  );
}

export default App;