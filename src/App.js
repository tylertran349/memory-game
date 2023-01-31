import React, { useState, useEffect } from "react";
import { Header } from "./components/header"
import { CardContainer } from "./components/card-container";
import { Footer } from "./components/footer";

function App() {
  const[score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(0);
  const[prevCard, setPrevCard] = useState(null);

  useEffect(() => {
    const handleCardClick = (e) => {
      console.log(e.currentTarget.id + " was pressed");
      if(prevCard === e.currentTarget.id) {
        setPrevCard(e.currentTarget.id);
        setHighScore(score);
        setScore(0);
        console.log("Previous card: " + prevCard);
      } else {
        setPrevCard(e.currentTarget.id);
        setScore(score + 1);
        console.log("Previous card: " + prevCard);
      }
    };

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", handleCardClick);
    });

    return () => {
      document.querySelectorAll(".card").forEach(card => {
        card.removeEventListener("click", handleCardClick);
      });
    };

  }, [score, highScore, prevCard])

  return (
    <div id="content">
      <Header score={score} highScore={highScore} />
      <CardContainer />
      <Footer />
    </div>
  )
}

export default App;