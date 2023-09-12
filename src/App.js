import React, { useState, useEffect } from "react";
import { Header } from "./components/header"
import { CardContainer } from "./components/card-container";
import { Footer } from "./components/footer";

function App() {
  const[score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(0);
  const[prevCard, setPrevCard] = useState(null);
  const[renderKey, setRenderKey] = useState(0); // Used to force the cardContainer component to rerender even if the same card is clicked 5 or more times consecutively

  useEffect(() => {
    const handleCardClick = (e) => {
      setRenderKey(renderKey + 1);
      if(prevCard === e.currentTarget.id) {
        setPrevCard(e.currentTarget.id);
        if(score > highScore) {
          setHighScore(score);
        }
        setScore(0);
      } else {
        setPrevCard(e.currentTarget.id);
        setScore(score + 1);
        if(score + 1 > highScore) { // React doesn't update the score state right away so do score + 1 instead of score to ensure that you get the correct value of score
          setHighScore(score + 1);
        }
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

  }, [score, renderKey])

  return (
    <div id="content">
      <Header score={score} highScore={highScore} />
      <CardContainer key={renderKey} />
      <Footer />
    </div>
  );
}

export default App;