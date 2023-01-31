import React from "react";
import "../styles/app.css";
import { ScoreCounterContainer } from "./score-counter-container"
import image from "../assets/nfl-logo.svg"

export function Header(props) {
    return (
        <div id="header">
            <img src={image} alt="NFL Logo" />
            <span>Memory Game</span>
            <ScoreCounterContainer score={props.score} highScore={props.highScore} />
        </div>
    )
}