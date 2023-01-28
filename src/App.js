import React, { useState } from "react";
import "./styles/app.css"
import { CardOne } from "./components/card-one"

function App() {
  const[score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(0);

  return (
    <div id="content">
      <span id="score">Score: {score}</span>
      <span id="high-score">High score: {highScore}</span>
      <div id="cards">
        <CardOne />
      </div>
    </div>
  )
}

export default App;