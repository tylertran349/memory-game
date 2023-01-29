import React, { useState, useEffect } from "react";
import { CardContainer, attachCardListeners } from "./components/card-container";

function App() {
  const[score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(0);
  const[prevCard, setPrevCard] = useState(null);

  useEffect(() => {
    const handleClick = () => {
      
    };

    attachCardListeners();
  })

  return (
    <div id="content">
      <span id="score">Score: {score}</span>
      <span id="high-score">High score: {highScore}</span>
      <CardContainer />
    </div>
  )
}

export default App;