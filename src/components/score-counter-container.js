import React from "react";
import "../styles/app.css";
import { ScoreCounter } from "./score-counter";
import { HighScoreCounter } from "./high-score-counter";

export function ScoreCounterContainer(props) {
    return (
        <div id="score-counter-container">
            <ScoreCounter score={props.score} />
            <HighScoreCounter highScore={props.highScore} />
        </div>
    )
}