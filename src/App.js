import React, { useState } from "react";
import { CardContainer } from "./components/card-container";

function App() {
  const[score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(0);

  return (
    <div id="content">
      <span id="score">Score: {score}</span>
      <span id="high-score">High score: {highScore}</span>
      <CardContainer />
    </div>
  )
}

export default App;